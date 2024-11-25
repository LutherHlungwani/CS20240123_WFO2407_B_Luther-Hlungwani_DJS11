import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Show from './pages/ShowView';
import Favourites from './pages/Favourites';
import Player from './components/Player';

const AppRouter = () => (
    <>
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show/:id" element={<Show />} />
            <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </Router>
        <Player />
    </>
);

export default AppRouter;