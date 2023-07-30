import React from 'react'
import CommentList from "./CommentList"
import CommentForm from './CommentForm'

export default function SinglePost() {
    const blogPost =  {
		id:3,
		blogTitle:"jupiter",
		blogContent:"text",
		comments:[
            {
                id:1,
                rating:3,
                comment:"text1"
            },
            {
                id:2,
                rating:4,
                comment:"text2"
            },
            {
                id:3,
                rating:5,
                comment:"text3"
            }
        ]
	
	}
    return (
        <div>
            <h1>{blogPost.blogTitle}</h1>
            <p>{blogPost.blogContent}</p>
            <CommentList comments={blogPost.comments}/>
            <CommentForm/>
        </div>
    )
}