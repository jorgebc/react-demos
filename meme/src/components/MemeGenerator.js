import React, {useState, useEffect} from "react";

function MemeGenerator() {

    const [allMemesImages, setMemesImages] = useState([]);
    const [randomMemeImageUrl, setRandomMemeImageUrl] = useState('http://i.imgflip.com/1bij.jpg');
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => setMemesImages(response.data));
    }, []);

    function updateTopText(event) {
        const {value} = event.target;
        setTopText(value);
    }

    function updateBottomText(event) {
        const {value} = event.target;
        setBottomText(value);
    }

    function handleSubmit(event){
        const randomIndex = Math.floor(Math.random() * allMemesImages.length);
        setRandomMemeImageUrl(allMemesImages[randomIndex].url);
        event.preventDefault();
    }

    return (
        <>
            <form className='meme-form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Top text'
                    value={topText}
                    onChange={updateTopText}
                />
                <input
                    type='text'
                    placeholder='Bottom text'
                    value={bottomText}
                    onChange={updateBottomText}
                />
                <button>Gen</button>
            </form>
            <div className='meme'>
                <img src={randomMemeImageUrl} alt=''/>
                <h2 className='top'>{topText}</h2>
                <h2 className='bottom'>{bottomText}</h2>
            </div>
        </>
    )
}

export default MemeGenerator;