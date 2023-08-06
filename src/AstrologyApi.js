
const PLANET_URL ='https://vedicrishi-horoscope-matching-v1.p.rapidapi.com/numero_table/'


export function getPlanets(astrologyData){    //sending data to the server to create a new blog
    return fetch(PLANET_URL , {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'vedicrishi-horoscope-matching-v1.p.rapidapi.com'
      },
      // Send your data in the request body as JSON
      body: JSON.stringify(astrologyData)
    }).then(res => {
  
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(astrologyData => {
      return astrologyData
  
      // do something with the new task.
    }).catch(error => {
      // handle error
    })
  }