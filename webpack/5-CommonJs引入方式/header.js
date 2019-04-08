function Headers() {
    var dom = document.getElementById('root');
    var header = document.createElement('div');
    header.innerText = 'header';
    dom.append(header);
}

module.exports = Headers; // Headers模块导出