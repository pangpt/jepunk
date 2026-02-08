export const translateText = async (text, targetLang = 'ja', sourceLang = 'id') => {
    if (!text || !text.trim()) return '';

    try {
        const encodedText = encodeURIComponent(text.trim());
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${sourceLang}|${targetLang}`);
        const data = await response.json();

        if (data.responseData) {
            return data.responseData.translatedText;
        }
        throw new Error('No translation data');
    } catch (error) {
        console.error('Translation failed:', error);
        return 'Error: Could not translate.';
    }
};
