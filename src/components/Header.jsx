import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold"> 
                CodeCast
            </h1>
            <nav className="space-x-4 space-between">
                <Link to="/" className="hover:underline">
                Home
                </Link>
                <Link to="/favorites" className="hover:underline">
                Favorites
                </Link>
                
                
            </nav>
        </header>
    );
};

export default Header;