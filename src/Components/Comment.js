import React from 'react'
import {Card} from 'react-bootstrap'

export default function Comment(props) {
    return (
        <Card className="mb-3">
            <Card.Body> 
                <Card.Text>
                    {props.comment.comment}<br/>
                    Rating {props.comment.rating}
                </Card.Text>
            </Card.Body> 
        </Card>
    )
}