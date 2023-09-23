import React from 'react'
import '../Style/MainContainer.css'
const MainContainer = () => {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
    
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
    }, [])
    
    function getMemeImage() {
        if(meme.topText == "" || meme.bottomText==""){return;}
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        setAllMemes({});
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className='mainContainer'>
            <div className='Input-Container'>
                <div className='flex-Item'>
                    <input type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    class="custom-input" />
                </div>
                <div className='flex-Item'>
                    <input type="text"
                    placeholder="Bottom text"
                    className="custom-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}/>
                </div>
            </div>
            <div style={{ marginTop: '20px' }}>
                <button class="custom-button"  onClick={getMemeImage}>Click Me</button>
            </div>
            <div className='imgContainer'>
                <img src={meme.randomImage}  alt="meme" className='memeImg' srcset="" />
                <h1 className='upperTxt'>{meme.topText}</h1>
                <h1 className='lowerTxt'>{meme.bottomText}</h1>
            </div>
        </div>
    )
}

export default MainContainer
