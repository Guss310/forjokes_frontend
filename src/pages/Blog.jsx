import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import  PostForm  from '../components/BlogComponents/PostForm';
import  PostList  from '../components/BlogComponents/PostList';

export const Blog = () => {
    const { user, isAuthenticated } = useAuth0();
    const [posts, setPosts] = useState([
        {
          id: 1,
          title: "Post de prueba.",
          author: "Admin",
          topic: "Prueba",
          votes: 10,
          comments: [
          ]
        }
      ]);

      useEffect(() => { // esto es para que se ejecute solo una vez
        const fetchPosts = async () => { // esto es para que se ejecute solo una vez
          const response = await axios.get('/api/posts'); // esto sirve para hacer una petición a la API y obtener los posts 
          setPosts(response.data);
        };
    
        fetchPosts();
      }, []);

    const handleSubmitPost = async (newPost) => {
        const formData = new FormData();
        formData.append('title', newPost.title);
        formData.append('author', newPost.author);
        formData.append('topic', newPost.topic);
        if (newPost.image) {
          formData.append('image', newPost.image);
        }
    
        const response = await axios.post('/api/posts', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        setPosts([response.data, ...posts]);
      };
    
      const handleVote = async (postId, commentId, increment) => {
        const response = await axios.put(`/api/post/${postId}/comments/${commentId}/vote`, { increment });
        setPosts(response.data);
      };
    
      const handleAddComment = async (postId, content) => {
        const response = await axios.post(`/api/post/${postId}/comments`, { content, author: user.name });
        setPosts(response.data);
      };

    return (


    <div style={{ backgroundColor: '#e0f7fa', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ backgroundColor: '#000', minHeight: '10vh', color: '#fff', padding: '10px', textAlign: 'center' }}>
        </div>
        <div className="container">
            <PostForm handleSubmitPost={handleSubmitPost} />
            <PostList posts={posts} handleVote={handleVote} handleAddComment={handleAddComment} />
      </div>
    </div>
    );
}

export default Blog;