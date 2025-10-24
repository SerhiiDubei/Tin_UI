import React, { useState, useEffect } from 'react';
import './App.css';
import api from './services/api';

function App() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    loadNextContent();
  }, []);

  const loadNextContent = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getNextContent();
      setContent(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSwipe = async (score) => {
    if (!content) return;

    try {
      await api.submitRating(content.id, score);
      loadNextContent();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogin = async (username, password) => {
    try {
      await api.login(username, password);
      setIsAdmin(true);
    } catch (err) {
      alert('Помилка входу: ' + err.message);
    }
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading">Завантаження...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <div className="error">Помилка: {error}</div>
        <button onClick={loadNextContent}>Спробувати знову</button>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🔥 Tinder AI</h1>
        <button onClick={() => {
          const username = prompt('Username:');
          const password = prompt('Password:');
          if (username && password) handleLogin(username, password);
        }}>
          ⚙️ Адмін
        </button>
      </header>

      {content && (
        <div className="swipe-container">
          <div className="card">
            {content.type === 'image' && (
              <img src={content.url} alt={content.prompt} />
            )}
            {content.type === 'video' && (
              <video src={content.url} controls />
            )}
            {content.type === 'audio' && (
              <audio src={content.url} controls />
            )}
            {content.type === 'text' && (
              <div className="text-content">{content.prompt}</div>
            )}
            
            <div className="card-info">
              <p><strong>Prompt:</strong> {content.prompt}</p>
              <p><strong>Model:</strong> {content.model || 'N/A'}</p>
            </div>
          </div>

          <div className="swipe-buttons">
            <button 
              className="swipe-btn swipe-up" 
              onClick={() => handleSwipe(2)}
              title="Дуже добре (+2)"
            >
              ↑
            </button>
            <button 
              className="swipe-btn swipe-right" 
              onClick={() => handleSwipe(1)}
              title="Добре (+1)"
            >
              →
            </button>
            <button 
              className="swipe-btn swipe-down" 
              onClick={() => handleSwipe(-1)}
              title="Погано (-1)"
            >
              ↓
            </button>
            <button 
              className="swipe-btn swipe-left" 
              onClick={() => handleSwipe(-2)}
              title="Дуже погано (-2)"
            >
              ←
            </button>
          </div>

          <div className="instructions">
            <p>↑ Дуже добре (+2) | → Добре (+1)</p>
            <p>↓ Погано (-1) | ← Дуже погано (-2)</p>
          </div>
        </div>
      )}

      {!content && (
        <div className="no-content">
          <p>Немає доступного контенту</p>
        </div>
      )}

      <footer className="footer">
        <p>Tinder AI - React Version v1.0.0</p>
      </footer>
    </div>
  );
}

export default App;
