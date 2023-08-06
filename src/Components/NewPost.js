import React from 'react'
import { useParams } from 'react-router-dom';
import BlogPostForm from "./BlogPostForm";
import { Container } from 'react-bootstrap'


export default function NewPost() {
    let { blogId } = useParams();  //useParams will return an object containing all the parameters in the url
    return (
        <Container>
            <BlogPostForm blogId={blogId}/>
        </Container>
    )
}