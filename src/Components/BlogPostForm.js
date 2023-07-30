import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function BlogPostForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // props.createBlog(blogData)
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="blogTitle">
                    <Form.Label>Blog Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name="blogTitle" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="blogContent">
                     <Form.Label>Blog Content</Form.Label>
                     <Form.Control as="textarea" rows={9} name="blogContent"/>
                </Form.Group>
        
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            Blog Post Form
        </div>
        
    )
}