import React from 'react';

export default function Comment({ comment, postId, handleVote }) {
  return (
    <li className="mb-2 p-2 bg-light rounded">
      <div className="d-flex">
        <div className="me-2 text-center">
          <button
            className="btn btn-link p-0 small"
            onClick={() => handleVote(postId, comment.id, 1)}
            aria-label="Votar comentario arriba"
          >
            ▲
          </button>
          <div className="small">{comment.votes}</div>
          <button
            className="btn btn-link p-0 small"
            onClick={() => handleVote(postId, comment.id, -1)}
            aria-label="Votar comentario abajo"
          >
            ▼
          </button>
        </div>
        <div>
          <p className="mb-1 small">{comment.content}</p>
          <p className="text-muted small mb-0">por {comment.author}</p>
        </div>
      </div>
    </li>
  );
}
