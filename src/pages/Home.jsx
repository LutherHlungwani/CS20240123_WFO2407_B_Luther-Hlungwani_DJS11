import { useEffect } from "react";
import PodcastList from "../components/PreviewData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
    const [show, setShows] = useState([]);
    const [loading, setLoading] = useState(true);

   useEffect(() => {
    const getShows = async () => {
        const data = await fetchShows();
        setShows(data.sort((a, b) => a.title.localeComapare(b.title)));
        setShows(false);
    };
    getShows();
}, []);

if (loading) return <div>Loading...</div>;

return (

    <div className = "p-4">
        <h1 className= "text-2xl font-bold">CodeCast</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {shows.map(show => (
            <ShowCard key={show.id} show={show} />
        ))}
        </div>
    </div>
    );
;}

export default Home;