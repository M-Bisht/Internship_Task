import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./comps/Posts";
import Comments from "./comps/Comments";

const App = () => {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [commentsVisible, setCommentsVisible] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://jsonplaceholder.typicode.com/comments";
      try {
        const response = await axios.get(url);
        const commentsData = response.data;
        setComments(commentsData);

        // Group comments by postId and store the first comment of each group
        const groupedPosts = {};
        commentsData.forEach((comment) => {
          if (!groupedPosts[comment.postId]) {
            groupedPosts[comment.postId] = comment;
          }
        });
        setFilteredComments(Object.values(groupedPosts));
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchApi();
  }, []);

  const selectPost = (postId) => {
    setSelectedPostId(postId);
    setCommentsVisible(true);
  };

  const closeComments = () => {
    setSelectedPostId(null);
    setCommentsVisible(false);
  };

  return (
    <div className="container">
    <h1>Internship Task</h1>
      <Posts posts={filteredComments} selectPost={selectPost} />
      {commentsVisible && (
        <Comments
          comments={comments}
          selectedPostId={selectedPostId}
          onClose={closeComments}
        />
      )}
    </div>
  );
};

export default App;
