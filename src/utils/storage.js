
  
  export const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  export const clearLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  export const getFavorites = () => {
    return getFromLocalStorage('favourites') || [];
  };

  export const addFavorites = ( episode ) => {
    const favorites = getFavorites();
    const updatedFavorites = [...favorites, {...episode, addedAt: new Date().toISOString() }];
    saveToLocalStorage('favorites', updatedFavorites);
  };

  export const removeFavorite = (episodeId) => {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter((fav) => fav.id !== episodeId);
    saveToLocalStorage('favorites', updatedFavorites);
  };

  export const isFavorite = (episodeId) => {
    const favorites = getFavorites();
    return favorites.some((fav) => fav.id === episodeId);

  };