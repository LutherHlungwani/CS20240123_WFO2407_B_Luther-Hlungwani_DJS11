import { Routes, Route } from 'react-router-dom';
import  Home from './pages/Home';
import Favorites from './pages/Favourites';
import ShowDetail from './components/ShowDetail';
import Header  from './components/Header';

import AudioPlayer from './components/AudioPlayer';



const App = () => {

  return (
    <>
    
      
        
        {/*Main container with flex column layout */}  
        <div className='min-h-screen flex flex-col'>
          {/* Header component */}
      <Header />

      {/*Main content area */}
      <div className='flex-grow pb-16'>

{/*Router setup with navigation */}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/show/:id" element={<ShowDetail />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>        
        
      </div>
      
    </div>
    {/*Audio player component fixed at the bottom  */}
    <AudioPlayer />
        
     
    
    

    </>
  );
};

export default App;
