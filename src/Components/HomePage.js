import React from 'react';
import PostList from "./PostList";
// import {getPlanets} from "../AstrologyApi";
import { Container } from 'react-bootstrap'

// const planets = {
//     day: '25',
//     month: '12',
//     year: '1988',
//     hour: '2',
//     min: '30',
//     name: 'demo',
//     lat: '25.123',
//     lon: '82.34',
//     tzone: '5.5'
//   }

// getPlanets(planets).then(astrologyDataFromServer => {   //petDataFromForm is being passed to newPet which creates a new pet on the server .then is called when the promise is fulfilled
//     // resetForm()                                       //when the newPet function is successful then the form is reset
//     //  setBlogs([...blogs, astrologyDataFromServer])             //updates the pets state with an array containing the new pet data from the server and the existing pets data
// console.log(astrologyDataFromServer)   
// })
export default function HomePage() {
    
       
    return (
        <div>
            <div id="homeBackgroundImage">
                <div>
                    <h1>Stellar Gravity</h1>
                    <h3>An Astrology Blog</h3>
                </div>
            </div>
            <Container>
                <h3 className="mb-5 mt-5">Latest Blog Posts</h3>
                <PostList/>
            </Container>
        </div>
    )
}