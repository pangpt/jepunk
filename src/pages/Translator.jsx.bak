import React, { useState } from 'react';
import { ArrowRightLeft, Copy, Check } from 'lucide-react';
import { translateText } from '../utils/translate';

const Translator = () => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleTranslate = async () => {
        if (!inputText.trim()) return;

        setLoading(true);
        try {
            const result = await translateText(inputText, 'ja', 'id');
            setTranslatedText(result);
        } catch (error) {
            setTranslatedText("Error: Connection failed.");
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        if (translatedText) {
            navigator.clipboard.writeText(translatedText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <label className="block text-sm font-medium text-gray-700 mb-2">Indonesian (ID)</label>
                <textarea
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none min-h-[100px] bg-gray-50 text-xl"
                    placeholder="Halo, apa kabar?"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handleTranslate}
                    disabled={loading || !inputText}
                    className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
                >
                    {loading ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                        <ArrowRightLeft size={20} />
                    )}
                    Translate to Japanese
                </button>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl shadow-inner border border-blue-100 relative">
                <label className="block text-sm font-medium text-blue-800 mb-2">Japanese (JP)</label>
                <div className="min-h-[100px] text-2xl font-bold text-gray-800 break-words pr-8">
                    {translatedText || <span className="text-gray-400 font-normal italic">Translation will appear here...</span>}
                </div>

                {translatedText && (
                    <button
                        onClick={handleCopy}
                        className="absolute bottom-3 right-3 text-gray-500 hover:text-blue-600 transition"
                        aria-label="Copy translation"
                    >
                        {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                    </button>
                )}
            </div>

            {/* Common Phrases */}
            <div className="mt-8">
                <h3 className="font-bold text-lg mb-3">Common Phrases</h3>
                <div className="grid grid-cols-1 gap-2">
                    {[
                        { id: 'Halo', jp: 'Konnichiwa (こんにちは)' },
                        { id: 'Terima Kasih', jp: 'Arigatou (ありがとう)' },
                        { id: 'Maaf', jp: 'Sumimasen (すみません)' },
                        { id: 'Enak', jp: 'Oishii (おいしい)' },
                        { id: 'Dimana toilet?', jp: 'Toire wa doko desu ka? (トイレはどこですか)' },
                    ].map((phrase, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg border border-gray-100 flex justify-between items-center text-sm">
                            <span className="font-medium text-gray-600">{phrase.id}</span>
                            <span className="font-bold text-gray-800">{phrase.jp}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Translator;
