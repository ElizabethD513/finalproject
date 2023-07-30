import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function BlogPostForm() {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                     <Form.Label>Example textarea</Form.Label>
                     <Form.Control as="textarea" rows={9} />
                </Form.Group>
        
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            Blog Post Form
        </div>
        
    )
}