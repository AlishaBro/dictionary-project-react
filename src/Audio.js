import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { Howl } from "howler";
// import sound from "./assets/run-us.mp3"

export default function Audio(props) {

    console.log(props.audio)

    const sound = props.audio;

    function play(src){
        const sound = new Howl({
            src: props.audio,
            html5:true
        })
        sound.play();
     }
    
    return (<div className="Audio">
      
          <a href="#" onClick={play} ><FontAwesomeIcon icon={faCirclePlay} /></a>
   
    </div>)

}