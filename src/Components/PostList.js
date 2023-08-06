
import React, { useEffect, useState} from "react";
import {Card, Row, Col} from 'react-bootstrap'
import { getAllBlogs} from '../blogapi';

function PostList(props) {
    
    const imageArray = ["card1.webp", "card2.jpg", "card3.jpg", "card4.jpg", "card5.webp", "card6.webp"]
    const [blogs, setBlogs] = useState([])


    // function resetForm(){
    //     setEditableBlog({
    //       petName:'',
    //       petType:'',
    //       arrivalDate:'',
    //       id:''
    //     })
    //   }

      // function createBlogPost(astrologyDataFromForm){      //petDataFromForm is being passed to the createPet function
      //   newBlog(astrologyDataFromForm).then(astrologyDataFromServer => {   //petDataFromForm is being passed to newPet which creates a new pet on the server .then is called when the promise is fulfilled
      //    // resetForm()                                       //when the newPet function is successful then the form is reset
      //     setBlogs([...blogs, astrologyDataFromServer])             //updates the pets state with an array containing the new pet data from the server and the existing pets data
      //   })
      //   console.log("worked")

      // }

    useEffect(() => {
        getAllBlogs().then(blogs => {
          // blogs.length = Math.min(blogs.length, 6);
          blogs.sort(function(a, b) {
            return Number(b.id) - Number(a.id);
          });
          blogs.forEach((blog)=>{  //map creates a new array; foreach doesn't return anything
            blog.blogContent = blog.blogContent.replace(/(<([^>]+)>)/gi, ""); //a regular expression used to find html tags and replace them with nothing
            // return blog
          })
          setBlogs(blogs);
        })
      },[])
    return (
      
        <Row className="latest-posts">
          <Col>
            <Row>
              {blogs.map((blogPost, index) => (
                <Col sm={4} key={blogPost.id}>
                  <Card className="mb-3">
                  <Card.Img variant="top" src={"/images/" + imageArray[index % imageArray.length]}/>
                    <Card.Body>
                        <Card.Title>
                            {blogPost.blogTitle}
                        </Card.Title>
                        <Card.Text>
                            <span className="snippet">{blogPost.blogContent}</span>
                          <a href={"/singlePost/" + blogPost.id}>read more</a>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

    )
};

export default PostList;
