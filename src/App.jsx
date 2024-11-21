import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider } from './components/ThemeContext';
import Sidebar from './components/Sidebar';

function App() {
  

  return (
    <>
    <ThemeProvider>
      <Router>
        <Sidebar />
        <div style={{ marginLeft: 250, padding: 20}}>
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/' element={<Home/>} />


        </Routes>
        </div>
      </Router>
    </ThemeProvider>
    
    

    </>
  )
}

export default App
