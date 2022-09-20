import React from 'react'
export default function Dataa(props){
    const stylObj={
        padding:"4px",
    }
    return(
        <div className='container'>
            <img className="image" src={`./images/${props.imageUrl}`} />
            <div className='details'>
                <img style={stylObj} className="pin" src="./images/pin.png"/>
                <span class="loc">{props.location}  <a className='ggl' href={`${props.googleMapsUrl}`}>View on Google Maps</a></span>
                <h1>{props.title}</h1>
                <p>{props.startDate} - {props.endDate}</p>
                {props.description}
            </div>
        </div>
    )
}
