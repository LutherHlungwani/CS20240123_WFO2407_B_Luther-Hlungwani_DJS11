import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {

    return (
        <header className="bg-gray-800 text-white p-4 flex space-between justify-between items-center">
            <div className="conatiner mx-auto flex flex-col md:flex-row justify-between items-center">
               <h1 className="text-xl font-bold "> 
                   CodeCast
               </h1>
               <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                 <SearchBar />
                 <nav className="space-x-4 space-between">
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>
                    <Link to="/favorites" className="hover:underline">
                        Favorites
                    </Link>
                
                
                  </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;