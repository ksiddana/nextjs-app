import React from "react";
import PostItem from "../posts/post-item";

const AllNews = (props) => {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <PostItem
          key={post.title}
          source={post.source.name}
          title={post.title}
          description={post.description}
          image={post.urlToImage}
          content={post.content}
          articleUrl={post.url}
        />
      ))}
    </ul>
  );
};

export default AllNews;
