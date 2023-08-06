import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function HoroscopeForm(props) {

    const [validated, setValidated] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault()

        if(!props.birthday){
            setValidated(true)
            return
        }

        props.fetchHoroscope(props.birthday)
    }

    return (
        <div className="mb-5">
            <h3>Enter Birthday</h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="birthday">
                    <Form.Control style={{position:"relative"}} required value={props.birthday} type="date" onChange={(e) => props.setBirthday(e.target.value)} name="birthday"/>
                    <Form.Control.Feedback type="invalid">Birthday Is Required</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">Get Horoscope</Button>
            </Form>
       </div>
    )
}
