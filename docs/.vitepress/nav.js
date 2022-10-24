export const nav = [
    { text: 'Javascript', link: '/Javascript/', activeMatch: '/Javascript' }, // 匹配Javascript文件夹下面index.md
    { text: 'Html', link: '/Html/' , activeMatch: '/Html'}, // 匹配Html文件夹下面index.md
    { text: 'Baidu', link: 'https://baidu.com/' }, // 第三方链接
    { text:'css' , items: [{ text: 'css3', link: '/css3/' }]} // 可嵌套二级导航
]