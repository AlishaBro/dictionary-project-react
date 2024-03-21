import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";


export default function Results(props) { 
    
    if (props.results) {
        console.log(props.results)
       
        return (
            <div className="Results">
                <div className="section shadow">
                <h3 className="Keyword">{props.results.word}</h3>
                    <div><Phonetics phonetics={props.results.phonetics} /></div>
                    </div>

                {props.results.meanings.map(function (meaning, index) { 
                
                        return (<div key={index}><Meaning meaning={meaning} /></div>)
                  
                })}
              
            </div>
        );
    }
                else { 
            return(null)
                }

    
}