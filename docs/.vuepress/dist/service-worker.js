/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d876f994a81e9f5aa5dcad54bed06bc9"
  },
  {
    "url": "another.html",
    "revision": "1d75a2bd6112858898c83749e0e1b300"
  },
  {
    "url": "assets/css/0.styles.4568b041.css",
    "revision": "2ed4c8df4ff33bc36857f179247b429c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.7c0b9fb1.js",
    "revision": "62743958309dab2c52ea9a790514ef3b"
  },
  {
    "url": "assets/js/4.f41073e2.js",
    "revision": "7a69d9b354a6a9fb434e23b08dd1ec3a"
  },
  {
    "url": "assets/js/5.a828c1e4.js",
    "revision": "43a5cfa2c8a3dffc152000fc5d884e47"
  },
  {
    "url": "assets/js/6.1ef85fa1.js",
    "revision": "c5db77a97e91aead09f97fa478ab3a75"
  },
  {
    "url": "assets/js/7.ed228f78.js",
    "revision": "736c646f7ba83331fde04e2a54b4470c"
  },
  {
    "url": "assets/js/8.98ae69c5.js",
    "revision": "f3a0da71e19d866bed9788954f889569"
  },
  {
    "url": "assets/js/9.67c17cf6.js",
    "revision": "a85c3514bae13e1cf66ef4cab3468582"
  },
  {
    "url": "assets/js/app.2d19a8c2.js",
    "revision": "74739d5a2bf8180fcd47249250a9afc4"
  },
  {
    "url": "en/another.html",
    "revision": "1297588fdef6876b27504d779fe58e3d"
  },
  {
    "url": "en/index.html",
    "revision": "58c7f4cea1ccb427763633ff29afb828"
  },
  {
    "url": "en/smart-analytics/index.html",
    "revision": "d169d5595583794ab4c62afd34d4e63f"
  },
  {
    "url": "index.html",
    "revision": "de81123215049bcbf23921da5bdded7b"
  },
  {
    "url": "smart-analytics/index.html",
    "revision": "e656ab32ade2dcfd5f0977be3ce72e65"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
