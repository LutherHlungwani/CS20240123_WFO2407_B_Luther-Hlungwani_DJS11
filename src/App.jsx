import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {CssBaseline, Box} from '@mui/material';
import Sidebar from './components/Sidebar';

function App() {
  

  return (
    <>
    <Box sx={{display: "flex"}}>
    <Router>
        <Navbar />
        
        <Sidebar />
        <div style={{ marginTop: 70, padding: 20}}>
        <Routes>
         <Route path='/' element={<Home/>} />
         {/*  <Route path="/" element={<PodcastList />} /> */}
         {/*<Route path="/podcasts/:id" element={<PodcastDetail />} /> */}


        </Routes>
        </div>
        
      </Router>
        
        
      
    </Box>    

    
    
    

    </>
  )
}

export default App;
