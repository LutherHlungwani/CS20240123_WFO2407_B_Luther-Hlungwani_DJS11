import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favourites';
import ShowDetail from './components/ShowDetail';
import Header from './components/Header';
import AudioPlayer from './components/AudioPlayer';
import SearchResults from './pages/SearchResults';

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Header component */}
      <Header />
      {/* Main content data */}
      <main className='flex-grow pb-16'>
        {/* Route configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </main>
      {/* Audio player component */}
      <AudioPlayer />
    </div>
  );
};

export default App;