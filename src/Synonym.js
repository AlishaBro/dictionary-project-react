import React from "react";


export default function Synonym(props) {
    console.log(props.synonym);
    
    if (props.synonym.length>0) {
        return (
            <div className="Synonym">

                <strong>Synonyms:</strong>
                
            {props.synonym.map(function (synonym, index) {
                return (<ul key={index}>
                    <li>{synonym}</li>
                     </ul>)
            })}
            
            </div>
        )
    } else
            {return null}
   
 }