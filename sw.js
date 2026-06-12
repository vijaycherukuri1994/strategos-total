const CACHE="strategos-v1";
const ASSETS=["./","./index.html","./app.js","./manifest.json","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  // Never cache API calls
  if(u.hostname.includes("anthropic.com"))return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
