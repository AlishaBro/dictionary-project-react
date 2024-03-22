import React from "react";
import "./Images.css"

export default function Images(props) { 
    console.log(props.images)
    if (props.images!=null && props.images.length>0) {
        return (
        <div className="Images">
            <div className="section shadow">
                <div className="row">
                    {props.images.map(function (image, index) {
                        return (
                            <div key={index} className="col-4">
                       
                                <img src={image.src.landscape} alt="" className="img-fluid images" />
                   
                            </div>
                        );
                    })}
       
                    </div>
                    </div>
            </div>);
    }
        else { 
        return(null)
    };
}