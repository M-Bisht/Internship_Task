import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Comments = ({ comments, selectedPostId, onClose }) => (
  <div className="commentsContainer">
    {selectedPostId !== null && (
      <>
        <FontAwesomeIcon icon={faXmark} onClick={onClose} className="close" />
        <h2>Comments for Post ID {selectedPostId}</h2>
        {comments
          .filter((comment) => comment.postId === selectedPostId)
          .map((comment) => (
            <div className="comments" key={comment.id}>
              <h2 className="name">Name: {comment.name}</h2>
              <span className="email">Email: {comment.email}</span>
              <p className="message">Message: {comment.body}</p>
            </div>
          ))}
      </>
    )}
  </div>
);

export default Comments;
