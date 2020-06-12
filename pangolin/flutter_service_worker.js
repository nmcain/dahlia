'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "128a63a51c869ae821475c85aeefa2d6",
"/": "128a63a51c869ae821475c85aeefa2d6",
"main.dart.js": "4833ea79b0b9de83c599b1f852d79464",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2eff6a535d1fc3996e9516ce66c56e40",
"assets/LICENSE": "5fc6b3ce7e9c8199e5add250aa3d340d",
"assets/AssetManifest.json": "367627cb07901840c027d662a52c8b33",
"assets/FontManifest.json": "d49817e779e6057cb0d555dd07bc6a8c",
"assets/lib/images/notes.svg": "bfc3be24a1be5e6bfebe8631e5b5ea59",
"assets/lib/images/gallery.png": "5259483d1365c9b825bd6947cd85c016",
"assets/lib/images/wallpaper.png": "5d490931a734ec44fd88bdc9b947d9ab",
"assets/lib/images/settings.png": "ff6396d14363cf9951455a79b36ae35b",
"assets/lib/images/dahlia.png": "a588898d0b4be5e5234723478478badc",
"assets/lib/images/maximize.svg": "ba29473f37ab194a01c241d5daf7d550",
"assets/lib/images/def.jpg": "24bc69b19e663f4c8174bb27b88bee87",
"assets/lib/images/def.png": "4a9154fbf35a6772da8fe15819d76881",
"assets/lib/images/minimize.svg": "02136894edcb5f8ffff640ddda3d0c10",
"assets/lib/images/calc.png": "be34c099a9a4c15b40692c0610873d3f",
"assets/lib/images/music.png": "545d9a70d4d7c5f525610b8e1c84801c",
"assets/lib/images/Desktop/Dahlia/forest.jpg": "bb9971fadf446779b9f29204180bcf72",
"assets/lib/images/Desktop/Dahlia/dahlia_material_background.jpg": "eb83b6fae9d42765e4c4446c675d4c11",
"assets/lib/images/Desktop/Cityscapes/stairs.png": "d4b0a0eaad1f0017fcc9d73e3a922994",
"assets/lib/images/notes.png": "50ce947efebd3bf7d0d87d2de28286cf",
"assets/lib/images/close.svg": "7ef4ba2fef8ceac03c3960499de3f8bc",
"assets/lib/images/test.jpg": "57020cf201710a061e4a67ef79bc3ebe",
"assets/lib/images/menu.png": "e824461dd4c3e943b4b1da1817290f73",
"assets/lib/images/zucc.jpg": "80fca56b8121335ef576b10238bdd7eb",
"assets/lib/images/google_logo.png": "9b224c9884c2bb081d4ac92b23675c2e",
"assets/lib/images/icons/v2/notes.svg": "766b05b07affbf7a09079e4023a99823",
"assets/lib/images/icons/v2/compiled/weather.svg": "b06373ba267a12ff940af870421e3770",
"assets/lib/images/icons/v2/compiled/settings.png": "d5be1c564f8564d8c0a6f86057b01f2a",
"assets/lib/images/icons/v2/compiled/logs.png": "e312999c04f678ff5941d66718ef6cbf",
"assets/lib/images/icons/v2/compiled/grey-drag.png": "af96264233287efd9efbf4ee2954fc67",
"assets/lib/images/icons/v2/compiled/terminal.png": "524019d8d97ea6c4ccd3db664375e4da",
"assets/lib/images/icons/v2/compiled/files.png": "6c5019286c21611abebc9e9b1086be03",
"assets/lib/images/icons/v2/compiled/theme.png": "1b065d813d384c82002793b1b92b0b85",
"assets/lib/images/icons/v2/compiled/music.png": "91e7695e656f380f48df79ef8616b205",
"assets/lib/images/icons/v2/compiled/android.png": "27a703eacba2bbfed57346b32b7af9b1",
"assets/lib/images/icons/v2/compiled/task.png": "548e313c465c5caf31cad9d574119016",
"assets/lib/images/icons/v2/compiled/notes.png": "5644e3fe7f2f7601a6afdba1f1e17b73",
"assets/lib/images/icons/v2/compiled/calculator.png": "b5d2f4da128fd5a0eed0ed52a5ac9147",
"assets/lib/images/icons/v2/compiled/debian.png": "527552dd24e4cd27bfb4be63b2c454c4",
"assets/lib/images/icons/v2/compiled/macos.png": "2799296e4d4831c96c2b1b205d0ae796",
"assets/lib/images/icons/v2/compiled/root.png": "edb147b20b24112a578f11f4fbdd24f3",
"assets/lib/images/icons/v2/compiled/clock.png": "81ca934d721ad96518209fd99b627908",
"assets/lib/images/icons/v2/compiled/disks.png": "b8c23e9bf62238d900b958540be4f236",
"assets/lib/images/icons/v2/compiled/note_mobile.png": "5bc75d1575688657c59eeab91631d473",
"assets/lib/images/icons/v2/compiled/photos.png": "9b2ee870807ea18761ff4bf308897394",
"assets/lib/images/icons/v2/compiled/messages.png": "004c87d98d7fb5ed52f8d79898d88ae6",
"assets/lib/images/icons/v2/compiled/ubuntu.png": "dc5596b1ded46cc5b61f74b860e98964",
"assets/lib/images/phone.png": "de209128b7b3241f65b8b5c117c10190",
"assets/lib/images/clock.png": "d947514d9e25f18c4fbd72e9ad833195",
"assets/lib/images/Gmail-icon.png": "dfcbd586c56f73e343b25b3af12491c1",
"assets/lib/images/logo-color.png": "6748a20704842170e7a87088d98d2f22",
"assets/lib/application.json": "d77a88179cab3c0105595fdc9dbef771",
"assets/fonts/Source_Code_Pro/SourceCodePro-LightItalic.ttf": "ac76390ae8518be5c0a0bd1f3b088b4b",
"assets/fonts/Source_Code_Pro/SourceCodePro-SemiBold.ttf": "420d3580f5b6e63ba1eabb8555b5f6cf",
"assets/fonts/Source_Code_Pro/SourceCodePro-Medium.ttf": "f621c504d70317ff13774e27d643ba21",
"assets/fonts/Source_Code_Pro/SourceCodePro-SemiBoldItalic.ttf": "6406c55397f0f20723d6b2c2f6515348",
"assets/fonts/Source_Code_Pro/SourceCodePro-MediumItalic.ttf": "0b54cce890a75c2227718eaf473068ba",
"assets/fonts/Source_Code_Pro/SourceCodePro-Light.ttf": "a8d6f8bb989fc3c860ad2eeac21f9daa",
"assets/fonts/Source_Code_Pro/SourceCodePro-BlackItalic.ttf": "fb68d27992feaf97dab1e5640a6f5812",
"assets/fonts/Source_Code_Pro/SourceCodePro-BoldItalic.ttf": "c8066b7adaa839e5f0590da2d34723be",
"assets/fonts/Source_Code_Pro/SourceCodePro-Black.ttf": "efa63de0d44af1e7de9e01a4467dd423",
"assets/fonts/Source_Code_Pro/SourceCodePro-ExtraLight.ttf": "cba7ccef6b4071f76245cc0c5e659aa9",
"assets/fonts/Source_Code_Pro/SourceCodePro-Regular.ttf": "b484b32fcec981a533e3b9694953103b",
"assets/fonts/Source_Code_Pro/SourceCodePro-ExtraLightItalic.ttf": "b98dab96118c3500d0e8c3f887fcfb26",
"assets/fonts/Source_Code_Pro/SourceCodePro-Italic.ttf": "c088801620ae4d69924da74e879170a9",
"assets/fonts/Source_Code_Pro/SourceCodePro-Bold.ttf": "03c11f6b0c0f707075d6483a78824c60",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Roboto/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/fonts/Roboto/Roboto-Light.ttf": "fc84e998bc29b297ea20321e4c90b6ed",
"assets/fonts/Roboto/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/fonts/Roboto/Roboto-Bold.ttf": "ee7b96fa85d8fdb8c126409326ac2d2b",
"assets/fonts/Roboto/Roboto-Thin.ttf": "89e2666c24d37055bcb60e9d2d9f7e35",
"assets/fonts/Roboto/Roboto-Black.ttf": "ec4c9962ba54eb91787aa93d361c10a8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"/",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(CORE);
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

