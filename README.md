# Teamlck

https://teamlck.github.io/teamlck/

## How to write something

**Writing documents**
Write documents in `docs` with markdown format

**Adding navigator**
To add navbar, modify `docs/.vuepress/config.js`

Find `nav` and add it. then just done.

```javascript
module.exports = {
  // ... 

  themeConfig: {
    locales: {
      '/': {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'SmartAnalytics', link: '/smart-analytics/' }
        ]
      },
      '/en/': {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'SmartAnalytics', link: '/en/smart-analytics/' }
        ]
      }
    }
  }
  
  // ...
}
```


## Start
```bash
$ npm start
```

## Build
```bash
$ npm run build
```

## Deploy
```bash
$ npm run deploy
```

## Vuepress API Reference
* https://vuepress.vuejs.org/

