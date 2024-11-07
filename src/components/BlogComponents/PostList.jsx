import React from 'react';
import Post from './Post';

export default function PostList({ posts = [], handleVote, handleAddComment }) {
  const postElements = [];

  posts.forEach((post) => {
    postElements.push(
      <Post
        key={post.id}
        post={post}
        handleVote={handleVote}
        handleAddComment={handleAddComment}
      />
    );
  });

  return <div>{postElements}</div>;
}