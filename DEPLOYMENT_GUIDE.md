# 🚀 Deployment Guide - Tinder AI React

## 📦 Що було задеплоєно

Репозиторій успішно задеплоєно в: **https://github.com/SerhiiDubei/Tin_UI**

### Структура проекту:

```
Tin_UI/
├── src/                  # React frontend source files
│   ├── App.js           # Main application component
│   ├── App.css          # Application styles
│   ├── index.js         # React entry point
│   ├── index.css        # Global styles
│   └── services/
│       └── api.js       # API service for backend communication
├── public/              # Public assets
│   ├── index.html       # HTML template
│   ├── manifest.json    # PWA manifest
│   └── robots.txt       # SEO robots file
├── backend/             # Express backend
│   ├── src/             # Backend source code
│   │   ├── server.js    # Main server file
│   │   ├── db.js        # Database interface
│   │   ├── db_supabase.js  # Supabase integration
│   │   └── services/    # Backend services
│   └── package.json     # Backend dependencies
├── package.json         # Frontend dependencies
└── Documentation files  # README, guides, etc.
```

## 🔧 Локальний запуск

### Крок 1: Клонування репозиторію
```bash
git clone https://github.com/SerhiiDubei/Tin_UI.git
cd Tin_UI
```

### Крок 2: Встановлення залежностей

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd backend
npm install
```

### Крок 3: Налаштування Environment Variables

Створіть `.env` файл в папці `backend/`:

```bash
# Supabase Configuration
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
# або
SUPABASE_SERVICE_KEY=your_supabase_service_key

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Replicate API (optional, для AI генерації)
REPLICATE_API_TOKEN=your_replicate_token

# OpenRouter API (optional)
OPENROUTER_API_KEY=your_openrouter_key
```

### Крок 4: Запуск Backend

```bash
cd backend
PORT=3001 node src/server.js
```

Backend запуститься на `http://localhost:3001`

### Крок 5: Запуск Frontend

В окремому терміналі:

```bash
npm start
```

Frontend відкриється автоматично на `http://localhost:3000`

## 📱 Production Build

Для створення production build:

```bash
npm run build
```

Build буде створено в папці `build/` і готовий для деплою на будь-який static hosting.

## 🌐 Деплой Options

### Option 1: Vercel (Рекомендовано)

1. Зареєструйтесь на [vercel.com](https://vercel.com)
2. Підключіть GitHub репозиторій
3. Vercel автоматично визначить React проект
4. Додайте environment variables в Vercel dashboard
5. Deploy!

### Option 2: Netlify

1. Зареєструйтесь на [netlify.com](https://netlify.com)
2. New site from Git → вибрати репозиторій
3. Build command: `npm run build`
4. Publish directory: `build`
5. Додайте environment variables
6. Deploy!

### Option 3: GitHub Pages

```bash
# Додайте в package.json:
"homepage": "https://SerhiiDubei.github.io/Tin_UI"

# Встановіть gh-pages:
npm install --save-dev gh-pages

# Додайте scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy:
npm run deploy
```

### Option 4: Docker

```bash
# Build Docker image:
docker build -t tinder-ai-react .

# Run container:
docker run -p 3000:3000 tinder-ai-react
```

## 🎯 Основні features

✅ **Swipe механіка** - 4 напрямки оцінювання (↑+2, →+1, ↓-1, ←-2)  
✅ **React 19** - Сучасний frontend з хуками  
✅ **Express Backend** - RESTful API на Express.js  
✅ **Supabase** - Cloud база даних  
✅ **JWT Authentication** - Безпечна авторизація  
✅ **API Service** - Централізований сервіс для запитів  
✅ **Responsive Design** - Працює на mobile і desktop  
✅ **Production Ready** - Оптимізований production build  

## 📊 API Endpoints

```
Auth:
POST /api/auth/login    - User login

Content:
GET  /api/content/next  - Get next content item
GET  /api/content       - List all content
POST /api/content       - Create new content
DELETE /api/content/:id - Delete content

Ratings:
POST /api/ratings       - Submit rating
GET  /api/ratings       - Get all ratings

Stats:
GET  /api/stats         - Get statistics
GET  /api/swipe-data    - Get swipe data
```

## 🔒 Security Notes

⚠️ **ВАЖЛИВО**: Не комітьте `.env` файли з реальними credentials!  
✅ Використовуйте environment variables на production  
✅ Змініть `JWT_SECRET` з дефолтного значення  
✅ Налаштуйте CORS для production domain  

## 📝 Additional Documentation

- `README.md` - Повна документація проекту
- `ARCHITECTURE.md` - Архітектура додатку
- `DEPLOYMENT.md` - Детальний deployment guide
- `QUICKSTART.md` - Швидкий старт

## 🆘 Troubleshooting

**Backend не запускається:**
- Перевірте Supabase credentials в `.env`
- Переконайтесь що порт 3001 вільний

**Frontend помилки:**
- Видаліть `node_modules` та `package-lock.json`
- Запустіть `npm install` знову
- Перевірте що backend працює на порту 3001

**Build помилки:**
- Перевірте версію Node.js (потрібна v14+)
- Очистіть cache: `npm cache clean --force`

## 🎉 Success!

Проект успішно задеплоєно на GitHub! 

**Repository URL:** https://github.com/SerhiiDubei/Tin_UI

Тепер ви можете:
1. ⭐ Star репозиторій
2. 🍴 Fork для власних модифікацій
3. 🚀 Deploy на Vercel/Netlify
4. 👥 Запросити колаборантів
5. 🔧 Додавати нові features

---

*Created with ❤️ by SerhiiDubei*  
*Deployed: October 24, 2025*
