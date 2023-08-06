import React from 'react'
import { Col, Row, Container} from 'react-bootstrap'
import Comment from "./Comment"
import {BounceLoader} from "react-spinners";

export default function CommentList(props) {
    //https://www.davidhu.io/react-spinners/


    
    

    return (
        <Container className="mt-3">
            <h3>Comments</h3>
                <BounceLoader loading={props.loading}/>
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
