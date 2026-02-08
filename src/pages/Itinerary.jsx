import React, { useState } from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';
import itineraryData from '../data/itinerary.json';

const Itinerary = () => {
    const [activeDay, setActiveDay] = useState(1);

    const currentDay = itineraryData.find(d => d.day === activeDay);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Itinerary 🗺️</h2>
            </div>

            {/* Day Selector */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {itineraryData.map((day) => (
                    <button
                        key={day.day}
                        onClick={() => setActiveDay(day.day)}
                        className={`flex-shrink-0 px-6 py-2 rounded-full font-bold shadow-sm transition ${activeDay === day.day
                                ? 'bg-blue-600 text-white shadow-blue-200 shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        Day {day.day}
                    </button>
                ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{currentDay.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex items-center gap-1">
                    <Calendar size={14} /> Classic Tokyo Route
                </p>

                <div className="space-y-8 relative pl-2">
                    {/* Timeline Line */}
                    <div className="absolute left-[11px] top-2 bottom-4 w-[2px] bg-gray-200"></div>

                    {currentDay.activities.map((activity, idx) => (
                        <div key={idx} className="relative flex gap-4">
                            {/* Dot */}
                            <div className="absolute left-[3px] mt-1.5 w-4 h-4 rounded-full border-4 border-white bg-blue-500 shadow-sm z-10"></div>

                            <div className="pl-6">
                                <span className="text-sm font-bold text-blue-500 flex items-center gap-1 mb-1">
                                    <Clock size={12} /> {activity.time}
                                </span>
                                <h4 className="font-bold text-gray-800 text-lg leading-tight">{activity.title}</h4>
                                <p className="text-gray-500 text-sm mt-1">{activity.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Itinerary;
