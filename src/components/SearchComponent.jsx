import PropTypes from 'prop-types';
import {
    Box,
    InputBase,
    Paper,
    List,
    ListItem,
    ListItemText,
    Divider,
  } from '@mui/material';
  import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

  const SearchComponent = ({shows, episodes, genres, onResultClick }) => {
    const [searchQuery, setSearchQuery] = usestate('');
    const[filteredResults, setFilteredResults] = useState([]);

    // Filter logic
    const handleSearch = (query) => {
        setSearchQuery(query);

        if(!query.trim()) {
            setFilteredResults([]);
            return;
        }

        const lowerQuery = query.toLowerCase();

        const showResults = shows.filter(
            (show) =>
                show.title.toLowerCase().includes(lowerQuery) ||
            show.description.toLowerCase().includes(lowerQuery)
        );

        const episodeResults = episodes.filter((episode) =>
            episode.title.toLowerCase().includes(lowerQuery)
        );

        const genreResults = genre.filter((genre) =>
            genre.title.toLowerCase().includes(lowerQuery)
        );

        setFilteredResults([
            ...showResults.map((show) => ({type: 'SHOW', data: show})),
            ...episodeResults.map((episode) => ({type: 'EPISODE', data: episode})),
            ...genreResults.map((genre) => ({type: 'GENRE', data: genre})),

        ]);
    };

    return (
        <Box sx={{ position: 'relative', width: '100%', maxWidth: 400 }}>
            {/* Search Input*/}
            <Paper
                component="form"
                sx={{
                    display: 'flex',
                    alignItems:'center',
                    p: '2px 4px',
                    width: '100%',
                    borderRadius: '8px',
                    boxShadow: 1,
                }}
                >
                    <SearchIcon sx={{ m: 1}} />
                    <InputBase
                        placeholder= "Search shows, episodes, genres"
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        sx={{ flex: 1}}
                        />
                </Paper>

                {/* Search  Results */}
                {filteredResults.length > 0 && (
                    <Paper
                    sx={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        zIndex: 10,
                        maxHeight: 300,
                        overflowY: 'auto',

                    }}
                    >
                        <List>
                            {filteredResults.map((results, index) => (
                                <React.Fragment key={index}>
                                    <ListItem
                                        button
                                        onClick={() => onResultClick(result)}
                                        sx={{alignItems: 'flex-start'}}
                                        >
                                            <ListItemText  
                                             primary={`${result.type}: ${result.data.title}`}
                                             secondary={result.type === 'SHOW' ? result.data.description : null}
                                            />
                                    </ListItem>
                                    {index < filteredResults.length - 1 && <Divider />}
                                </React.Fragment>
                            ))}
                         </List>
                    </Paper>
                )}
        </Box>
    );
  };


  // Prop Types
  SearchComponent.propTypes = {
    shows: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        seasons: PropTypes.array.isRequired,
      })
    ).isRequired,
    episodes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        file: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        showIds: PropTypes.array.isRequired,
      })
    ).isRequired,
    onResultClick: PropTypes.func.isRequired, // Callback for handling clicks on search results
  };
  
  export default SearchComponent;