import avatar from './avatar.jpg';
// import './index.css';
// import './index.scss'; 
import style from './index.scss'; // modules: true // 开css模块化打包后的调整
import createAvatar from './createAvatar';

createAvatar(); // 创建图片，也用的是index.scss的样式

var img = new Image();
img.src = avatar;
// img.classList.add('avatar'); // 添加图片，用的是index.scss的样式
img.classList.add(style.avatar); // modules: true // 开css模块化打包后的调整

var root = document.getElementById('root');
root.append(img);