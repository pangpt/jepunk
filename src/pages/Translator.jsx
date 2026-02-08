import React, { useState } from 'react';
import { ArrowRightLeft, Copy, Check, Volume2, ExternalLink } from 'lucide-react';
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

    const handleSpeak = () => {
        if (!translatedText) return;
        const utterance = new SpeechSynthesisUtterance(translatedText);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
    };

    const openGoogleTranslate = () => {
        const text = encodeURIComponent(inputText);
        window.open(`https://translate.google.com/?sl=id&tl=ja&text=${text}&op=translate`, '_blank');
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

            <div className="flex flex-col gap-3 justify-center">
                <button
                    onClick={handleTranslate}
                    disabled={loading || !inputText}
                    className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center justify-center gap-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
                >
                    {loading ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                        <ArrowRightLeft size={20} />
                    )}
                    Quick Translate (In-App)
                </button>

                <button
                    onClick={openGoogleTranslate}
                    disabled={!inputText}
                    className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-full shadow-sm flex items-center justify-center gap-2 hover:bg-gray-50 disabled:opacity-50 transition-all active:scale-95"
                >
                    <ExternalLink size={20} />
                    Open in Google Translate (Best Quality)
                </button>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl shadow-inner border border-blue-100 relative">
                <label className="block text-sm font-medium text-blue-800 mb-2">Japanese (JP)</label>
                <div className="min-h-[100px] text-2xl font-bold text-gray-800 break-words pr-8">
                    {translatedText || <span className="text-gray-400 font-normal italic">Translation will appear here...</span>}
                </div>

                {translatedText && (
                    <div className="absolute bottom-3 right-3 flex gap-2">
                        <button
                            onClick={handleSpeak}
                            className="text-gray-500 hover:text-blue-600 transition p-1 hover:bg-blue-100 rounded-full"
                            aria-label="Speak translation"
                        >
                            <Volume2 size={20} />
                        </button>
                        <button
                            onClick={handleCopy}
                            className="text-gray-500 hover:text-blue-600 transition p-1 hover:bg-blue-100 rounded-full"
                            aria-label="Copy translation"
                        >
                            {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                        </button>
                    </div>
                )}
            </div>

            {/* Common Phrases */}
            <div className="mt-8 pb-20">
                <h3 className="font-bold text-lg mb-3">Common Phrases</h3>
                <div className="grid grid-cols-1 gap-2">
                    {[
                        { id: 'Halo', jp: 'Konnichiwa', romaji: 'Konnichiwa' },
                        { id: 'Terima Kasih', jp: 'Arigatou', romaji: 'Arigatou' },
                        { id: 'Maaf', jp: 'Sumimasen', romaji: 'Sumimasen' },
                        { id: 'Enak', jp: 'Oishii', romaji: 'Oishii' },
                        { id: 'Dimana toilet?', jp: 'Toire wa doko?', romaji: 'Toire wa doko desu ka?' },
                    ].map((phrase, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg border border-gray-100 flex justify-between items-center text-sm">
                            <span className="font-medium text-gray-600">{phrase.id}</span>
                            <div className="text-right">
                                <div className="font-bold text-gray-800">{phrase.jp}</div>
                                <div className="text-xs text-gray-400 italic">{phrase.romaji}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Translator;
