import {useState} from "react";

function useWordCount(defaultWordCount = 0) {

    const [wordCount, setWordCount] = useState(defaultWordCount);

    function countWords(text) {
        const words = text.split(" ");
        setWordCount(words.filter(word => word.length > 0).length);
    }

    return [wordCount, countWords];
}

export default useWordCount