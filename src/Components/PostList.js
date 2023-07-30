
import React, { useEffect, useState} from "react";
import {Card, Container, Row, Col} from 'react-bootstrap'
import { getAllBlogs} from '../crud';


function PostList(props) {
    const blogPosts = [{
		id:1,
		blogTitle:"venus",
		blogContent:"text",
		comments:[
			{
				id:3,
				rating:5,
				comment:"text1"
			
			}
		],
	
	},
    {
		id:2,
		blogTitle:"mercury",
		blogContent:"text",
		comments:[
			{
				id:3,
				rating:3,
				comment:"text2"
			
			}
		],
	
	},
    {
		id:3,
		blogTitle:"jupiter",
		blogContent:"text",
		comments:[
			{
				id:3,
				rating:1,
				comment:"text3"
			
			}
		],
	
	}];

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        getAllBlogs().then(blogs => {
          setBlogs(blogs);
        })
      },[])
    return (
    
      <Container className="mt-3">
        <Row>
          <Col>
            <Row>
              {blogs.map((blogPost) => (
                <Col sm={4} key={blogPost.id}>
                  <Card className="mb-3">
                    <Card.Body> 
                        <Card.Title>{blogPost.blogTitle}</Card.Title>
                        <Card.Text>
                            {blogPost.blogContent}
                        </Card.Text>
                    </Card.Body> 
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      
    )
};

export default PostList;
