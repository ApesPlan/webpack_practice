import avatar from './avatar.jpg';
import style from './index.scss'; // modules: true // 开css模块化打包后的调整

function createAvatar() {
    var img = new Image();
    img.src = avatar;
    // img.classList.add('avatar');
    img.classList.add(style.avatar); // modules: true // 开css模块化打包后的调整
    
    var root = document.getElementById('root');
    root.append(img);
}

export default createAvatar;