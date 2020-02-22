window.alertM = function(msg, title = '提示', type = 'info') {
    let j = {
        title: title,
        content: msg,
    };
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
    }

}
