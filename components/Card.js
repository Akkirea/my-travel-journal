import React from "react"

export default function Card(props) {
    return(
        <div className="card">
            <img src={`../images/${props.imageUrl}`} className="card-img" />
            
            <div className="card-stats">
                <img src="../images/location-icon.png" className="location-icon"/> 
                <span className="location">{props.location}</span>
                <span><a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="card-url">View on Google Maps</a></span>
                <h1 className="card-title">{props.title}</h1>
                <p className="start-endDate">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
            
        </div>
    )
}