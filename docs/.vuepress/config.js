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
          { text: 'Develop', link: '/develop/' },
          { text: 'SmartAnalytics', link: '/smart-analytics/' },
          { text: 'RaspberryPi', link: '/raspberrypi/' }
        ],
        sidebar: {
          '/develop/': genSidebarDevelop('Develop'),
          '/raspberrypi/': genSidebarRaspberrypi('Raspberry Pi'),

          // fallback
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
          { text: 'Develop', link: '/en/develop/' },
          { text: 'SmartAnalytics', link: '/en/smart-analytics/' },
          { text: 'RaspberryPi', link: '/en/raspberrypi/' }
        ],
        sidebar: {
          '/en/develop/': genSidebarDevelop('Develop'),
          '/en/raspberrypi/': genSidebarRaspberrypi('Raspberry Pi'),

          // fallback
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
        'contribute'
      ]
    }
  ]
}

function genSidebarDevelop (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'semver'
      ]
    }
  ]
}

function genSidebarRaspberrypi (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}
