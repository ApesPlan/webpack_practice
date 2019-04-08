function Sidebar() {
    var dom = document.getElementById('root');
    var sidebar = document.createElement('div');
    sidebar.innerText = 'sidebar';
    dom.append(sidebar);
}

export default Sidebar; // Sidebar模块导出