import React from "react";
import Audio from "./Audio"

export default function Phonetics(props) {
    console.log(props.phonetics)
  
    return (<div className="Phonetics">
        {props.phonetics.map(function (phonetic, index) {
            if (phonetic.audio && phonetic.text) {
                 
                return (
                    <div key={index}>
                        <Audio audio={phonetic.audio}/><span>{" "}{phonetic.text}</span>
     
                    </div>)
            } else { return (null)}

            })}
          </div>)
    
}