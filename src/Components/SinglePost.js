import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import CommentList from "./CommentList"
import CommentForm from './CommentForm'
import { useParams } from 'react-router-dom';
import { getSingleBlog } from "../blogapi";
import { BounceLoader } from "react-spinners";
import {newComments, getAllComments} from "../blogapi"


export default function SinglePost() {
    const [loadingBlogPost, setLoadingBlogPost] = useState(true)
    const [comments, setComments] = useState([])
    let { blogId } = useParams();
    // https://www.davidhu.io/react-spinners/
    const [loadingComments, setLoadingComments] = useState(true)
    const [blogPost, setBlogPost] = useState({
        blogId:'',
        blogTitle:'',
        blogContent:''
    })
    useEffect(() => {
        getSingleBlog(blogId).then(blogData => {
            setLoadingBlogPost(false)
            setBlogPost(blogData);
        })
        getAllComments(blogId).then(blogData => {
            setLoadingComments(false)
            setComments(blogData);
        })
    },[blogId])
    
    
    function createComment(commentData) {
        newComments(blogId, commentData).then(commentData => {
            setComments([...comments, commentData])
            console.log(commentData)
        })    
    }
    

    return (
        <>
            <div className="header-wrapper py-3 mb-5">
                <Container>
                    <h1>{blogPost.blogTitle}</h1>
                </Container>
            </div>
            <Container className="singlepostbackground">
                <BounceLoader loading={loadingBlogPost}/>
                <div id="blog-content" className="fs-4"dangerouslySetInnerHTML={{__html:blogPost.blogContent}}>         
                </div>
                <Button className="me-1 mt-4" href={"/editpost/" + blogId} variant="secondary">Edit</Button>{' '}
                <CommentList blogId={blogId} comments={comments} loading={loadingComments}/>
                <CommentForm blogId={blogId} createComment={createComment}/>
            </Container>
        </>
    )
}
