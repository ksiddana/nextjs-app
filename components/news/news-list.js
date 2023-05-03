import React from "react";
import NewsItem from "./news-item";

const NewsList = (props) => {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <NewsItem
          key={post.title}
          source={post.source.name}
          title={post.title}
          description={post.description}
          image={post.urlToImage}
          content={post.content}
          articleUrl={post.url}
          date={post.publishedAt}
        />
      ))}
    </ul>
  );
};

export default NewsList;
