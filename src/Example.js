import React from "react";

export default function Example(props) { 

    if (props.example) {
        console.log(props.example)
        return (
            <div className="Example">
               <strong>Example:</strong> <em><small>{props.example} </small></em>
            
             </div>)
    }
        else { 
            return null;
        
     }
               

}