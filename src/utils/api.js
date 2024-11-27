import axios from 'axios';

const API_BASE = 'https://podcast-api.netlify.app';

export const fetchPreviews = () => axios.get(`${API_BASE}/`);
export const fetchShows = (id) => axios.get(`${API_BASE}/id/${id}`);
export const fetchGenre = (id) => axios.get(`${API_BASE}/genre/${id}`);


