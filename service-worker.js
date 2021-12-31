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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "625b38eaaeb3ea6bd8b0a6a7f85d914b"
  },
  {
    "url": "assets/css/0.styles.7e51abb5.css",
    "revision": "c01a008aa69f635794311f025a384b38"
  },
  {
    "url": "assets/fonts/roboto-all-300-normal.130eafc2.woff",
    "revision": "130eafc23a987a6cf560c9b69af84818"
  },
  {
    "url": "assets/fonts/roboto-all-400-italic.623257fb.woff",
    "revision": "623257fb07c66742e64481df50113229"
  },
  {
    "url": "assets/fonts/roboto-all-400-normal.73f26bf9.woff",
    "revision": "73f26bf98a715ecab4d2287ff3a02ad0"
  },
  {
    "url": "assets/fonts/roboto-all-500-italic.c01f80aa.woff",
    "revision": "c01f80aae6dadf6e585cc8462cc72be5"
  },
  {
    "url": "assets/fonts/roboto-all-500-normal.08926d7a.woff",
    "revision": "08926d7a008503f9c640b1772c225476"
  },
  {
    "url": "assets/fonts/roboto-all-700-normal.8b2b2aae.woff",
    "revision": "8b2b2aae46819bb8c37c438760dbb4f6"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-400-italic.60bd3b04.woff2",
    "revision": "60bd3b04afa268185f625e4806bed4b1"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-500-italic.6b7b4bbc.woff2",
    "revision": "6b7b4bbcc9b74a11ec7cd2cc06666887"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-ext-300-normal.607808ee.woff2",
    "revision": "607808ee335a962bdfa989bbfd5e8c57"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-ext-400-italic.5a3cc362.woff2",
    "revision": "5a3cc362fe1633bab9ce42fe3a7a3fe2"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-ext-400-normal.2e0b8660.woff2",
    "revision": "2e0b8660b87034ecf56aa9f488fbc08e"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-ext-500-italic.0fac1914.woff2",
    "revision": "0fac19148d422bf3bd57f908d3fe82e6"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-ext-500-normal.d697abd3.woff2",
    "revision": "d697abd346b57baaaa3c64733e998c6a"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-ext-700-normal.638fd23b.woff2",
    "revision": "638fd23bbc8523124320a4bee32cc43b"
  },
  {
    "url": "assets/fonts/roboto-latin-300-normal.80fe119e.woff2",
    "revision": "80fe119e5efa3911b9d61b265f723b3d"
  },
  {
    "url": "assets/fonts/roboto-latin-400-italic.0bd48206.woff2",
    "revision": "0bd48206165307e9ae7b2e20f7ed55ca"
  },
  {
    "url": "assets/fonts/roboto-latin-400-normal.aa23b7b4.woff2",
    "revision": "aa23b7b4bcf2b8f0e876106bb3de69c6"
  },
  {
    "url": "assets/fonts/roboto-latin-500-italic.faed19ea.woff2",
    "revision": "faed19ea281c3bfdfd8d6de9d8bab192"
  },
  {
    "url": "assets/fonts/roboto-latin-500-normal.f00e7e44.woff2",
    "revision": "f00e7e4432f7c70d8c97efbe2c50d43b"
  },
  {
    "url": "assets/fonts/roboto-latin-700-normal.bf28241e.woff2",
    "revision": "bf28241e67511184c14dbd0ef7d39f91"
  },
  {
    "url": "assets/fonts/roboto-latin-ext-300-normal.065438c9.woff2",
    "revision": "065438c98de2b7f979decf5d7e3eb8a0"
  },
  {
    "url": "assets/fonts/roboto-latin-ext-400-italic.ff06c506.woff2",
    "revision": "ff06c506f19b6d60a457255f8af4036a"
  },
  {
    "url": "assets/fonts/roboto-latin-ext-400-normal.718dded3.woff2",
    "revision": "718dded3393324e992b225ac61329e0c"
  },
  {
    "url": "assets/fonts/roboto-latin-ext-500-italic.74826a5c.woff2",
    "revision": "74826a5c01de0b9ea44677e2aaad5e69"
  },
  {
    "url": "assets/fonts/roboto-latin-ext-500-normal.dd464b28.woff2",
    "revision": "dd464b28ac4bc3d57d9336cf31fde8f1"
  },
  {
    "url": "assets/fonts/roboto-latin-ext-700-normal.01a68cca.woff2",
    "revision": "01a68cca6394bb55312ae1d723285d73"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.4c1837f2.js",
    "revision": "fe77b0898bad45469569a9d743faad42"
  },
  {
    "url": "assets/js/10.f177f9dc.js",
    "revision": "292cc5eecdd44e11b0d4b605a8f2922b"
  },
  {
    "url": "assets/js/11.3eab4df0.js",
    "revision": "e4ffb62e0d8153b60f4f628dace52531"
  },
  {
    "url": "assets/js/12.4f087389.js",
    "revision": "be7e07f113d4b60e53ab75972fbf9bd2"
  },
  {
    "url": "assets/js/13.98dd23ed.js",
    "revision": "2b9abe0c6492a329d1c11579aed0ab6d"
  },
  {
    "url": "assets/js/14.e129a10f.js",
    "revision": "c74c1bee881bb4d525b2e7eb056f3cc0"
  },
  {
    "url": "assets/js/2.732d5a8b.js",
    "revision": "a731208494d25125481ab9eb76804467"
  },
  {
    "url": "assets/js/4.cc80c89c.js",
    "revision": "3b270d9ea81f5cf322d04e0b84f5283e"
  },
  {
    "url": "assets/js/5.e1b7befa.js",
    "revision": "5d68ea1ddffe3efe761bdc71cd02797f"
  },
  {
    "url": "assets/js/6.3c62c7de.js",
    "revision": "83d9fdffaa1f4a02bfe614291e973962"
  },
  {
    "url": "assets/js/7.62f54178.js",
    "revision": "f9fd98d379f5ee2760e729d9a596cc99"
  },
  {
    "url": "assets/js/8.f9bca0b8.js",
    "revision": "59209aab0aaeda8c79453ae8116b18fa"
  },
  {
    "url": "assets/js/9.da80ed8b.js",
    "revision": "77c9324ebf450dc2dabdb11d00ae16e4"
  },
  {
    "url": "assets/js/app.6de98365.js",
    "revision": "8c8311f277e96d4430d739f0bf35bda9"
  },
  {
    "url": "governance/index.html",
    "revision": "1840d44de3906b5693635feb2c034ccc"
  },
  {
    "url": "index.html",
    "revision": "ff2b792ec3ae15d1243e3f0c4115cd30"
  },
  {
    "url": "logo-fit.png",
    "revision": "2ac65981e0fa2de7bf53aeca7cf1416f"
  },
  {
    "url": "logo-fit.svg",
    "revision": "ed5003ba3ddf3b6d72742d0cad245195"
  },
  {
    "url": "logo-horizontal.png",
    "revision": "3e7a25a74964abed4dc3e326097fa8b8"
  },
  {
    "url": "logo-horizontal.svg",
    "revision": "03eab9da0e5cfae773e823f5e58e2666"
  },
  {
    "url": "logo-vertical.png",
    "revision": "e979fe20d0df8c0098faf01b4564a313"
  },
  {
    "url": "logo-vertical.svg",
    "revision": "654f7bc851fb39afd50d7207c2ff04ff"
  },
  {
    "url": "logo.png",
    "revision": "19e9df7baa1c0d1b2e8a6916d49bb90f"
  },
  {
    "url": "logo.svg",
    "revision": "ebcbe2d04f709021fb34d5993297d030"
  },
  {
    "url": "logo/android-chrome-192x192.png",
    "revision": "859782d7166b4cc43f8616d94774fbc8"
  },
  {
    "url": "logo/android-chrome-512x512.png",
    "revision": "4b483bfa4bc5dd0006b5e3a067980721"
  },
  {
    "url": "logo/apple-touch-icon.png",
    "revision": "c57aaab99e336b2b1a7b93f3635d4c58"
  },
  {
    "url": "logo/favicon-16x16.png",
    "revision": "ddf8ade88ec0f17edf41e172b4ca0242"
  },
  {
    "url": "logo/favicon-32x32.png",
    "revision": "bd66dcf4aeb538395057f47fa5729717"
  },
  {
    "url": "logo/mstile-144x144.png",
    "revision": "7ecee6d057054ee9c4f07a549b4a76b7"
  },
  {
    "url": "logo/mstile-150x150.png",
    "revision": "2b78bb0613bba8f86e4386420726fa58"
  },
  {
    "url": "logo/mstile-310x150.png",
    "revision": "684db972adc4cc235349221b4e80b5c8"
  },
  {
    "url": "logo/mstile-310x310.png",
    "revision": "b3b662b20614fc62b4f0d741b162448a"
  },
  {
    "url": "logo/mstile-70x70.png",
    "revision": "4f08d583bba0b471ff728da86061ee5a"
  },
  {
    "url": "logo/safari-pinned-tab.svg",
    "revision": "df4b508bcf30c66d813cc10f9ffaf8ff"
  },
  {
    "url": "privacy/index.html",
    "revision": "0830d25ac6f4a7e4f9d16208caba8401"
  }
].concat(self.__precacheManifest || []);
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
