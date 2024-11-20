import React from 'react';
import ReactIcon from "../assets/images/react-icon.png";
import HTMLIcon from "../assets/images/html-icon.png";
import CSSIcon from "../assets/images/css-icon.png";
import FirebaseIcon from "../assets/images/firebase-icon.png";
import PythonIcon from "../assets/images/python-icon.png";
import CppIcon from "../assets/images/cpp-icon.png";

const TechStack = () => {
    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        width: '100%',
        maxWidth: '800px', 
        padding: '1rem' 
      };

    const skillItemStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
        border: '2px solid black',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out'
    };

    const iconContainerStyle = {
        width: '48px',
        height: '48px',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const iconStyle = {
        width: '40px',
        height: '40px',
        objectFit: 'contain'
    };

    const textStyle = {
        fontSize: '2rem',
        fontWeight: 600,
        fontFamily: 'Montserrat, sans-serif',
        whiteSpace: 'nowrap'
    };

    const skills = [
        {
            name: 'React.JS',
            icon: ReactIcon
        },
        {
            name: 'HTML',
            icon: HTMLIcon
        },
        {
            name: 'CSS',
            icon: CSSIcon
        },
        
        {
            name: 'Firebase',
            icon: FirebaseIcon
        },
        {
            name: 'Python',
            icon: PythonIcon
        },
        {
            name: 'C++',
            icon: CppIcon
        },
    ];

    return (
        <>
        <h1><u><b>TECH STACK</b></u></h1>

        <div style={containerStyle}>
            {skills.map((skill, index) => (
                <div
                    key={index}
                    style={skillItemStyle}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    <div style={iconContainerStyle}>
                        <img
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            style={iconStyle}
                        />
                    </div>
                    <span style={textStyle}>
                        {skill.name}
                    </span>
                </div>
            ))}
        </div>
        </>
    );
};

export default TechStack;