const localCache = {
  get: (key: string) => {
    return JSON.parse(localStorage.getItem(key));
  },

  set: (key: string, value: object) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

export default localCache;
