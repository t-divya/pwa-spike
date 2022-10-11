const assets = [
    "/",
    "/index.html",
    "./images/icon.png"
]


self.addEventListener("install", installEvent => {
    console.log("Install");
    installEvent.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(assets)

        }))
})

self.addEventListener("fetch", e => {
    console.log(`intercepting fetch req for ${e.request.url}`);
})


self.addEventListener("fetch", e => {
    console.log(`intercepting fetch request for ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
})