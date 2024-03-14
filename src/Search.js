import React, {useState} from "react";
import "./Search.css"
import axios from "axios";

export default function Search() { 

    const [word, setWord] = useState(null);

    function handleResponse(response) { 
        console.log(response.data)
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert(`${word}`)
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);

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