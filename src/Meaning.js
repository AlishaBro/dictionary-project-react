import React from "react";


export default function Meaning(props) { 
    console.log(props.meaning)

    return (
        <div className="Meaning">
            <h5 className="text-start">{props.meaning.partOfSpeech}</h5>
            {props.meaning.definitions.map(function (definition, index) {
                return (<div key={index} className="text-start">
                    <p>
                        {definition.definition}
                        <br/>
                         <em><small>{definition.example} </small></em>
                    </p>
                </div>)
            })}
        </div>
    );
       
    
}