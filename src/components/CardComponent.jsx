import PropTypes from 'prop-types';
import {
    Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
} from '@mui/material';


const CardComponent = ({id, title, description, seasons, image, genreIds, updated}) => {
    return (
        <Card sx= {{maxWidth: 345, margin: 'auto', borderRadius: 2, boxShadow: 3}}>
              {/*Image section */}
              <CardMedia 
              component="img"
              height="180"
              image={image}
              alt={title}
              sx={{ objectFit: 'cover'}}
              />

            {/*Content Section*/}
            <CardContent>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
                 {description}
             </Typography>

            <Box mb={1}>
            <Typography variant="subtitle2">
             Seasons: {seasons}
            </Typography>
            </Box>

            <Box mb={1}>
             <Typography variant="subtitle2">
                Last Updated: {new Date(updated).toLocaleDateString()}
             </Typography>
            </Box>

            {/* Genres */}
             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                 {genreIds.map((genre) => (
                     <Chip key={genre} label={`Genre #${genre}`} size="small" />
                 ))}
             </Box> 
            </CardContent>
        </Card>
      
    );
};

//Prop Validation

CardComponent.PropTypes = {
    id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  seasons: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  genreIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  updated: PropTypes.string.isRequired,
};

export default CardComponent;