// ES Moudule 模块引入方式 但浏览器识别不了
// import Header from './header.js';
// import Sidebar from './sidebar.js';
// import Content from './content.js';

var Header = require('./header.js');
var Sidebar = require('./sidebar.js');
var Content = require('./content.js');

new Header();
new Sidebar();
new Content();