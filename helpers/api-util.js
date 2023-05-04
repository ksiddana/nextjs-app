const API_KEY = "de76f7af4b944ae08777fef8c1580be6";

export const getAllNewsPosts = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
  const data = await response.json();
  if (data.status !== 'error') {
    const sortedPosts = sortPosts(data.articles);
    return { ...data, sortedPosts };
  }

  return data;
};

export const sortPosts = (posts) => {
  const sortedPosts = posts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
};

export const getTopHeadlinesOrEverythingNewsSource = async ({ id, apiRoute }) => {
    const response = await fetch(`https://newsapi.org/v2/${apiRoute}?sources=${id}&apiKey=${API_KEY}`)
    const data = await response.json();
    
    if (data.status !== 'error') {
        const sortedPosts = sortPosts(data.articles);
        return { ...data, sortedPosts };
    }

    return data;
}

export const getEverythingNewsSource = async (sourceId) => {
    const response = await fetch(`https://newsapi.org/v2/everything?sources=${sourceId}&apiKey=${API_KEY}`)
    const data = await response.json();
    const sortedPosts = sortPosts(data.articles);
    return { ...data, sortedPosts };
}

