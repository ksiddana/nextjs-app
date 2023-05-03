import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import { getAllNewsPosts } from "../helpers/api-util";
import NewsList from "../components/news/news-list";

const Home = (props) => {
  const { allPosts } = props;

  return (
    <>
      <Head>
        <title>Curated News</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NewsList posts={allPosts} />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const data = await getAllNewsPosts();

  if (data.articles) {
    return {
      props: {
        allPosts: data.articles,
      },
    };
  }
};
