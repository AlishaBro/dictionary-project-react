import React from "react";
import "./Synonym.css";


export default function Synonym(props) {
   
    
    if (props.synonym.length>0) {
        return (
            <div className="Synonym">

                <strong className="synms">Synonyms:</strong>
                
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