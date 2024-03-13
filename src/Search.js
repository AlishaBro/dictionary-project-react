import React, {useState} from "react";
import "./Search.css"

export default function Search() { 

    const [word, setWord] = useState(null);
    function handleSubmit(event) {
        event.preventDefault();
        alert(`${word}`)

    }

    function handleChange(event) { 
        event.preventDefault();
        setWord(event.target.value);

    }

    return (<div className="Search">
        <div className="Container">
            <form onSubmit={handleSubmit}>
                <input type="search" autoFocus={true} placeholder="Enter the Word" onChange={handleChange}></input>
                <input type="Submit" value="submit"/>
            </form>
        </div>

    </div>);
}