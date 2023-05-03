export const getAllNewsPosts = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=de76f7af4b944ae08777fef8c1580be6"
  );
  const data = await response.json();
  const sortedPosts = sortPosts(data.articles);
  return { ...data, sortedPosts };
};

export const sortPosts = (posts) => {
  const sortedPosts = posts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
};
