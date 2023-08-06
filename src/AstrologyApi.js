
const HOROSCOPE_URL ='https://vedicrishi-horoscope-matching-v1.p.rapidapi.com/numero_table/'


export function getHoroscope(astrologyData){    //sending data to the server to create a new blog
    return fetch(HOROSCOPE_URL , {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '8c9a35ca2dmshd4c646fb683f46bp1bf04bjsn1fc297cee049',
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