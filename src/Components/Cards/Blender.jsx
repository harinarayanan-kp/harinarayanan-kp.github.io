import React from 'react'
import BlenderIMG from "../../assets/images/Blender.png";

const Blender = () => {
    return (
        <div className="Frame26" style={{
            width: '250px',
            padding: '15px',
            height: 'fit-content',
            border: '5px black solid',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
        }}>
            <div className="Group18" style={{
                width: 182,
                height: 182,
                position: 'relative'
            }}>
                <svg width="182" height="182" viewBox="0 0 182 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M177.589 73C177.589 87.6583 173.868 102.077 166.774 114.904C159.68 127.731 149.446 138.548 137.031 146.34C124.615 154.133 110.425 158.646 95.789 159.456C81.1532 160.267 66.5511 157.349 53.351 150.976C40.1509 144.602 28.7848 134.982 20.3177 123.017C11.8506 111.051 6.55971 97.132 4.94077 82.5634C3.32182 67.9948 5.42781 53.2537 11.0614 39.7213C16.695 26.1888 25.6718 14.3081 37.1507 5.19217" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <img className="Image6" style={{ width: 100, height: 100, left: 41, top: 35, position: 'absolute' }} src={BlenderIMG} />
            </div>

            <div className="Figma" style={{
                alignSelf: 'stretch',
                textAlign: 'center',
                color: 'black', fontSize: 32,
                fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'
            }}>Blender</div>

            <div className="5Years" style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word' }}>3 years +</div>
            <a href='/'>
            <div className="ViewWorks" style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600', textDecoration: 'underline', wordWrap: 'break-word' }}>View works &gt;</div>
            </a>
        </div>
    )
}

export default Blender