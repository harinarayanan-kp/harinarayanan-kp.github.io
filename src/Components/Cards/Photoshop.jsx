import React from 'react'
import PS from "../../assets/images/photoshop.png";


const Photoshop = () => {
    return (
        <div>
            <div className="Frame27" style={{
                width: '250px',
                height: 'fit-content',
                padding: '15px',
                border: '5px black solid',
                boxShadow: '4px 4px 0px 0px #F2AD4B',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 12,
            }}>
                <div className="Group18" style={{ width: 182, height: 182, position: 'relative' }}>
                    <svg width="182" height="182" viewBox="0 0 182 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M177.589 91C177.589 111.033 170.643 130.446 157.934 145.931C145.225 161.417 127.541 172.017 107.893 175.925C88.2448 179.833 67.8496 176.808 50.1822 167.365C32.5149 157.921 18.6685 142.644 11.0022 124.136C3.33599 105.628 2.3243 85.0348 8.13952 65.8646C13.9547 46.6943 26.2371 30.1335 42.8937 19.0039C59.5504 7.87427 79.5508 2.86442 99.4872 4.82798C119.424 6.79153 138.062 15.607 152.228 29.7723" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <img className="Image7" style={{ width: 100, height: 100, left: 41, top: 41, position: 'absolute' }} src={PS} />
                </div>
                <div className="AdobePhotoshop" style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word' }}>Adobe Photoshop</div>
                <div className="Years" style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word' }}>5+ years</div>
                <div className="ViewWorks" style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600', textDecoration: 'underline', wordWrap: 'break-word' }}>View works ></div>
            </div>
        </div>
    )
}

export default Photoshop