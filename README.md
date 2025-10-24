# 🔥 Tinder AI - React Version

React frontend для системи навчання AI моделей через Tinder-подібний інтерфейс.

## 🚀 Швидкий старт

### 1. Встановлення залежностей

```bash
npm install
```

### 2. Запуск Express backend (в іншому терміналі)

```bash
# Перейти в папку з backend
cd ../your-express-backend-folder

# Запустити backend на порту 3001
node server.js
```

### 3. Запуск React frontend

```bash
npm start
```

Застосунок відкриється на `http://localhost:3000`

## 📁 Структура проєкту

```
src/
├── components/
│   ├── SwipeCard/
│   │   ├── SwipeCard.js          # Головний swipe компонент
│   │   └── SwipeCard.css
│   ├── AdminPanel/
│   │   ├── AdminPanel.js         # Адмін-панель
│   │   └── AdminPanel.css
│   └── Modals/
│       ├── CommentModal.js       # Модалка коментарів
│       ├── LoginModal.js         # Модалка входу
│       ├── GenerateModal.js      # Модалка генерації
│       └── Modal.css
├── services/
│   └── api.js                    # API клієнт
├── hooks/
│   ├── useAppState.js           # State management
│   └── useSwipe.js              # Swipe механіка
├── App.js                        # Головний компонент
├── App.css
├── index.js
└── index.css
```

## ✨ Функціональність

### Swipe механіка
- **↑ (Вгору)**: +2 (Дуже добре)
- **→ (Вправо)**: +1 (Добре)
- **↓ (Вниз)**: -1 (Погано)
- **← (Вліво)**: -2 (Дуже погано)

### Адмін-панель
- 🔐 Авторизація (admin/admin)
- ➕ Генерація нового контенту через Replicate API
- 📊 Перегляд контенту, оцінок та статистики
- 🗑️ Видалення контенту

## 🔧 Конфігурація

### Backend API
Frontend використовує proxy до backend на `http://localhost:3001`.

Переконайтесь, що Express backend запущено на порту **3001**.

### API endpoints

```javascript
// Auth
POST /api/auth/login

// Content
GET  /api/content/next
GET  /api/content
POST /api/content
PUT  /api/content/:id
DELETE /api/content/:id

// Ratings
POST /api/ratings
GET  /api/ratings

// Generation
POST /api/generate

// Stats
GET  /api/stats
GET  /api/swipe-data
```

## 🎨 Стилізація

Проєкт використовує власний CSS з:
- Responsive дизайн для mobile/desktop
- Smooth анімації для swipe
- Gradient background
- Модальні вікна
- Grid layout для адмін-панелі

## 🔄 Порівняння з Vanilla JS версією

### ✅ Переваги React версії:
- Компонентна архітектура
- Автоматичний re-render при зміні state
- React Hooks для логіки
- Простіше тестування
- Краще масштабування

### 📦 Що перенесено:
- ✅ Swipe механіка з touch/mouse підтримкою
- ✅ Адмін-панель з CRUD операціями
- ✅ Авторизація через JWT
- ✅ Генерація через Replicate API
- ✅ Коментарі до оцінок
- ✅ Статистика та аналітика

## 🛠️ Технології

- **React 19** - UI framework
- **Create React App** - Build tool
- **Custom CSS** - Стилізація
- **Fetch API** - HTTP клієнт
- **React Hooks** - State management

## 📝 TODO

- [ ] Додати TypeScript для type safety
- [ ] Імплементувати React Context для глобального state
- [ ] Додати React Router для навігації
- [ ] Додати unit тести (Jest + React Testing Library)
- [ ] Оптимізувати performance (React.memo, useMemo)
- [ ] Додати error boundaries
- [ ] PWA підтримка

## 🐛 Відомі проблеми

Немає

## 📄 Ліцензія

MIT

---

**Автор:** Сергій  
**Версія:** 1.0.0  
**Дата:** 2025-10-13
