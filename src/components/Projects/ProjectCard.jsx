import React, { useState, useEffect, useRef } from 'react';
import '../Variables/General.css';
import '../Contact/Contact.css';
import '../Projects/ProjectCard.css';

import { LogoCode, LogoWeb } from '../assets/CardsSvg';

function ProjectCard({
    mobileDevice: MobileDevice,
    tabletDevice: TabletDevice,
    imgProjectPhone,
    imgProjectTablet,
    projectLogo: ProjectLogo,
    urlBackground,
    urlDemo,
    title,
    description,
    Technologies,
    urlSite,
    urlCode
}) {
    const phoneRef = useRef(null); 
    const tabletRef = useRef(null); 

    const applyMouseEffects = (deviceRef) => {
        if (!deviceRef.current) return;

        const handleMouseMove = (evt) => {
            const { clientWidth, clientHeight } = deviceRef.current;
            const { layerX, layerY } = evt;
            const yRotation = 20 * (layerX - clientWidth / 2) / clientWidth;
            const xRotation = -20 * (layerY - clientHeight / 2) / clientHeight;
            const transform = `
                perspective(500px)
                scale(1.05)
                rotateX(${xRotation}deg)
                rotateY(${yRotation}deg)
            `;
            deviceRef.current.style.transform = transform.trim();
        };

        const handleMouseOut = () => {
            deviceRef.current.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
        };

        deviceRef.current.addEventListener('mousemove', handleMouseMove);
        deviceRef.current.addEventListener('mouseout', handleMouseOut);

        return () => {
            deviceRef.current.removeEventListener('mousemove', handleMouseMove);
            deviceRef.current.removeEventListener('mouseout', handleMouseOut);
        };
    };

    useEffect(() => {
        applyMouseEffects(phoneRef);
        applyMouseEffects(tabletRef);
    }, []);

    return (
        <div className="projectCard">
            <div className="projectImg">
                <iframe src={urlBackground} frameBorder="0" title='special background animation'></iframe>
                <div className="device phone" ref={phoneRef}>
                    <a href={urlSite} target='_blank' name={title}>
                        <MobileDevice imgProject={imgProjectPhone} />
                    </a>
                </div>
                <div className="device tablet" ref={tabletRef}>
                    <a href={urlSite} target='_blank' name={title}>
                        <TabletDevice imgProject={imgProjectTablet}/>
                    </a>
                </div>
            </div>

            
            <div className="projectDescription">
                <div className='titleProject'>
                    <h2><a href={urlSite} target='_blank' name={title}>{title}</a></h2>
                    <a href={urlSite} target="_blank" rel="noopener noreferrer" aria-label={title}>
                      <ProjectLogo alt={title} />
                    </a>
                </div>
                <p>{description}</p>
                <div className="technologies">
                {Technologies ? (
                    Technologies.map((technology, index) => (
                    <p key={technology}>{technology}</p>
                    ))
                ) : (
                    <p>No technologies listed</p>
                )}
                </div>
                <div className="buttons">
                    <a className="button firstBtn" href={urlSite} target='_blank'name={title}>Open Site <LogoWeb /></a>
                    <a className="button lastBtn" href={urlCode} target='_blank'name={title}>View Code <LogoCode /></a>
                </div>
            </div>
        </div>
    );
};


export default ProjectCard;