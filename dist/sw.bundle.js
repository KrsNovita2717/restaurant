if(!self.define){let e,n={};const i=(i,c)=>(i=new URL(i+".js",c).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let a={};const r=e=>i(e,o),f={module:{uri:o},exports:a,require:r};n[o]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(s(...e),a)))}}define(["./workbox-2995ca6a"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"app.bundle.js",revision:"e94039c84789285e08e460e63f335a0a"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"9e56a205b5b99a17c3ec2f01a77e79ee"},{url:"d3cbc2c45690ac3703d2.ttf",revision:null},{url:"favicon.png",revision:"647d9e2be1306621c57cd6abe5dae961"},{url:"fonts/Lora-Regular.ttf",revision:"5fbbc2dd9545c49556bbf4323e73ffe0"},{url:"icons/icon-128x128.png",revision:"d42fd6e6bfeaac57fb2798adf6fdac0e"},{url:"icons/icon-144x144.png",revision:"72c1eff388a6b78b6c03c617f0cebd43"},{url:"icons/icon-152x152.png",revision:"39e33b8cde164b665a6c44710bb96efc"},{url:"icons/icon-192x192.png",revision:"22cf32e49442e6bff637b4bbcf46d16d"},{url:"icons/icon-384x384.png",revision:"f16aa2e99f230d88b52faf7070a88880"},{url:"icons/icon-512x512.png",revision:"f2f3c3695a9f20ee56fe5ce21c1a43a1"},{url:"icons/icon-72x72.png",revision:"aee5038fcf4374f32e64e47e7452173e"},{url:"icons/icon-96x96.png",revision:"3524bba1d5aa91cc0261db1658c298f3"},{url:"images/hero-image.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"8f3fc186f3ba4986d75d1ca04e6ddeaf"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"restaurantdb-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css")),new e.CacheFirst({cacheName:"font-awesome-cache",plugins:[new e.ExpirationPlugin({maxEntries:30}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
