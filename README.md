# Bybit P2P Cleaner

Расширение для Chrome, которое упрощает интерфейс Bybit P2P (скрывает/правит элементы через CSS-класс на странице).

## Где работает

Расширение активируется **только** на страницах вида:

- `https://www.bybit.com/<язык>/p2p/buy/<крипто>/<фиат>`
- `https://www.bybit.com/<язык>/p2p/sell/<крипто>/<фиат>`

Примеры:

- `https://www.bybit.com/ru-RU/p2p/buy/USDT/RUB`
- `https://www.bybit.com/en-US/p2p/sell/USDT/RUB`

## Установка (Load unpacked)

1. Открой `chrome://extensions`
2. Включи **Developer mode**
3. Нажми **Load unpacked**
4. Выбери папку проекта (где лежит `manifest.json`)

## Использование

- Открой страницу Bybit P2P (buy/sell)
- Нажми на иконку расширения
- Включи/выключи переключатель

Настройка сохраняется в `chrome.storage.sync`.
