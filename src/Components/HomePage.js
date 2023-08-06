import React from 'react';
import PostList from "./PostList";
import { Container } from 'react-bootstrap'


export default function HomePage() {
    
       
    return (
        <div>
            <div id="homeBackgroundImage">
                <div>
                    <h1>Stellar Gravity</h1>
                    <h3>An Astrology Blog</h3>
                </div>
            </div>
            <Container>
                <h3 className="mb-5 mt-5">Latest Blog Posts</h3>
                <PostList/>
            </Container>
        </div>
    )
}