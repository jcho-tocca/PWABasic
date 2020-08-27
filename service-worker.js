// バージョン
const CACHE_NAME = 'static-cache-v1';

// キャッシュ対象リソース
const FILES_TO_CACHE = [
	'/',
	'/index.php',
	'/images/icon-128x128.png',
	'/images/icon-144x144.png',
	'/images/icon-152x152.png',
	'/images/icon-192x192.png',
	'/images/icon-256x256.png',
	'/images/icon-512x512.png'
  ];

self.addEventListener('install', event => {
	// CODELAB: Precache static resources here.
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log('[ServiceWorker] Pre-caching offline page');
			return cache.addAll(FILES_TO_CACHE);
		})
	);
});

self.addEventListener('activate', event => {
	// CODELAB: Remove previous cached data from disk.
	event.waitUntil(
		caches.keys().then((keyList) => {
			return Promise.all(keyList.map((key) => {
				if (key !== CACHE_NAME) {
				console.log('[ServiceWorker] Removing old cache', key);
				return caches.delete(key);
				}
			}));
		})
	);
});

self.addEventListener('fetch', event => {
	// CODELAB: Add fetch event handler here.
	if (event.request.mode !== 'navigate') {
		// Not a page navigation, bail.
		return;
	}
	event.respondWith(
		fetch(event.request)
			.catch(() => {
				return caches.open(CACHE_NAME)
					.then((cache) => {
						return cache.match('offline.html');
				});
			})
	);
});