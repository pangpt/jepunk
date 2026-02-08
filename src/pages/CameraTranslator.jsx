import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';
import { Camera, RefreshCw, X } from 'lucide-react';
import { translateText } from '../utils/translate';

const CameraTranslator = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [ocrText, setOcrText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef]);

    const retake = () => {
        setImgSrc(null);
        setOcrText('');
        setTranslatedText('');
    };

    const processImage = async () => {
        if (!imgSrc) return;
        setIsProcessing(true);
        setOcrText('Scanning...');

        try {
            // 1. OCR (JPN)
            const { data: { text } } = await Tesseract.recognize(
                imgSrc,
                'jpn', // Japanese model
                { logger: m => console.log(m) }
            );

            if (!text.trim()) {
                setOcrText('No text found. Try again.');
                setIsProcessing(false);
                return;
            }

            setOcrText(text);

            // 2. Translate (JPN -> ID)
            const translation = await translateText(text, 'id', 'ja'); // Note: Source is JA, Target is ID
            setTranslatedText(translation);

        } catch (err) {
            console.error(err);
            setOcrText('Error processing image.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="flex flex-col h-full space-y-4">
            <div className="relative bg-black rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
                {!imgSrc ? (
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={{ facingMode: "environment" }}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <img src={imgSrc} alt="captured" className="w-full h-full object-cover opacity-80" />
                )}

                {/* Overlay Controls */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
                    {!imgSrc ? (
                        <button
                            onClick={capture}
                            className="bg-white p-4 rounded-full shadow-lg active:scale-95 transition"
                        >
                            <Camera size={32} className="text-blue-600" />
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={retake}
                                className="bg-gray-800/80 p-3 rounded-full text-white backdrop-blur-sm"
                            >
                                <X size={24} />
                                <span className="sr-only">Retake</span>
                            </button>
                            <button
                                onClick={processImage}
                                disabled={isProcessing}
                                className="bg-blue-600 p-3 px-6 rounded-full text-white font-bold shadow-lg flex items-center gap-2 disabled:opacity-50"
                            >
                                {isProcessing ? 'Processing...' : 'Analyze'}
                            </button>
                        </>
                    )}
                </div>
            </div>

            {(ocrText || translatedText) && (
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-3">
                    {ocrText && (
                        <div>
                            <h4 className="text-xs font-bold text-gray-400 uppercase">Detected Text (JP)</h4>
                            <p className="text-sm text-gray-800 bg-gray-50 p-2 rounded">{ocrText}</p>
                        </div>
                    )}
                    {translatedText && (
                        <div>
                            <h4 className="text-xs font-bold text-blue-500 uppercase">Translation (ID)</h4>
                            <p className="text-lg font-bold text-blue-900">{translatedText}</p>
                        </div>
                    )}
                </div>
            )}

            <div className="text-center text-xs text-gray-400">
                <p>Tip: Ensure text is clear and well-lit.</p>
            </div>
        </div>
    );
};

export default CameraTranslator;
