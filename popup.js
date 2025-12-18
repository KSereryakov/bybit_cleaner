const enableToggle = document.getElementById('enableToggle');
const statusDiv = document.getElementById('status');

// Загружаем сохраненное состояние
chrome.storage.sync.get(['extensionEnabled'], (result) => {
  const isEnabled = result.extensionEnabled !== false;
  enableToggle.checked = isEnabled;
  updateStatus(isEnabled);
});

// Обработчик изменения свитчера
enableToggle.addEventListener('change', (e) => {
  const isEnabled = e.target.checked;
  // Сохраняем в storage — content.js автоматически получит изменение через onChanged
  chrome.storage.sync.set({ extensionEnabled: isEnabled });
  updateStatus(isEnabled);
});

function updateStatus(isEnabled) {
  if (isEnabled) {
    statusDiv.textContent = '✓ Расширение включено';
    statusDiv.className = 'status enabled';
  } else {
    statusDiv.textContent = '✗ Расширение отключено';
    statusDiv.className = 'status disabled';
  }
}
