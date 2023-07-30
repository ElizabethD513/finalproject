import React from 'react'
import { Col, Row, Container} from 'react-bootstrap'
import Comment from "./Comment"

export default function CommentList(props) {
    
    return (
        <Container className="mt-3">
            <Row>
                {props.comments.map((comment) => (
                    <Col sm={12} key={comment.id}>
                        <Comment comment={comment}/>
                    </Col>
                ))}
            </Row>
      </Container>
    )
}