import React from "react";

const Posts = ({ posts, selectPost }) => (
  <div className="postsContainer">
    {posts.map((post, index) => (
      <div className="posts" key={index} onClick={() => selectPost(post.postId)}>
      <span className="id">Post Id: {post.postId}</span>
      <h2 className="name">Name: {post.name}</h2>
      <span className="email">Email: {post.email}</span>
      <p className="message">Message: {post.body}</p>
      </div>
    ))}
  </div>
);

export default Posts;
