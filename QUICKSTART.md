# 🚀 Quick Start Guide

## Крок 1: Встановлення

```bash
cd tinder-ai-react
npm install
```

## Крок 2: Запуск backend (Express)

**Варіант A: Якщо у тебе вже є Express backend**

```bash
# В окремому терміналі
cd ../your-backend-folder
node server.js
```

**Варіант B: Якщо backend ще немає**

Створи папку поруч з `tinder-ai-react` і скопіюй туди файли backend:
- `server.js`
- `db.js`
- `config.js`
- `replicate.js`
- `auth.js`
- `content.js`
- `package.json`

Потім:
```bash
cd ../backend-folder
npm install
node server.js
```

Backend має запуститись на `http://localhost:3001`

## Крок 3: Запуск React frontend

```bash
# В папці tinder-ai-react
npm start
```

React app відкриється автоматично на `http://localhost:3000`

## 🎯 Що тестувати

### 1. Swipe функціональність
- Відкрий `http://localhost:3000`
- Спробуй зробити swipe вгору/вниз/вліво/вправо
- Додай коментар до оцінки

### 2. Адмін-панель
- Натисни кнопку "⚙️ Адмін" в header
- Введи: `admin` / `admin`
- Перейди на вкладки:
  - **Контент**: Перегляд всього згенерованого контенту
  - **Оцінки**: Всі swipe оцінки з коментарями
  - **Статистика**: Загальна статистика

### 3. Генерація нового контенту
- В адмін-панелі натисни "+ Згенерувати"
- Введи prompt (наприклад: "a beautiful sunset over mountains")
- Обери модель (flux-schnell - найдешевше)
- Натисни "Згенерувати"
- Зачекай 30-60 секунд

## 🐛 Troubleshooting

### Проблема: "Failed to fetch"
**Рішення:** Переконайся, що Express backend запущено на порту 3001

```bash
# Перевір чи працює backend
curl http://localhost:3001/api/content/next
```

### Проблема: React не запускається
**Рішення:** Видали node_modules та перевстанови

```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Проблема: "Proxy error"
**Рішення:** Перевір `package.json` - має бути:

```json
"proxy": "http://localhost:3001"
```

### Проблема: Backend помилки з БД
**Рішення:** Видали `tinder_ai.db` і запусти backend знову - створить нову БД

```bash
rm tinder_ai.db
node server.js
```

## 📝 Корисні команди

```bash
# Запуск development server
npm start

# Build для production
npm run build

# Тести
npm test

# Перевірка структури проєкту
find src -type f | sort
```

## 🎨 Налаштування

### Змінити порт backend
1. Відкрий `src/services/api.js`
2. Зміни `API_BASE` на новий порт:
```javascript
const API_BASE = 'http://localhost:YOUR_PORT/api';
```
3. Оновi `package.json` proxy:
```json
"proxy": "http://localhost:YOUR_PORT"
```

### Додати нові моделі Replicate
1. Відкрий `src/components/Modals/GenerateModal.js`
2. Додай в масив `models`:
```javascript
const models = [
  { value: 'your-model', label: 'Your Model Name ($price)' },
  // ...
];
```

## ✅ Готово!

Тепер у тебе працює React версія Tinder AI! 🎉

**Наступні кроки:**
- Додай більше контенту через адмін-панель
- Протестуй swipe механіку
- Перевір статистику
- Налаштуй Replicate API для реальної генерації

---

Питання? Проблеми? Дивись повний README.md
