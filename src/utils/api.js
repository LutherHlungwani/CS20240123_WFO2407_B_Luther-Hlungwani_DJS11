const BASE_URL = 'https://podcast-api.netlify.app';

export const fetchShows = async () => {
    const response = await fetch (`${BASE_URL}/shows`);
    if (!response.ok) throw new Error('Failed to fetch shows');
    return response.json();
};

export const fetchShowDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/id/<ID>/${showId}`);
    if (!response.ok) throw new Error('Failed to fetch show details');
    return response.json();
};