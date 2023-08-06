import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'




export default function CommentForm(props) {
    const [validated, setValidated] = useState(false);
    const [comment, setComment] = useState("")
   
    

    
    const handleSubmit = (event) => {
        event.preventDefault();
       if(!comment){
        setValidated(true)
        return
       } 
       setValidated(true)
       const commentData = {comment: comment, blogpostId: props.blogId}
        props.createComment(commentData)
           
    }

    
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Add A Comment</Form.Label>
                <Form.Control as="textarea" rows={3} name="comments" value={comment} onChange={(e) => setComment(e.target.value)}/>
            </Form.Group>
            {/* <Form.Group className="mb-3 rateblog">
                <Form.Label className="form-label m-5"><h3>Rate the Blog:</h3></Form.Label>
                <Stars/>
                
            </Form.Group> */}
            <Button className="mb-3"variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}