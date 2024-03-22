import React from "react";
import Example from "./Example";
import Synonym from "./Synonym";
import "./Meaning.css";



export default function Meaning(props) { 
    

    return (
        <div className="Meaning">
            <div className="section">
            <h5 className="partofspeech">{props.meaning.partOfSpeech}</h5>
            {props.meaning.definitions.map(function (definition, index) {
                if (index < 3) { 
                return (<div key={index} className="definition">
                    <div>
                        <strong className="subheading">Definition: </strong>{definition.definition}
                       
                        <Example example={definition.example} />
                       
                      
                    </div>
                </div>)
            }else{return null}
            })}
            <Synonym synonym={props.meaning.synonyms}/>
            </div>
            </div>
    );
       
    
}