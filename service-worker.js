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
    "revision": "035b8c25494479e3931ed9c0f7a922a3"
  },
  {
    "url": "assets/css/0.styles.eca9cdf0.css",
    "revision": "7ef41ee9635001c548d16fee4356cef8"
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
    "url": "assets/js/1.6936f6cb.js",
    "revision": "a61034ff2dde7284bb0dfe46e2d71d38"
  },
  {
    "url": "assets/js/10.57c3f015.js",
    "revision": "bf113030a8deb0ce0d8422ecffa74975"
  },
  {
    "url": "assets/js/11.570ef946.js",
    "revision": "2e076acd0dd4d43ac0174693727e2fe6"
  },
  {
    "url": "assets/js/12.7bd738be.js",
    "revision": "dce9bcbad19fdacae39bea3df53a7bf7"
  },
  {
    "url": "assets/js/13.092688fe.js",
    "revision": "b85e2fe64a98894db2261aa82ea80b41"
  },
  {
    "url": "assets/js/14.cbdd77dd.js",
    "revision": "896910a0d9d9eab65d60927ab22dcf15"
  },
  {
    "url": "assets/js/15.d2c5cf30.js",
    "revision": "9691f26eedbed793c3cc282466096701"
  },
  {
    "url": "assets/js/16.9c92ecea.js",
    "revision": "2eeebaf862f3d92537d558c8ffcae330"
  },
  {
    "url": "assets/js/17.2f9dfc9f.js",
    "revision": "af0b4c8e98fea25d40232651b69c0d83"
  },
  {
    "url": "assets/js/18.a6995d6c.js",
    "revision": "63d505ce054283f626227fa6b666aa8e"
  },
  {
    "url": "assets/js/19.9a07bc76.js",
    "revision": "0cf9bd75fc2f9ab43bc0c561c6c5903c"
  },
  {
    "url": "assets/js/2.34c0e7a9.js",
    "revision": "59cbca9e94e23e911fad43648220c985"
  },
  {
    "url": "assets/js/20.e824c9ed.js",
    "revision": "dfc09e9f686e8c41d604e0ed73e562a5"
  },
  {
    "url": "assets/js/21.84ba5fa2.js",
    "revision": "c54512be7f3aaf959722f75a322d0c25"
  },
  {
    "url": "assets/js/22.9c7f8076.js",
    "revision": "07ef3933c856b9ac66c226fccc550023"
  },
  {
    "url": "assets/js/23.930d9d35.js",
    "revision": "02ff32ed38cffdf305b4218942aee3c5"
  },
  {
    "url": "assets/js/24.27710a29.js",
    "revision": "a2df8badf0f647cde6823176cc36fcfc"
  },
  {
    "url": "assets/js/25.72e26dcb.js",
    "revision": "ddcc4421b4a0b6103f75bca41850453c"
  },
  {
    "url": "assets/js/26.7ed9e7f6.js",
    "revision": "5c6880505cf233714930536232fa48e0"
  },
  {
    "url": "assets/js/27.1c33e340.js",
    "revision": "bf77727a830e729a75c7755bd7e812e5"
  },
  {
    "url": "assets/js/28.ae4fe4e0.js",
    "revision": "64706f2862a8238a950876bda25372fb"
  },
  {
    "url": "assets/js/29.9c6df3f0.js",
    "revision": "775f23be3d021c3f7a2a99cf3d40de8f"
  },
  {
    "url": "assets/js/4.43cab835.js",
    "revision": "45097c3d493dd202285dac8c458c6a82"
  },
  {
    "url": "assets/js/5.fc484e9a.js",
    "revision": "36acff0f3990c9489d97d5ce67d058dd"
  },
  {
    "url": "assets/js/6.fc84c220.js",
    "revision": "d18bf51dfd1d84dd0cc13688194c86ca"
  },
  {
    "url": "assets/js/7.2ef65e30.js",
    "revision": "e7a76d6fe3530ba992f2e838fff6f14e"
  },
  {
    "url": "assets/js/8.cd60088e.js",
    "revision": "ebfd41bd4a054edc8bf4e4e1aa3ee703"
  },
  {
    "url": "assets/js/9.6fefdc72.js",
    "revision": "67edde92e2da47e462aeb31cbd59a475"
  },
  {
    "url": "assets/js/app.9992acb5.js",
    "revision": "7c3148d1674faed9359fa3a4c3bc1cd4"
  },
  {
    "url": "governance/creators-council/index.html",
    "revision": "db1ea04dd5b7f3b3b1b571f9f4a84f01"
  },
  {
    "url": "governance/curators/index.html",
    "revision": "5ed800086a8ca944d246fddb9a9a16fe"
  },
  {
    "url": "governance/index.html",
    "revision": "c6a510c23fa6b2b9bdf516a1a0456717"
  },
  {
    "url": "governance/marketing/index.html",
    "revision": "4250640cc65c4524ca9c5c601ebcda71"
  },
  {
    "url": "hives/index.html",
    "revision": "ebdda22879e6f3c0ac7e919d115c9e5e"
  },
  {
    "url": "index.html",
    "revision": "50d21a05bef59d919b0e4b337cb8bd0e"
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
    "revision": "57a960abc406f904c9da83bf69af4c08"
  },
  {
    "url": "projects/arena/index.html",
    "revision": "1ddf887ab9795001cdd04185b67401c1"
  },
  {
    "url": "projects/index.html",
    "revision": "985f6dffd30eeeca2410818e8bfed028"
  },
  {
    "url": "projects/podcast/index.html",
    "revision": "474ad5003c0ccd5e3fe0de4135f54f4c"
  },
  {
    "url": "projects/radio/index.html",
    "revision": "6d4a6b327969cc3652416dbb3550c3dd"
  },
  {
    "url": "projects/swarm/index.html",
    "revision": "6cb98ff285c5702fa40f585f28fa1b3a"
  },
  {
    "url": "projects/tavern/index.html",
    "revision": "ce84fbbdb5059505ef87481ac2199ab4"
  },
  {
    "url": "roadmap/index.html",
    "revision": "b36ef6bac8c348cfb12e92725f6ee198"
  },
  {
    "url": "verified/index.html",
    "revision": "8d5361ece61d053c59659a322ac2b1a1"
  },
  {
    "url": "verify/index.html",
    "revision": "bec2682ccb70fe484fa7e73c260878ca"
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
