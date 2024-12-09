# 🎵 CodeCast - Podcast Streaming Application 🎧

CodeCast is a React-based web application for streaming and managing podcast content. It provides features such as browsing shows, searching for podcasts, managing favorites, and an audio player for listening to episodes.

## Features

- Browse a list of podcast shows
- Search for podcasts by title or description
- View detailed information about each show and its seasons
- Play podcast episodes with a persistent audio player
- Add/remove episodes to/from favorites
- Sort and manage favorite episodes
- Responsive design for various screen sizes

## Components

- `App`: The main component that sets up routing and context providers
- `AudioPlayer`: Persistent audio player for playing podcast episodes
- `Favorites`: Displays and manages the user's favorite episodes
- `FavoritesButton`: Button for adding/removing episodes from favorites
- `Header`: App header with navigation and search bar
- `SearchBar`: Input component for searching podcasts
- `SearchResults`: Displays results of podcast searches
- `SeasonDetail`: Shows details of a podcast season and its episodes
- `ShowDetail`: Displays details of a podcast show and its seasons
- `ShowList`: Renders a list of podcast shows

## Utilities

- `api.js`: Handles API calls for fetching podcast data
- `constants.js`: Stores constant values used throughout the app
- `storage.js`: Manages local storage operations for favorites and current episode

## Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. Open `http://localhost:3000` in your browser

## Technologies Used

- React
- React Router for navigation
- FontAwesome for icons
- Tailwind CSS for styling
- Local Storage for persisting user data

## Future Improvements

- Implement user authentication
- Add more advanced search filters
- Improve accessibility features
- Implement podcast subscriptions
- Add support for creating and sharing playlists
- Optimize performance for larger datasets

## Deployment

The application is deployed via Netlify and can be accessed at https://codecaster5.netlify.app/

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

