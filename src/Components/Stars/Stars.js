import React from 'react'
import './Stars.css' 

export default function Stars(props) {
    
    return (
        <div className="star-rating">
            <input type="radio" name="stars" id={"star-a" + props.id}  value="5"/>
            <label htmlFor={"star-a" + props.id}></label>

            <input type="radio" name="stars" id={"star-b" + props.id} value="4"/>
            <label htmlFor={"star-b" + props.id}></label>
        
            <input type="radio" name="stars" id={"star-c" + props.id} value="3"/>
            <label htmlFor={"star-c" + props.id}></label>
        
            <input type="radio" name="stars" id={"star-d" + props.id} value="2"/>
            <label htmlFor={"star-d" + props.id}></label>
        
            <input type="radio" name="stars" id={"star-e" + props.id} value="1"/>
            <label htmlFor={"star-e" + props.id}></label>
        </div>
    )
}