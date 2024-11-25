import { useEffect, useState } from 'react';
import SearchComponent from './SearchComponent';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Navbar = () => {
  const [shows, setShows] = useState([]);
  const [episode, setEpisodes] = useState([]);
  const [genres, setGenres] = useState([]);

  //Fetch data 

  useEffect(() => {

    const fetchData = async () => {
      const showsData = await fetch('/api/shows').then((res) => res.json());
      const episodesData = await fetch('/api/episodes').then((res) => res.json());
      const genresData = await fetch('/api/genres').then((res) => res.json());

      setShows(showsData);
      setEpisodes(episodesData);
      setGenres(genresData);
    };
    
    fetchData();
  }, []);

  const handleResultClick = (result) => {
    console.log('Selected Result', result);
  };

  return (
    <AppBar position="static" sx={{ background: '#333'}}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left: Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Podcast Platform
        </Typography>

        {/* Center: Search Component */}
        <Box sx={{ flexGrow: 1, maxWidth: '400px' }}>
          <SearchComponent data={data} onResultClick={handleResultClick} />
        </Box>

        {/* Right: Buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/home"
          >
            Home
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/shows"
          >
            Shows
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/about"
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;