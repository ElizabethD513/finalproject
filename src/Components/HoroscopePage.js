import React, {useState} from 'react';
// import {getPlanets} from "../AstrologyApi";
import { Container } from 'react-bootstrap'
import HoroscopeForm from "./HoroscopeForm";
import {getHoroscope} from "../AstrologyApi";
import HoroscopeDetails from "./HoroscopeDetails";

/*const planets = {
     "day": 25,
     "month": 12,
     "year": 1988,
     "hour": 2,
     "min": 30,
     "name": "demo",
     "lat": 25.123,
     "lon": 82.34,
     "tzone": 5.5
   }*/

// getPlanets(planets).then(astrologyDataFromServer => {   //petDataFromForm is being passed to newPet which creates a new pet on the server .then is called when the promise is fulfilled
//     // resetForm()                                       //when the newPet function is successful then the form is reset
//     //  setBlogs([...blogs, astrologyDataFromServer])             //updates the pets state with an array containing the new pet data from the server and the existing pets data
// console.log(astrologyDataFromServer)
// })
export default function HoroscopePage() {
    const fieldNames = {
        "destiny_number":"Destiny Numbers",
        "radical_number":"Radical Numbers",
        "name_number":"Name Numbers",
        "evil_num":"Evil Numbers",
        "fav_color":"Favorite Color",
        "fav_day":"Favorite Day",
        "fav_god":"Favorite God",
        "fav_mantra":"Favorite Mantra",
        "fav_metal":"Favorite Metal",
        "fav_stone":"Favorite Stone",
        "fav_substone":"Favorite Sub Stone",
        "friendly_num":"Favorite Numbers",
        "neutral_num":"Neutral Numbers",
        "radical_num":"Radical Numbers",
        "radical_ruler":"Radical Ruler"
    }



    const [birthday, setBirthday] = useState("");
    const [loading, setLoading] = useState(false);
  //  const [horoscope, setHoroscope] = useState(defaultHoroscopeState);
    const [horoscopeDetails, setHoroscopeDetails] = useState({});

    function fetchHoroscope(birthday){
        setLoading(true)
        const [year, month, day] = birthday.split("-")
        const horoscopeData = {
            "day": day,
            "month": month,
            "year": year,
            "hour": 0,
            "min": 0,
            "name": "Horoscope",
            "lat": 25.123,
            "lon": 82.34,
            "tzone": -4
        }

        getHoroscope(horoscopeData).then(horoscopeDataFromServer => {
            const details = {}
            setLoading(false)
            // merge horoscopeDataFromServer with display names
            for(const property in horoscopeDataFromServer){
                if(fieldNames[property]){
                    details[fieldNames[property]] = horoscopeDataFromServer[property]
                }
            }
            setHoroscopeDetails(details)
        })
    }

    return (
        <div id="horoscopePage">
            <div className="header-wrapper py-3 mb-5">
                <Container>
                    <h1>Horoscope</h1>
                </Container>
            </div>
            <Container>
                <HoroscopeForm birthday={birthday} setBirthday={setBirthday} fetchHoroscope={fetchHoroscope} />
                <HoroscopeDetails details={horoscopeDetails} loading={loading}/>
            </Container>
        </div>
    )
}
