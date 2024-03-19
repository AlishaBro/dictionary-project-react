import React, {useState} from "react";
import "./Search.css"
import axios from "axios";
import Results from "./Results";

export default function Search() { 

    const [word, setWord] = useState(null);
    const [results, setResults] = useState();

    function handleResponse(response) { 
        
        setResults(response.data[0])
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (word) {
            let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
            axios.get(apiUrl).then(handleResponse);
        } else {return null }
        

    }

    function handleChange(event) { 
        event.preventDefault();
        setWord(event.target.value);

    }

    return (<div className="Search">
        <div className="Container">
            <form onSubmit={handleSubmit}>
                <input type="search" autoFocus={true} placeholder="Enter the Word" onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            <Results results={results}/>
        </div>

    </div>);
}