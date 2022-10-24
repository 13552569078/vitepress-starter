import { nav } from "./nav"
import { sidebar } from "./sidebar"

export default {
    themeConfig: {
        siteTitle: 'My Custom Title', // 标题
        logo: '/logo.png', // logo
        nav: nav, // 顶部导航 可多层嵌套 
        sidebar: sidebar, // 侧边栏 数组对象两种方式 对象根据顶部导航显隐  数组则全部展示
        // lastUpdatedText: '上次更新时间', //最后更新时间文本 根据git提交具体时间 展示时间更新信息
        markdown: {
            lineNumbers: true
          },
        docFooter: {  //上下篇文本 文案修改
            prev: '上一篇',
            next: '下一篇'
        },
        editLink: { // 在 github 上编辑此页
            pattern: 'https://github.com/XXXXXXXXXX',
            text: '在 github 上编辑此页'
        },
        footer: { // 首页底部 文案
            copyright: 'Copyright © 2021-present Younglina'
        },
        socialLinks: [     // 信息栏展示社交信息 链接博客地址等
            { icon: 'github', link: "https://github.com/XXXXXXXXXX" },
        ]
    }
  }