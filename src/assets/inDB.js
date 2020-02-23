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
    let db = event.target.result;
    let transaction = db.transaction(["HOBSaves"], "readwrite");
    transaction.oncomplete = function() {
        window.alertM("完成", "成功", "success");
    };
    let objectStore = transaction.objectStore("HOBSaves");
    HOBDB.set = function(name, time, dat) {
        let request = objectStore.add({
            name: name,
            time: time,
            data: dat
        });
        request.onsuccess = function(event) {
            console.log(event);
        };
    }
    HOBDB.get = function(name) {
        let request = objectStore.get(name);
        request.onsuccess = function(event) {
            console.log(event);
        };
    }
};
request.onupgradeneeded = function(event) {
    let db = event.target.result;
    db.createObjectStore("HOBSaves", {
        keyPath: "name"
    });
};
export {
    HOBDB
}
