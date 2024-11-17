// This is the initial code for the PostForm component. It is used to create a form to create a new post.
// This component is used in the Blog component.

import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// This is the PostForm component.
export default function PostForm({ handleSubmitPost }) { 
  const { user, isAuthenticated } = useAuth0();
  const [newPost, setNewPost] = useState({ postcontent: '', author: '', topic: '', image: null }); // This is the initial state of the new post.

  // This is the function used to handle the submit of a new post.
  const handleSubmit = (e) => {
    e.preventDefault(); // This is used to prevent the default behavior of the form.
    handleSubmitPost(newPost); // This is used to call the handleSubmitPost function.
    setNewPost({ postcontent: '', author: user.name, topic: '', image: null }); // This is used to reset the new post.
  };

  // this is not working in the code, but it is used to handle the change of the image.
  const handleImageChange = (e) => { 
    setNewPost(prev => ({ ...prev, image: e.target.files[0] })); 
  };

  // This is the return of the PostForm component.
  // It is used to create a form to create a new post, it has a topic input, a postcontent input, an image input and a submit button.
  return (
    <form onSubmit={handleSubmit} className="mb-4 p-3 bg-white rounded shadow">
      <h2 className="h4 mb-3">Crear nueva publicación</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Tema"
          value={newPost.topic}
          onChange={(e) => setNewPost(prev => ({ ...prev, topic: e.target.value }))}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Sube algo..."
          value={newPost.postcontent}
          onChange={(e) => setNewPost(prev => ({ ...prev, postcontent: e.target.value }))}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          onChange={handleImageChange}
        />
      </div>
      <div className="mb-3">
      </div>
      <button type="submit" className="btn btn-primary">Publicar</button>
    </form>
  );
}
