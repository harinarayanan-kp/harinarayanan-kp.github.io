import React, { useEffect } from 'react';
import "./Coffee.css"

const Coffee = () => {
    return (
        <div className='coffee-container'>
            <div style={{margin:"20px"}}>
                Hey there! Want to support my work? Buy me a coffee. Thank you!

            </div>
            <a style={{marginBottom: "20px"}} href="https://www.buymeacoffee.com/harixn" target="_blank">
                <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                    alt="Buy Me A Coffee"
                    style={{ height: "60px", width: "217px " }} />
            </a>
        </div>
    )
}

export default Coffee

