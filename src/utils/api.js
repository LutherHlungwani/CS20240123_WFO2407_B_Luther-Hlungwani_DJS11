// Import axios for making HTTP requests
import axios from 'axios';

// Base URL for the API, returns Preview
const API_BASE = 'https://podcast-api.netlify.app';

//Function to fetch show previews
export const fetchPreviews = () => axios.get(`${API_BASE}/`);

//Function to fetch detailed show information
export const fetchShows = (id) => axios.get(`${API_BASE}/id/${id}`);

// Function that returns genre object
export const fetchGenre = (id) => axios.get(`${API_BASE}/genre/${id}`);


