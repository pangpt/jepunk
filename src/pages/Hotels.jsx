import React from 'react';
import { MapPin, Star } from 'lucide-react';
import hotelsData from '../data/hotels.json';

const Hotels = () => {
    return (
        <div className="space-y-4 pb-20">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold text-gray-800">Tokyo Stays 🏨</h2>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Realisable</span>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {hotelsData.map((hotel) => (
                    <div key={hotel.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                        <div className="h-48 overflow-hidden relative">
                            <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-bold shadow-sm">
                                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                                {hotel.rating}
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{hotel.name}</h3>
                            <div className="flex items-center text-gray-500 text-sm mb-3">
                                <MapPin size={14} className="mr-1" />
                                {hotel.area}
                            </div>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{hotel.desc}</p>

                            <div className="flex justify-between items-center border-t pt-3">
                                <span className="text-lg font-bold text-blue-600">{hotel.price}<span className="text-xs text-gray-400 font-normal">/night</span></span>
                                <a
                                    href={hotel.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-50 text-blue-600 text-sm px-4 py-2 rounded-lg hover:bg-blue-100 transition flex items-center gap-1 font-bold"
                                >
                                    <MapPin size={16} /> View on Map
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hotels;
