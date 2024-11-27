import { Routes, Route } from 'react-router-dom';
import  Home from './pages/Home';
import Favorites from './pages/Favourites';
import ShowDetail from './components/ShowDetail';
import Header  from './components/Header';
//import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

const App = () => {

  return (
    <>
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='flex-grow'>

        
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/show" element={<ShowDetail />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>        
        
      </div>
      <AudioPlayer />
    </div>

    </>
  );
};

export default App;
