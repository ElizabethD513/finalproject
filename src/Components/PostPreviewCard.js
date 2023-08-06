import React from 'react';
import { Card } from 'react-bootstrap';


export default function PostPreviewCard(props) {
    return (
        <Card className="mb-3">
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title>
                    {props.blogPost.blogTitle}
                </Card.Title>
                <Card.Text>
                    <span className="snippet">{props.blogPost.blogContent}</span>
                    <a href={"/singlePost/" + props.blogPost.id}>read more</a>
                </Card.Text>
            </Card.Body>
        </Card>
        
    )
}