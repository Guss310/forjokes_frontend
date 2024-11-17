// This is the initial code for the PostList component. It is used to display the posts.

// This dependencies are used in this file.
import React from 'react';
import Post from './Post';

// This is the PostList component. It is used to display the posts.
export default function PostList({ posts , handleVote, handleAddComment }) {

  // This is the return of the PostList component, using map, because foreach does not return a new array.
  return <>{ posts && posts.map((post , index) => {
    return <Post key={index} post={post} handleVote={handleVote} handleAddComment={handleAddComment} />
  })}</>;
}

