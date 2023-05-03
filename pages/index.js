import styles from '@/styles/Home.module.css'
import { Fragment } from 'react'
import AllNews from '../components/homepage/all-news';
import { getAllNewsPosts } from '../helpers/api-util';

const Home = (props) => {
  const { allPosts } = props;
  
  return (
    <Fragment>
      <AllNews posts={allPosts} />
    </Fragment>
  )
}

export default Home;

export const getStaticProps = async () => {
  const data = await getAllNewsPosts();
  //console.log(data);
  
  if (data.articles) {
    return {
      props: {
        allPosts: data.articles
      }
    }
  }
}
