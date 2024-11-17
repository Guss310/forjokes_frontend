// This is the initial code for the Blog component. It is used to display the posts.

// This dependencies are used in this file.
import React from 'react';
import Comment from '../BlogComponents/Comment';

export default function CommentList({ comments, postId, handleVote }) {
  
  // This is the return of the CommentList component
  // It used map in stead of forEach to display the comments of the posts, because it returns a new array.
  return (
    <>
      {comments && comments.map((comment) => (
        <Comment key={comment.id} comment={comment} postId={postId} handleVote={handleVote} />
      ))}
    </>
  );
}
