// This is the initial code for the Post component. It is used to display the posts.
import React from 'react';
import CommentList from './CommentList';
import { useAuth0 } from '@auth0/auth0-react';

export default function Post({ post, handleVote, handleAddComment }) {
  const { user, isAuthenticated } = useAuth0();

  // This function is used to format the date.
  function formatDate(dateString) {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString();
  }
  // This function is used to format the hour.
  function formDateMinusHours(dateString) {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleTimeString();
  }

  // This is the return of the Post Component
  // It is used to display the posts, the comments of the posts, the user who posted it, the date and the hour.
  return (
    <div className="card mb-4"> 
      <div className="card-body">
        <div className="d-flex mb-3">
          <div className="me-3 text-center">
            <button 
              className="btn btn-link p-0"
              onClick={() => handleVote(post.id, null, 'up')}
              aria-label="Votar arriba"
            >
              ▲
            </button>
            <div>{post.votes !== undefined ? post.votes : 0}</div> 
            <button 
              className="btn btn-link p-0"
              onClick={() => handleVote(post.id, null, 'down')}
              aria-label="Votar abajo"
            >
              ▼
            </button>
          </div>
          <div>
            <p className="text-muted small">{user ? user.name : 'Anónimo'}</p>
            <h2 className="h5 mb-1">{post.postcontent}</h2>
            <p className="text-muted small"> #{post.topic}</p>
            <p className="text-muted small mb-0">{formatDate(post.created_at)}</p>
            <p className="text-muted small">{formDateMinusHours(post.created_at)}</p>
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