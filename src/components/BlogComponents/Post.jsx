import React from 'react';
import CommentList from './CommentList';
import { useAuth0 } from '@auth0/auth0-react';

export default function Post({ post, handleVote, handleAddComment }) {
  const { user, isAuthenticated } = useAuth0();
  
  return (
    <div className="card mb-4"> 
      <div className="card-body">
        <div className="d-flex mb-3">
          <div className="me-3 text-center">
            <button 
              className="btn btn-link p-0"
              onClick={() => handleVote(post.id, null, 1)}
              aria-label="Votar arriba"
            >
              ▲
            </button>
            <div>{post.votes}</div>
            <button 
              className="btn btn-link p-0"
              onClick={() => handleVote(post.id, null, -1)}
              aria-label="Votar abajo"
            >
              ▼
            </button>
          </div>
          <div>
            <h2 className="h5 mb-1">{post.postdata}</h2>
            <p className="text-muted small">Publicado por {user.name}</p>
            <p className="text-muted small"> @{post.topic}</p>
            <p className="text-muted small">{post.date}</p>
            {post.image && <img src={post.image} alt="Post" className="img-fluid mt-3" />}
          </div>
        </div>
        <CommentList comments={post.comments} postId={post.id} handleVote={handleVote} />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Añade un comentario..."
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleAddComment(post.id, e.currentTarget.value);
              e.currentTarget.value = '';
            }
          }}
        />
      </div>
    </div>
  );
}
