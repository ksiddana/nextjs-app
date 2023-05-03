import React from 'react'
import NewsList from '@/components/news/news-list'
import { getTopHeadlinesOrEverythingNewsSource } from '@/helpers/api-util'

const sourceNameMap = {
  'techcrunch': { id: 'techcrunch', apiRoute: 'top-headlines'},
  'hackernews': { id: 'hacker-news', apiRoute: 'everything' },
  'bbc': { id: 'bbc-news', apiRoute: 'top-headlines'}
}

const SubCategoryNewsList = (props) => {
  const { detailedPosts } = props;
  return (
    <NewsList posts={detailedPosts} />
  )
}

export default SubCategoryNewsList

export const getServerSideProps = async (context) => {
  const { params: { sourceName} } = context;
  const sourceMap = sourceNameMap[sourceName];
  //console.log(sourceId);

  const data = await getTopHeadlinesOrEverythingNewsSource(sourceMap);
  if (data.articles) {
    return {
      props: {
        detailedPosts: data.articles
      }
    }
  }
}