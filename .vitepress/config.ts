import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '听客来帮助文档',
  description: '讲效率就用听客来',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  base: '/web/help/',
  cleanUrls: true,
  outDir: 'dist',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    outline: {
      label: '大纲',
    },
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    darkModeSwitchLabel: '切换到深色模式',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索大纲',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            displayDetails: '显示详情',
            resetButtonTitle: '清除查询结果',
            backButtonTitle: '返回上一级',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              navigateDownKeyAriaLabel: '向下导航',
            },
          },
        },
      },
    },

    nav: createNavbar(),
    sidebar: createSidebar(),

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },
  },
})

function createNavbar() {
  return [
    { text: '帮助文档', link: '/docs/introduction', activeMatch: '^/docs/' },
    { text: '进入SAAS', link: 'https://www.tingkelai.com/tingkelai' },
    { text: '官网', link: 'https://www.tingkelai.com/' },
    {
      text: '下载',
      items: [
        { text: 'Windows 桌面版（64位）', link: '/item-1' },
        { text: 'Windows 桌面版（32位）', link: '/item-1' },
        { text: 'macOS 桌面版（Intel 芯片）', link: '/item-1' },
        { text: 'macOS 桌面版（Apple 芯片）', link: '/item-1' },
      ],
    },
  ]
}

function createSidebar() {
  return [
    {
      text: '例子',
      collapsed: true,
      items: [
        { text: '模板', link: '/docs/template' },
        { text: '测试', link: '/docs/test' },
      ],
    },
  ]
}
