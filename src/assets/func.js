window.alertM = function(msg, title = '提示', type = 'info', assign = {}) {
    let j = {
        title: title,
        content: msg,
        okText:'确认',
        cancelText:'取消'
    };
    j = Object.assign(j, assign);
    switch (type) {
        case 'info':
            window.vm.$info(j);
            break;
        case 'success':
            window.vm.$success(j);
            break;
        case 'warning':
            window.vm.$warning(j);
            break;
        case 'error':
            window.vm.$error(j);
            break;
        case 'confirm':
            window.vm.$confirm(j)
            break;
    }

}
