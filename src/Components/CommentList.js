import React, {useEffect, useState} from 'react'
import { Col, Row, Container} from 'react-bootstrap'
import Comment from "./Comment"
import {getAllComments} from "../blogapi";
import {BounceLoader} from "react-spinners";

export default function CommentList(props) {
    //https://www.davidhu.io/react-spinners/
    const [loading, setLoading] = useState(true)
    const [comments, setComments] = useState([])

    useEffect(() => {
        getAllComments(props.blogId).then(blogData => {
            setLoading(false)
            setComments(blogData);
        })
    },[props.blogId])

    return (
        <Container className="mt-3">
            <h3>Comments</h3>
                <BounceLoader loading={loading}/>
                <Row>
                    {comments.map((comment) => (
                        <Col sm={12} key={comment.id}>
                            <Comment comment={comment}/>
                        </Col>
                    ))}
                </Row>
        </Container>
    )
}
