import React from "react";
import Example from "./Example";
import Synonym from "./Synonym";



export default function Meaning(props) { 
    

    return (
        <div className="Meaning">
            <h5 className="text-start">{props.meaning.partOfSpeech}</h5>
            {props.meaning.definitions.map(function (definition, index) {
                if (index < 3) { 
                return (<div key={index} className="text-start">
                    <div>
                        <strong>Definition:</strong>{definition.definition}
                        <Example example={definition.example} />
                        {/* <Synonym synonym={definition.synonyms}/> */}
                      
                    </div>
                </div>)
            }else{return null}
            })}
            <div className="text-start"><Synonym synonym={props.meaning.synonyms}/> </div>
        </div>
    );
       
    
}