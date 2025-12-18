(() => {
  const { protocol, host, pathname } = window.location;
  if (protocol !== 'https:' || host !== 'www.bybit.com') return;

  const isP2P = /^\/[^/]+\/p2p\/(buy|sell)\/[^/]+\/[^/]+\/?$/i.test(pathname);

  if (!isP2P) return;

  // Добавляем класс на html для управления видимостью через CSS
  function setCleanerState(enabled) {
    if (enabled) {
      document.documentElement.classList.add('bybit-cleaner-active');
    } else {
      document.documentElement.classList.remove('bybit-cleaner-active');
    }
  }

  // Слушаем изменения в storage (работает без перезагрузки)
  chrome.storage.onChanged.addListener((changes) => {
    if (changes.extensionEnabled) {
      setCleanerState(changes.extensionEnabled.newValue !== false);
    }
  });

  // Инициализация при загрузке
  chrome.storage.sync.get(['extensionEnabled'], (result) => {
    setCleanerState(result.extensionEnabled !== false);
  });
})();