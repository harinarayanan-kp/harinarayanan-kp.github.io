import React from 'react'
import Photoshop from './Photoshop'
import Figma from './Figma'
import Blender from './Blender'

const Cards = () => {
    return (
        <div className="Frame29" style={{
            width: '100%',
            maxWidth: '900px',
            display: 'flex',
            gap: '50px',
            justifyContent: 'center',
        }}>
            <Figma />
            <Photoshop />
            <Blender />
        </div>
    )
}

export default Cards