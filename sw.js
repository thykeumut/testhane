/* TESTHANE — basit service worker
   Uygulama kabuğunu (HTML/CSS/JS/veri) önbelleğe alır;
   Wikimedia görselleri ilk yüklemeden sonra çevrimdışı da gelir. */
(function () {
  "use strict";

  var CACHE = "testhane.v3";
  var ASSETS = [
    "./",
    "./index.html",
    "./styles.css",
    "./app.js",
    "./manifest.json",
    "./icon.svg",
    "./data/tests.js",
    "./data/new-tests.js",
    "./data/extra-tests.js",
    "./data/wiki.js",
    "./data/wiki-extras.js",
    "./data/food.js"
  ];

  self.addEventListener("install", function (e) {
    e.waitUntil(
      caches.open(CACHE)
        .then(function (c) { return c.addAll(ASSETS); })
        .then(function () { return self.skipWaiting(); })
    );
  });

  self.addEventListener("activate", function (e) {
    e.waitUntil(
      caches.keys()
        .then(function (keys) {
          return Promise.all(keys.filter(function (k) { return k !== CACHE; })
            .map(function (k) { return caches.delete(k); }));
        })
        .then(function () { return self.clients.claim(); })
    );
  });

  self.addEventListener("fetch", function (e) {
    if (e.request.method !== "GET") return;
    var url = new URL(e.request.url);
    var sameOrigin = url.origin === self.location.origin;
    var isWikiAsset = /(^|\.)wikimedia\.org$/.test(url.hostname);

    // sayfa gezinmesi: önce ağ, çevrimdışıysa önbellekteki kabuk
    if (sameOrigin && e.request.mode === "navigate") {
      e.respondWith(
        fetch(e.request).catch(function () {
          return caches.match("./").then(function (hit) { return hit || Response.error(); });
        })
      );
      return;
    }

    e.respondWith((function () {
      var cached;
      return caches.match(e.request)
        .then(function (hit) {
          cached = hit;
          if (cached && (sameOrigin || isWikiAsset)) return cached;
          return fetch(e.request).then(function (res) {
            if ((sameOrigin || isWikiAsset) && (res.ok || res.type === "opaque")) {
              var copy = res.clone();
              caches.open(CACHE)
                .then(function (c) { return c.put(e.request, copy); })
                .catch(function () { /* kota dolu olabilir */ });
            }
            return res;
          });
        })
        .catch(function () { return cached || Response.error(); });
    })());
  });
})();
