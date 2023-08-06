import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import CommentList from "./CommentList"
import CommentForm from './CommentForm'
import { useParams } from 'react-router-dom';
import { getSingleBlog } from "../blogapi";
import { BounceLoader } from "react-spinners";

export default function SinglePost() {
    let { blogId } = useParams();
    // https://www.davidhu.io/react-spinners/
    const [loading, setLoading] = useState(true)
    const [blogPost, setBlogPost] = useState({
        blogId:'',
        blogTitle:'',
        blogContent:''
    })
    
    useEffect(() => {
        getSingleBlog(blogId).then(blogData => {
            setLoading(false)
            setBlogPost(blogData);
        })
    },[blogId])

    const navigate = useNavigate();

    function editBlogPost() {
        navigate("/editpost/" + blogId)
        
    }

    return (
        <div>
            <BounceLoader loading={loading}/>
            <h1>{blogPost.blogTitle}</h1>
            <p>{blogPost.blogContent}</p>
            <Button onClick={editBlogPost} variant="secondary">Edit</Button>{' '}
            <Button variant="warning">Delete</Button>
            <CommentList blogId={blogId}/>
            <CommentForm blogId={blogId}/>
        </div>
    )
}
