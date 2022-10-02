self.addEventListener("install", e => {
    console.log("Install");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([".", "./images/icon.png"])

        }))
})

self.addEventListener("fetch", e => {
    console.log(`intercepting fetch request for ${e.request.url}`);

})
self.addEventListener("fetch", e => {
    console.log(`intercepting fetch request for ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
})