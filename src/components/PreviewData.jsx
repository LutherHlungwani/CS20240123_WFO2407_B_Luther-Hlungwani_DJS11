import {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import { Grid, Card, CardContent, Typography, Avatar, CardActionArea } from '@mui/material';
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
                const response = await fetch("https://podcast-api.netlify.app"); //URL containing data
                const result = await response.json();
                setPodcasts(result);
                setLoading(false);
            } catch(error) {
                console.error("Error fetching podcats:", error);
                setLoading(false);
            }
        
        };
        fetchPodcasts();
    }, []);

    if (loading) return <Typography>Loading podcasts...</Typography>;

    return (
        <Grid container spacing={3}>
          {shows.map((show) => (
            <Grid item xs={12} sm={6} md={4} key={show.id}>
              <Link to={`/shows/${show.id}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ height: '100%', boxShadow: 3 }}>
                  <CardActionArea>
                    <Avatar src={show.image} sx={{ width: 150, height: 150, margin: '0 auto' }} />
                    <CardContent>
                      <Typography variant="h6">{show.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {show.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      );
};

const PodcastCard = ({ title, description, seasons, image, genreIds, updated}) => (

    


    <Card>
        <CardMedia 
        component="img"
        height= "200"
        image= {image}
        alt={`Cover of ${title}`}
        />
        <CardContent>
            <Typography gutterBottom variant ="h6">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3, // Truncate to 3 lines
                    height: 'auto',
                    marginTop: '10px',
                  }}>
                {description}
            </Typography>
            <Typography variant="body2" color="text.seccondary"> 
                Seasons: {seasons}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Updated: {new Date(updated).toLocaleDateString()}
            </Typography>

            <div style={{ marginTop: 10 }}>
                {genreIds.map((genreId) => (
                    <Chip
                         key={genreId}
                         label={GENRE_MAP[genreId] || "Unknown Genre"}
                         size="small"
                         style={{ marginRight: 5 }}
                      />
                    ))}
            </div>
        </CardContent>
    </Card>
);

PodcastCard.defaultProps = { genreIds: [], };

PodcastCard.propTypes = {
    genreIds: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    seasons: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    genreIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    updated: PropTypes.string.isRequired,
  };
  
  export default PodcastList;