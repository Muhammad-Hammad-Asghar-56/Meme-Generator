import React from 'react'
import '../Style/MainContainer.css'
const MainContainer = () => {
    return (
        <div className='mainContainer'>
            <div className='Input-Container'>
                <div className='flex-Item'>
                    <input type="text" placeholder="Enter your Title" class="custom-input" />
                </div>
                <div className='flex-Item'>
                    <input type="text" placeholder="Enter your Meme Text" class="custom-input" />
                </div>
            </div>
            <div style={{ marginTop: '20px' }}>
                <button class="custom-button">Click Me</button>
            </div>
            <div className='imgContainer'>
                <img src="" alt="meme" className='memeImg' srcset="" />
            </div>
        </div>
    )
}

export default MainContainer
