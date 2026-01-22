// service-worker.js На минималках без кэширования
// Без интернета приложение работать не будет
self.addEventListener('install', function(event){
  // Просто пропускаем установку без кэширования
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  // Говорим, что активация завершена
  event.waitUntil(self.clients.claim());
});

// Перехватывать fetch не обязательно — если не нужно кэширование,
// можно вообще не обрабатывать запросы.
// Но если вы хотите, чтобы SW "работал", но не мешал — просто ничего не делайте.