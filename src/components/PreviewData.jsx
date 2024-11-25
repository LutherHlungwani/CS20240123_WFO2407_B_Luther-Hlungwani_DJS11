import {useState, useEffect} from 'react';

import { Grid, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';


//Genre ID-to-Title mapping
const GENRE_MAP = {

    1: "Personal Growth",
    2: "Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family",
};

const PodcastList = () => {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPodcasts = async () => {

            try {
                const preview = await fetch("https://podcast-api.netlify.app"); //URL containing data
                const result = await preview.json();
                setPodcasts(result);
                setLoading(false);
            } catch(error) {
                console.error("Error fetching podcats:", error);
                setLoading(false);
            }
        
        };
        fetchPodcasts();
    }, []);

    if (loading) {

      return (
        <Box display="flex" justifyContent="Center" mt={4}>
          <CircularProgress />
        </Box>
      );
    };
  

  return(
    <Grid container spacing={3} justifyContent="center" mt={3}>
    {data.map((item) => (
      <Grid item key={item.id}>
        <CardComponent
          id={item.id}
          title={item.title}
          description={item.description}
          seasons={item.seasons}
          image={item.image}
          genreIds={item.genreIds}
          updated={item.updated}
        />
      </Grid>
    ))}
  </Grid>
  );
};


export default PodcastList;