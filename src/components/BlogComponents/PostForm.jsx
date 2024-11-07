import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function PostForm({ handleSubmitPost }) {
  const { user, isAuthenticated } = useAuth0();
  const [newPost, setNewPost] = useState({ content: '', author: '', topic: '', image: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitPost(newPost); 
    setNewPost({ content: '', author: user.name, topic: '', image: null });
  };

  const handleImageChange = (e) => {
    setNewPost(prev => ({ ...prev, image: e.target.files[0] }));
  };

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
          value={newPost.content}
          onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
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
