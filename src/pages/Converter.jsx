import React, { useState } from 'react';
import { ArrowRightLeft, RefreshCw } from 'lucide-react';

const Converter = () => {
    // 1 JPY = 105 IDR (Approx)
    const [rate] = useState(105);
    const [amount, setAmount] = useState('');
    const [isIdrToJpy, setIsIdrToJpy] = useState(true);

    const handleSwap = () => {
        setIsIdrToJpy(!isIdrToJpy);
        setAmount('');
    };

    const result = amount ? (isIdrToJpy ? (amount / rate).toFixed(2) : (amount * rate).toLocaleString('id-ID')) : '0';

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Currency Converter 💱</h2>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex flex-col gap-4">
                    {/* From */}
                    <div>
                        <label className="text-sm font-bold text-gray-500 mb-1 block">
                            {isIdrToJpy ? 'Indonesian Rupiah (IDR)' : 'Japanese Yen (JPY)'}
                        </label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0"
                            className="w-full text-3xl font-bold border-b-2 border-gray-200 focus:border-blue-500 outline-none py-2 bg-transparent"
                        />
                    </div>

                    {/* Swap Button */}
                    <div className="flex justify-center -my-2 relative z-10">
                        <button
                            onClick={handleSwap}
                            className="bg-blue-50 text-blue-600 p-3 rounded-full hover:bg-blue-100 transition shadow-sm border border-blue-100"
                        >
                            <ArrowRightLeft size={20} />
                        </button>
                    </div>

                    {/* To */}
                    <div>
                        <label className="text-sm font-bold text-gray-500 mb-1 block">
                            {isIdrToJpy ? 'Japanese Yen (JPY)' : 'Indonesian Rupiah (IDR)'}
                        </label>
                        <div className="text-3xl font-bold text-blue-600 py-2">
                            {isIdrToJpy ? '¥' : 'Rp'} {result}
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs text-gray-400">
                Rate used: 1 JPY = Rp {rate} (Approx).
            </div>
        </div>
    );
};

export default Converter;
