window.alertM = function(msg, title = '提示', type = 'info', assign = {}) {
    let j = {
        title: title,
        content: msg,
        color: type
    };
    switch (type) {
        case 'error':
            j.color = 'danger';
            j.icon = 'times'
            break;
    }
    if (assign.onCancel == undefined && assign.noText == undefined) {
        j.noText = '';
    }
    j = Object.assign(j, assign);
    window.vm.$AlertM(j);
}
