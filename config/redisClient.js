const redis = require('redis');

class CacheManager {
  constructor(url) {
    this.client = null
    this.url = url
  }

  async initialize() {
    try {
      this.client = redis.createClient({ url: this.url })
    } catch (error) {
      console.error('Error initializing Redis client:', error);
    }
  }

  async connect() {
    try {
      if (this.client.isReady) {
        console.log('Redis client is already connected');
        return;
      }
      await this.client.connect();
    } catch (error) {
      console.error('Error connecting to Redis:', error);
    }
  }

  async isHealthy() {
    try {
      const ping = await this.client.ping();
      return ping === 'PONG';
    } catch (error) {
      console.error('Error checking Redis health:', error);
      return false;
    }
  }

  async set(key, value, expiresInMinutes = 60) {
    const valueToStore = typeof value === 'object' ? JSON.stringify(value) : value;
    try {
      await this.client.setEx(key, expiresInMinutes * 60, valueToStore)
    } catch (error) {
      console.log('Error setting value in Redis:', error);
    }
  }

  async get(key) {
    const value = await this.client.get(key);
    return value ? JSON.parse(value) : null;
  }
}

module.exports = { CacheManager }
