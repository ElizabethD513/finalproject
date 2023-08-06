import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {newBlog, getSingleBlog, updateBlog, removeBlog} from "../blogapi.js"
import MyModal from "./MyModal.js";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function BlogPostForm(props) {
    const isEditing = !!props.blogId
    const blogId = props.blogId || ""
    const [blogPost, setBlogPost] = useState({blogTitle:"", blogContent:"", id:blogId}); //declares a new state variable which returns the current state and a function that updates it.
    const [blogContent, setBlogContent] = useState(blogPost.blogContent)
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [isQuillValid, setIsQuillValid] = useState(true);
    const [action, setAction] = useState("saved")

    const handleSubmit = (event) => {
        event.preventDefault();
        blogPost.blogContent = blogContent

        if(!blogPost.blogTitle || !blogPost.blogContent ){
            setIsQuillValid(!!blogPost.blogContent)
            setValidated(true)
            return
        }
        


        if(blogPost.id){
            updateBlog(blogPost).then(blogData => {
                setBlogPost(blogData)
                setAction("saved")
                setShowModal(true)            
            })
        } else {
            newBlog(blogPost).then(blogData => {
                setBlogPost(blogData)
                setAction("saved")
                setShowModal(true)
                navigate("/editpost/" + blogData.id)
            })  
        } 
    }
      
    useEffect(() => {
        if(isEditing){
            getSingleBlog(blogId).then(blogData => {
                setBlogContent(blogData.blogContent)
                setBlogPost(blogData)
            })
        }
    },[isEditing, blogId]) 

    function blogDeletion(){
        removeBlog(blogId).then(blogData => {
            setBlogContent("")
            setAction("deleted")
            setShowModal(true)
            setBlogPost({blogTitle:"", blogContent:"", id:""})
            navigate("/newpost")
        })
        console.log("deletion")
    }



    return (
        <div>
            
            <h1>{blogPost.id ? "Editing " + blogPost.blogTitle : "New Post"}</h1>
        
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="blogTitle">
                    <Form.Label>Blog Title</Form.Label>
                    <Form.Control required type="text" placeholder="Enter title" name="blogTitle" 
                        value={blogPost.blogTitle}
                        onChange={(e) => setBlogPost({...blogPost, blogTitle:e.target.value})}
                   />
                    <Form.Control.Feedback type="invalid">Title Is Required</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="blogContent">
                     <Form.Label>Blog Content</Form.Label>
                     <ReactQuill className={isQuillValid ? "" : "is-invalid"} theme="snow" required value={blogContent} onChange={setBlogContent} />
                     <Form.Control.Feedback type="invalid">Content Is Required</Form.Control.Feedback>
                </Form.Group>

        
                <Button className="me-1" variant="primary" type="submit">Submit</Button>
                {blogPost.id ? <Button onClick={blogDeletion} variant="danger">Delete</Button> : ""}
                
            </Form>
            <MyModal title="Success!" content={(blogPost.blogTitle || "Blog")+" has been " + action} show={showModal} handleClose={handleClose}/>
        </div>
        
    )
}