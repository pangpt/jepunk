import React from 'react';
import { ArrowRight, Globe, Camera, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="space-y-6">
            <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Konbanwa! 🌙</h2>
                <p className="opacity-90">Ready to explore Japan?</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Link to="/translator" className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition">
                    <Globe className="text-blue-500" size={32} />
                    <span className="font-medium text-gray-700">Translate</span>
                </Link>
                <Link to="/camera" className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition">
                    <Camera className="text-purple-500" size={32} />
                    <span className="font-medium text-gray-700">Scan Text</span>
                </Link>
                <Link to="/itinerary" className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition">
                    <MapPin className="text-green-500" size={32} />
                    <span className="font-medium text-gray-700">Itinerary</span>
                </Link>
                <Link to="/converter" className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition">
                    <div className="bg-yellow-100 p-2 rounded-full">💱</div>
                    <span className="font-medium text-gray-700">Converter</span>
                </Link>
                <Link to="/hotels" className="col-span-2 bg-white p-4 rounded-xl shadow-sm flex flex-row items-center justify-center gap-4 hover:bg-gray-50 transition">
                    <div className="bg-orange-100 p-2 rounded-full">🏨</div>
                    <span className="font-medium text-gray-700">Recommended Hotels</span>
                </Link>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-bold text-lg mb-3">Today's Tip 💡</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    In Japan, it's polite to bow when greeting someone. Also, don't tip in restaurants!
                </p>
            </div>
        </div>
    );
};

export default Home;
