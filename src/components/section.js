import React from 'react';
import './section.css'
;import Wave from './wave';
const Section = props => (
    <div className="sectionGroup">
    <div className="waveTop">
        <Wave/>
    </div>
    <div className="waveBottom">
        <Wave/>
    </div>
        <img 
            className="logo"
            src={props.logo}/>
        <div className="sectionTitleGroup">
            <h3
                className="title"
            >{props.title}</h3>
            <p
                className="content"
            >{props.text}</p>
        </div>
    </div>
);
export default Section;