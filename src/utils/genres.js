export const GENRE_MAP = {
    1: 'Personal Growth',
    2: 'Investigative Journalism',
    3: 'History',
    4: 'Comedy',
    5: 'Entertainment',
    6: 'Business',
    7: 'Fiction',
    8: 'News',
    9: 'Kids and Family',
  };
  
  export const getGenreTitles = (genreIds) => {
    return genreIds.map((id) => GENRE_MAP[id] || 'Unknown').join(', ');
  };
  