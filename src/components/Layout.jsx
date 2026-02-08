import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Camera, Map, BookOpen, Menu } from 'lucide-react';

const Layout = ({ children }) => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'text-blue-600' : 'text-gray-500';

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
                <h1 className="text-xl font-bold text-center text-gray-800">Jepunk 🇯🇵</h1>
            </header>

            <main className="flex-1 overflow-y-auto pb-20 p-4">
                {children}
            </main>

            <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around py-3 pb-5 shadow-lg z-10">
                <Link to="/" className={`flex flex-col items-center ${isActive('/')}`}>
                    <Home size={24} />
                    <span className="text-xs mt-1">Home</span>
                </Link>
                <Link to="/translator" className={`flex flex-col items-center ${isActive('/translator')}`}>
                    <BookOpen size={24} />
                    <span className="text-xs mt-1">Translate</span>
                </Link>
                <Link to="/camera" className={`flex flex-col items-center ${isActive('/camera')}`}>
                    <Camera size={24} />
                    <span className="text-xs mt-1">Scan</span>
                </Link>
                <Link to="/itinerary" className={`flex flex-col items-center ${isActive('/itinerary')}`}>
                    <Map size={24} />
                    <span className="text-xs mt-1">Plan</span>
                </Link>
                <Link to="/hotels" className={`flex flex-col items-center ${isActive('/hotels')}`}>
                    <Menu size={24} />
                    <span className="text-xs mt-1">Hotels</span>
                </Link>
            </nav>
        </div>
    );
};

export default Layout;
