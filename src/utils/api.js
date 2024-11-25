const BASE_URL = 'https://podcast-api.netlify.app';

export const fetchShows = async () => {
    const response = await fetch (`${BASE_URL}/shows`);
    return response.json();
};

export const fetchShowDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/id/<ID>/${id}`);
    return response.json();
};