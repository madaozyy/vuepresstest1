
module.exports = {
  base: "/vuepresstest1/",
  title: 'HUI', // 设置网站标题
  description: 'hikvision', //描述
  dest: './dist',   // 设置输出目录
  port: 2233, //端口
  plugins: ['demo-container'],//代码复制插件
  markdown: {
    lineNumbers: true
  },
  themeConfig: { //主题配置
    // 添加最后更新时间,String将作为前缀
    lastUpdated: 'Last Updated',
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件文档', link: '/baseComponents/' },
      { text: 'hui-vue', link: 'http://hui-vue.hikvision.com.cn/zh/guide/notice.html' },
      { text: 'github',        // 这里是下拉列表展现形式。
        items: [
          { text: 'hui-vue', link: 'http://hui-vue.hikvision.com.cn/zh/guide/notice.html' },
        ]
      }
    ],
    // 为以下路由添加侧边栏
    // sidebar: ['/', '/quater/']
    sidebar:[
      {
        title: 'items01',
        path: '/',
        children: [ /* ... */ ],
        // initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      },
      {
        title: 'items02',   // 必要的
        // path: '/quater/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {title:'item01',path:'/quater/'},
          {title:'item02',path:'/quater/qqq'},
        ]
      },
    ]
  }
}