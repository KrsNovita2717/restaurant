if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const s=e=>n(e,r),a={module:{uri:r},exports:f,require:s};i[r]=Promise.all(c.map((e=>a[e]||s(e)))).then((e=>(o(...e),f)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"694d8fb58d7d852134682dc771a32690"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"5164a7f90ea70da9c75e9ad045bada23"},{url:"favicon.png",revision:"647d9e2be1306621c57cd6abe5dae961"},{url:"icons/icon-128x128.png",revision:"d42fd6e6bfeaac57fb2798adf6fdac0e"},{url:"icons/icon-144x144.png",revision:"72c1eff388a6b78b6c03c617f0cebd43"},{url:"icons/icon-152x152.png",revision:"39e33b8cde164b665a6c44710bb96efc"},{url:"icons/icon-192x192.png",revision:"22cf32e49442e6bff637b4bbcf46d16d"},{url:"icons/icon-384x384.png",revision:"f16aa2e99f230d88b52faf7070a88880"},{url:"icons/icon-512x512.png",revision:"f2f3c3695a9f20ee56fe5ce21c1a43a1"},{url:"icons/icon-72x72.png",revision:"aee5038fcf4374f32e64e47e7452173e"},{url:"icons/icon-96x96.png",revision:"3524bba1d5aa91cc0261db1658c298f3"},{url:"images/hero-image.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"0ed5f42698460271edc55ae086d1e74a"}],{})}));
//# sourceMappingURL=sw.bundle.js.map
