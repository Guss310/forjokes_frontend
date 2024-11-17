// This is the initial code for the Profile component. It is used to display the user profile.

// This dependencies are used in this file.
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// This is a commponent of the Comment. It is used to display the comments of the posts.
export default function Comment({ comment, postId, handleVote }) {
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

  // This is the return of the Comment component
  // It is used to display the comments of the posts.
  // The user can vote the comments, and the comments are displayed with the user who posted it, the date and the hour.
  return (
    <li className="mb-2 p-2 bg-light rounded">
      <div className="d-flex">
        <div className="me-2 text-center">
          <button
            className="btn btn-link p-0 small"
            onClick={() => handleVote(postId, comment.id, 'up')}
            aria-label="Votar comentario arriba"
          >
            ▲
          </button>
          <div>{comment.votes !== undefined ? comment.votes : 0}</div>
          <button
            className="btn btn-link p-0 small"
            onClick={() => handleVote(postId, comment.id, 'down')}
            aria-label="Votar comentario abajo"
          >
            ▼
          </button>
        </div>
        <div>
          <p className="mb-1 small">{comment.content}</p>
          <p className="text-muted small mb-0">Publicado por {user ? user.name : 'Anónimo'}</p>
          <p className="text-muted small mb-0">{formatDate(comment.created_at)}</p>
          <p className="text-muted small">{formDateMinusHours(comment.created_at)}</p>
        </div>
      </div>
    </li>
  );
}
