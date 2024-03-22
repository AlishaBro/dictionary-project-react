import React, {useState} from "react";
import "./Search.css"
import axios from "axios";
import Results from "./Results";
import Images from "./Images";

export default function Search(props) { 

    const [word, setWord] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [images, setImages] = useState(null);
    const [message, setMessage] = useState(null);


    function handleDictionaryResponse(response) { 
        setResults(response.data[0])
    }

    function handleImageResponse(response) { 
        console.log(response.data)
        setImages(response.data.photos)
    }

    function handleSubmit(event) {
        event.preventDefault();
        CallApi();

    }

    function handleChange(event) { 
        event.preventDefault();
        setWord(event.target.value);

    }

    function load() { 
        setLoaded(true);
        CallApi();
    }
    // function handleDictionaryError(response) {
    //     console.log(response.data.error)
    //  }

    function error(error) {
        if (error.response) {
            console.log(error.response.data);
            setMessage(error.response.data.title)
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.reqiest) {
            console.log(error.request);
        } else { 
            console.log('Error', error.message);
        }
        console.log(error.config);
     }


    function CallApi() { 
         let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleDictionaryResponse).catch(error);

        // let apiKey = "b9ffd1od861e4efaf039d5a0c6fbtecd";
        let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=b9ffd1od861e4efaf039d5a0c6fbtecd`;

        
        axios.get(imageApiUrl).then(handleImageResponse);
       
    }


    if (loaded) {

        return (<div className="Search">
            <div className="Container">
                <div>{message}</div>
                <div className="section">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-10">
                                <input type="search" autoFocus={true} placeholder="  Enter the Word..." onChange={handleChange} defaultValue={props.defaultKeyword} />
                            </div>
                            <div className="col-2">
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                
                
                    </form>
                    <div className="ExampleWords">Suggested: Light,Snow,Expectation,Falling etc..</div>
                </div>
           
                <Results results={results} />
               
            </div>
            <Images images={images}/>

        </div>)
    } else {
       
        load();
     }
}