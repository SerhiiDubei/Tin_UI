// API Service для взаємодії з backend
const API_BASE = process.env.REACT_APP_API_URL || '/api';

class ApiService {
  constructor() {
    this.token = localStorage.getItem('token');
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    return headers;
  }

  async request(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint}`;
    const config = {
      ...options,
      headers: this.getHeaders(),
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth
  async login(username, password) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    this.setToken(data.token);
    return data;
  }

  logout() {
    this.setToken(null);
  }

  // Content
  async getNextContent() {
    return this.request('/content/next');
  }

  async getAllContent() {
    return this.request('/content');
  }

  async createContent(content) {
    return this.request('/content', {
      method: 'POST',
      body: JSON.stringify(content),
    });
  }

  async deleteContent(id) {
    return this.request(`/content/${id}`, {
      method: 'DELETE',
    });
  }

  // Ratings
  async submitRating(contentId, score, comment = '') {
    return this.request('/ratings', {
      method: 'POST',
      body: JSON.stringify({ content_id: contentId, score, comment }),
    });
  }

  async getAllRatings() {
    return this.request('/ratings');
  }

  // Stats
  async getStats() {
    return this.request('/stats');
  }

  async getSwipeData() {
    return this.request('/swipe-data');
  }

  // Generate
  async generate(prompt, model) {
    return this.request('/generate', {
      method: 'POST',
      body: JSON.stringify({ prompt, model }),
    });
  }
}

export default new ApiService();
