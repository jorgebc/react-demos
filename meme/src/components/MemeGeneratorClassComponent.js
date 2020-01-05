import React from "react";

class MemeGeneratorClassComponent extends React.Component {

    state = {
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
        allMemesImages: [],
    };

    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data;
                this.setState({
                    allMemesImages: memes
                })
            });
    }

    handleOnChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: [value]
        })
    };

    handleOnSubmit(event) {
        const randomIndex = Math.floor(Math.random() * this.state.allMemesImages.length);
        const randomMeme = this.state.allMemesImages[randomIndex].url;
        this.setState({
            randomImage: randomMeme
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form className='meme-form' onSubmit={this.handleOnSubmit}>
                    <input
                        type='text'
                        name='topText'
                        placeholder='Top text'
                        value={this.state.topText}
                        onChange={this.handleOnChange}
                    />
                    <input
                        type='text'
                        name='bottomText'
                        placeholder='Bottom text'
                        value={this.state.bottomText}
                        onChange={this.handleOnChange}
                    />
                    <button>Gen</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImage} alt=''/>
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGeneratorClassComponent;