const BLOG_ENDPOINT = "https://64c54eeac853c26efadab4a3.mockapi.io/api/v1/blogposts"



export function getAllBlogs(){       //https://github.com/mockapi-io/docs/wiki/Code-examples
    return fetch(BLOG_ENDPOINT, {   //fetching data from the Mock Api URL to get all blogs in the form of a JSON response
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {  //Response object
      if (res.ok) {       
        return res.json();   //receiving a JSON response. 
      }
    // handle error
    }).then(blogData => {
        return blogData
  // Do something with the list of tasks
    }).catch(error => {
  // handle error
    })
}

export function removeBlog(blogId){       //sending a request to delete data from the server using the blogId
  return fetch(BLOG_ENDPOINT + "/" + blogId, {
    method: 'DELETE',
  }).then(res => {
    if (res.ok) {
        return res.json();   //to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.
    }                       //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // handle error
  }).catch(error => {
    // handle error
  })
}

export function newBlog(blogData){    //sending data to the server to create a new blog
  return fetch(BLOG_ENDPOINT , {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(blogData)
  }).then(res => {

    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(blogData => {
    return blogData

    // do something with the new task
  }).catch(error => {
    // handle error
  })
}

export function updateBlog(blogData){   //sending data to the server to edit blog data
    return fetch(BLOG_ENDPOINT+'/'+blogData.id, {
        method: 'PUT', // or PATCH
        headers: {'content-type':'application/json'},
        body: JSON.stringify(blogData)
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(blogData => {
        return blogData
    }).catch(error => {
        // handle error
    })
}

//--------------------------------------comments API------------------------------------------------//

export function getAllComments(blogId){       //https://github.com/mockapi-io/docs/wiki/Code-examples
  return fetch(BLOG_ENDPOINT + "/" + blogId  + "/Comments", {   //fetching data from the Mock Api URL to get all blogs in the form of a JSON response
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {  //Response object
    if (res.ok) {       
      return res.json();   //receiving a JSON response. 
    }
  // handle error
  }).then(commentsData => {
      return commentsData
// Do something with the list of tasks
  }).catch(error => {
// handle error
  })
}

export function removeComments(blogId, commentId){       //sending a request to delete data from the server using the blogId
return fetch(BLOG_ENDPOINT + "/" + blogId + "/Comments/" + commentId, {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();   //to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.
  }                       //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // handle error
}).catch(error => {
  // handle error
})
}

export function newComments(blogId, commentData){    //sending data to the server to create a new blog
return fetch(BLOG_ENDPOINT + "/" + blogId + "/Comments", {
  method: 'POST',
  headers: {'content-type':'application/json'},
  // Send your data in the request body as JSON
  body: JSON.stringify(commentData)    
}).then(res => {

  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(commentData => {
  return commentData

  // do something with the new task
}).catch(error => {
  // handle error
})
}

export function updateComment(blogId, commentData){   //sending data to the server to edit blog data
  return fetch(BLOG_ENDPOINT + '/'+ blogId + "/Comments/" + commentData.id, {
      method: 'PUT', // or PATCH
      headers: {'content-type':'application/json'},
      body: JSON.stringify(commentData)
  }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
  }).then(commentData => {
      return commentData
  }).catch(error => {
      // handle error
  })
}
