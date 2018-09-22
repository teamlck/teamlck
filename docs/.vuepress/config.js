module.exports = {
  base: '/',
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/android-icon-192x192.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/ms-icon-144x144.png' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: '#ffffff' }],

  ],
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
        ''
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
