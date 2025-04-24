module.exports = {
  // theme: 'vdoing', // 使用npm包主题
  theme: require.resolve('../../vdoing'), // 使用本地主题

  title: "精灵知识库",
  description: '前端、后端技术文章。',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        link: '/frontend/',
        items: [
          { text: 'npm库配置', link: '/pages/66afcf/' },
          {
            text: 'PC端',
            items: [
              { text: 'npm常用命令', link: '/pages/98e571/' },
              { text: 'vue问题记录', link: '/pages/bf3e86/' },
              { text: 'ElementUI修改样式', link: '/pages/c0b520/' },
              { text: 'SEO基础知识及优化', link: '/pages/d3430f/' },
              { text: '禁止别人调试我的前端页面代码', link: '/pages/99c0cd/' }
            ],
          },
          {
            text: '移动端',
            items: [
              { text: '小程序', link: '/pages/8d5c6e/' },
            ],
          },
        ],
      },
      {
        text: '后端',
        link: '/backend/',
        items: [
          {
            text: 'Java',
            items: [
              { text: 'Maven库配置', link: '/pages/1a8a54/' },
              { text: '精灵开发框架', link: '/pages/b0ea1c/' },
              { text: '精灵框架插件', link: '/pages/d3e913/' },
              { text: 'Spring系列', link: '/pages/ee3759/' },
            ],
          },
          {
            text: '.NET',
            items: [
              { text: 'Nuget库配置', link: '/pages/77b13d/' },
            ],
          },
          {
            text: 'Python',
            items: [
              { text: 'Pypi库配置', link: '/pages/1d5182/' },
            ],
          },
          {
            text: '常见问题',
            items: [
              { text: 'Word转Pdf字体错乱', link: '/pages/bffcb2/' },
              { text: '使用Jacob进行Word导出PDF', link: '/pages/944ec8/' }
            ],
          },
        ],
      },
      {
        text: '部署',
        link: '/deploy/',
        items: [
          { text: '前端带路径', link: '/pages/2e319f/' },
          {
            text: 'Linux',
            items: [
              { text: '应用部署', link: '/pages/28b42f/' },
            ],
          },
          {
            text: 'Windows',
            items: [
              { text: '应用部署', link: '/pages/4ecb57/' },
            ],
          }
        ],
      },
      {
        text: '技术',
        link: '/technology/',
        items: [
          { text: '视频监控', link: '/pages/5c3156/' },
          { text: 'MySQL系列～', link: '/pages/42b7af/' },
          { text: '应用高可用', link: '/pages/ed7a01/' },
          { text: '静态代码扫描', link: '/pages/d25fa6/' },
          { text: 'OpenSSH版本升级', link: '/pages/273316/' },
          { text: '区块链～', link: '/pages/8a6c0a/' },
          { text: '搜索技巧', link: '/pages/44cbd7/' },
        ]
      },
      {
        text: 'AI',
        link: '/ai/',
        items: [
          { text: 'DeepSeek', link: '/pages/2c0778/' },
        ]
      },
      {
        text: '更多',
        link: '/more/',
        items: [
          { text: 'Markdown教程', link: '/pages/484386/' },
        ],
      },
      { text: '惊喜链接', link: '/worklinks/' },
    ],
    sidebarDepth: 2,
    logo: '/img/logo.png',
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    docsDir: 'docs',
    category: true,
    tag: false,
    archive: true,
    updateBar: {
      showToArticle: true,
      moreArticle: '/archives'
    },
    sidebar: 'structuring',
    author: {
      name: '但丁'
    },
    // 页脚信息
    footer: {
      createYear: 2023,
      copyrightInfo: '精灵程式世界'
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }],
    [
      'meta',
      {
        name: 'keywords',
        content: '前端,前端开发,前端框架,web前端,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,java,springboot,git,github,markdown',
      },
    ],
    ['meta', { name: 'theme-color', content: '#11a8cd' }],
  ],

  plugins: [
    [
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: '复制成功',
        duration: 1000,
        showInMobile: false,
      },
    ],
    [
      'demo-block',
      {
        settings: {
          jsfiddle: false,
          codepen: true,
          horizontal: false,
        },
      },
    ],
    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs')
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
  ],
}
