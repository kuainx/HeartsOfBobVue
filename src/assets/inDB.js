let HOBDB = {};
if (!window.indexedDB) {
    window.alertM("您的浏览器不支持 IndexedDB 数据存储（或您已禁用该存储功能），这会影响存档读取和存储，请使用其他浏览器或升级您的浏览器，推荐使用PC端Google Chrome 浏览器。注意，在隐私模式下访问是不受支持的。", "错误", "error");
}
let request = window.indexedDB.open("HOB", 1);
request.onerror = function(event) {
    console.error("indexedDB", event);
    window.alertM("您的浏览器不支持 IndexedDB 数据存储（或您已禁用该存储功能），这会影响存档读取和存储，请使用其他浏览器或升级您的浏览器，推荐使用PC端Google Chrome 浏览器。注意，在隐私模式下访问是不受支持的。", "错误", "error");
};
request.onsuccess = function(event) {
    HOBDB.db = event.target.result;
};
request.onupgradeneeded = function(event) {
    let db = event.target.result;
    db.createObjectStore("HOBSaves", {
        keyPath: "name"
    });
};
HOBDB.set = function(name, dat) {
    let transaction = HOBDB.db.transaction(["HOBSaves"], "readwrite");
    let objectStore = transaction.objectStore("HOBSaves");
    let request = objectStore.get(name);
    request.onsuccess = function(event) {
        let data = event.target.result;
        if (data === undefined) {
            objectStore.add({
                name: name,
                time: new Date(),
                data: dat
            });
        } else {
            data.time = new Date();
            data.data = dat;
            objectStore.put(data);
        }
    };
}
HOBDB.get = function(name, fn) {
    let transaction = HOBDB.db.transaction(["HOBSaves"], "readwrite");
    let objectStore = transaction.objectStore("HOBSaves");
    let request = objectStore.get(name);
    request.onsuccess = function(event) {
        fn(event.target.result);
    };
}
HOBDB.delete = function(name) {
    let transaction = HOBDB.db.transaction(["HOBSaves"], "readwrite");
    let objectStore = transaction.objectStore("HOBSaves");
    let request = objectStore.delete(name);
    request.onsuccess = function(event) {
        console.log(event);
    };
}
HOBDB.getAll = function(fn) {
    let ret = [];
    let transaction = HOBDB.db.transaction(["HOBSaves"], "readwrite");
    let objectStore = transaction.objectStore("HOBSaves");
    objectStore.openCursor().onsuccess = function(event) {
        let cursor = event.target.result;
        if (cursor) {
            ret.push(cursor.value);
            cursor.continue();
        } else {
            ret.sort(function(a, b) {
                return Date.parse(b.time) - Date.parse(a.time)
            });
            fn(ret);
        }
    };
}
export {
    HOBDB
}
