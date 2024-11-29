# 🎵 PODCAST APP | PORTFOLIO PIECE 💿
# Podcast App

This is a React-based podcast application that allows users to browse, play, and favorite podcast episodes.

## Features

- Browse podcast shows and episodes
- Play podcast episodes
- Add/remove episodes to/from favorites
- Sort favorites by title or date added
- Responsive design

## Components

- `App`: The main component that sets up routing and context providers
- `AudioPlayer`: Handles playing audio and displays the current episode
- `Favorites`: Displays and manages the user's favorite episodes
- `FavoritesButton`: A button component for adding/removing episodes from favorites
- `Header`: The app's header component with navigation
- `SeasonDetail`: Displays details of a podcast season, including its episodes
- `ShowDetail`: Displays details of a podcast show, including its seasons
- `ShowList`: Displays a list of podcast shows

## Utilities

- `storage.js`: Handles local storage operations for favorites and current episode

## Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server

## Technologies Used

- React
- React Router
- FontAwesome for icons
- Tailwind CSS for styling

## Future Improvements

- Add user authentication
- Implement a backend API for storing user data
- Add search functionality
- Improve accessibility features
