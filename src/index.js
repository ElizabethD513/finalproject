import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Components/HomePage'
import NewPost from './Components/NewPost'
import SinglePost from './Components/SinglePost'
import Navigation from "./Components/Navigation"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Navigation/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/singlePost" element={<SinglePost />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  
);