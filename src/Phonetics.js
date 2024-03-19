import React, {useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlay } from '@fortawesome/free-regular-svg-icons';

export default function Phonetics(props) {
    console.log(props.phonetics)
    return (<div className="Phonetics">
        {props.phonetics.map(function (phonetic, index) {
            if (phonetic.audio && phonetic.text) {
                return (
                    <div key={index}>
                        <a href={phonetic.audio}><FontAwesomeIcon icon={faCirclePlay} /></a>
                    
                        {" "}{phonetic.text}
                   
                    
                    </div>)
            } else { return (null)}
                
           
            
            })}
          </div>)
    
}