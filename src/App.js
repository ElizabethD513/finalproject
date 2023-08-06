import Navigation from "./Components/Navigation"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./Components/HomePage";
import NewPost from "./Components/NewPost";
import SinglePost from "./Components/SinglePost";
import React from "react";
import "./app.css"

function App() {
  return (
      <Router>
          <Navigation/>
          <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/newpost" element={<NewPost />} />
              <Route path="/editpost/:blogId" element={<NewPost />} />
              <Route path="/singlePost/:blogId" element={<SinglePost />} />
          </Routes>
      </Router>
  );
}

export default App;
