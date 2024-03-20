import React from "react";

export default function Example(props) { 

    if (props.example) {
     
        return (
            <div className="Example">
                <em>{props.example}</em>
                <br />

             </div>)
    }
        else { 
            return null;
        
     }
               

}