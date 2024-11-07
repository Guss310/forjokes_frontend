import React from 'react';
import Comment from '../BlogComponents/Comment';

export default function CommentList({ comments, postId, handleVote }) {
  const commentElements = [];

  if(!comments) return

  comments.forEach((comment) => {
    commentElements.push(
      <Comment key={comment.id} comment={comment} postId={postId} handleVote={handleVote} />
    );
  });

  return <ul className="list-unstyled">{commentElements}</ul>;
}
