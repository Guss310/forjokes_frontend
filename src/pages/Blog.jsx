// This are the main page for the blog, it contains the PostForm and PostList components.
// The PostForm component is used to create a new post and the PostList component is used to display all the posts.

// This are the dependencies used in this file.
import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import  PostForm  from '../components/BlogComponents/PostForm';
import  PostList  from '../components/BlogComponents/PostList';

// This is the main function of the Blog page.
export const Blog = () => {
  const { user, isAuthenticated } = useAuth0(); // This is used to get the user information.
  const [posts, setPosts] = useState([ // This is the initial state of the posts.
      {
        id: 1,
        postcontent: "Post de prueba.",
        author: "Admin",
        topic: "Prueba",
        votes: 5,
        comments: [
          {
            id: 1,
            content: "Comentario de prueba.",
            author: "Admin",
            votes: 2
          }
          
        ]
      }
    ]);

    // This is used to get the posts from the API.
    useEffect(() => {
      async function fetchPosts() {
        try{
          const response = await axios.get('http://localhost:3001/api/post/DESC');
          console.log('Respuesta de la API:');
          setPosts(response.data);
          console.log(response.data);
        } catch(err){
          console.log(err);
        }
        
      };
      fetchPosts(); // This is used to call the fetchPosts function.
    }, []); 

    // This is used to handle the submit of a new post.
    const handleSubmitPost = async (newPost) => { 
      const UserId = user?.sub;
      const fechaActual = new Date().toISOString();
        console.log(newPost)
        const formData = { // This is the data that is going to be sent to the API.
          user_id: UserId,
          postcontent: newPost.postcontent,
          author: newPost.author,
          topic: newPost.topic,
          created_at: fechaActual
        }
      
      console.log('Form data:', formData);
      const response = await axios.post('/api/post', formData, { // This is used to send the data to the API.
        headers: {
          'Content-Type': 'application/json' 
        }
      }); 
      console.log("HandleSumbitPost...",response.data)
      setPosts([response.data, ...posts]); // This is used to update the posts.
    };    


  // This is used to handle the add of a new comment.
  const handleAddComment = async (postId, content) => { 
    const created_at = new Date().toISOString();
    const response = await axios.post(`/api/comments`, { content, author: user.name, created_at, post_id : postId }); 
    
    const updatedPosts = posts.map(post => { // This is used to update the posts.
      if (post.id === postId) {
        return {
          ...post,
          comments: [...(post.comments || []), response.data] // This is used to add the new comment to the post.
        };
      }
      return post;
    });
    setPosts(updatedPosts); // This is used to update the posts.
    
  };

  // This is used to handle the vote of a post or a comment.
  const handleVote = async (postId, comment_id, increment) => { 
    if(comment_id){ // This is used to check if the vote is for a post or a comment.
      const response = await axios.put(`/api/vote/comments/${comment_id}/${ increment }`);
      setPosts(response.data)
    }
    else{ // This is used to update the posts.
      const response = await axios.put(`/api/vote/post/${postId}/${ increment }`);
      setPosts(response.data);
    }
  };

  // This is the return of the Blog function, it contains the PostForm and PostList components.
  return (
  <div style={{ backgroundColor: '#e0f7fa', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <div style={{ backgroundColor: '#000', minHeight: '10vh', color: '#fff', padding: '10px', textAlign: 'center' }}>
      </div>
      <div className="container">
          <PostForm handleSubmitPost={handleSubmitPost} />
          {posts.length > 0 && <PostList posts={posts} handleVote={handleVote} handleAddComment={handleAddComment} />}
    </div>
  </div>
  );
}

export default Blog;