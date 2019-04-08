// 设置useBuiltIns: 'usage'后不需要引用了
// import "@babel/polyfill"; // 这样就能翻译es的特殊变量和函数了 但是文件比较大

const arr = [
    new Promise(() => {}),
    new Promise(() => {})
];

arr.map(item => {
    console.log(item);
});