module.exports = {
  base: '/',
  locales: {
    '/': {
      lang: 'ko-KR',
      title: 'Teamlck',
      description: 'Teamlck의 놀이터'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Teamlck',
      description: 'Playground for teamlck'
    }
  },
  serviceWorker: true,
  markdown: {
    lineNumbers: true
  },
  theme: 'vue',
  themeConfig: {
    repo: 'teamlck/teamlck',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'Korean',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last updated',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'SmartAnalytics', link: '/smart-analytics/' },
          { text: 'Develop', link: '/develop/' }
        ],
        sidebar: {
          '/': genSidebarHome('teamlck')
        }
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last updated',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'SmartAnalytics', link: '/en/smart-analytics/' },
          { text: 'Develop', link: '/en/develop/' }
        ],
        sidebar: {
          '/en/': genSidebarHome('teamlck')
        }
      }
    }
  }
}


function genSidebarHome (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'another'
      ]
    }
  ]
}
