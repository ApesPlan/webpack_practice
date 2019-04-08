function Content() {
    var dom = document.getElementById('root');
    var content = document.createElement('div');
    content.innerText = 'content';
    dom.append(content);
}

export default Content; // Content模块导出