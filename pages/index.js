import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import AllNews from "../components/homepage/all-news";
import { getAllNewsPosts } from "../helpers/api-util";

const Home = (props) => {
  const { allPosts } = props;

  return (
    <>
      <Head>
        <title>Curated News</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AllNews posts={allPosts} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await getAllNewsPosts();

  if (data.articles) {
    return {
      props: {
        allPosts: data.articles,
      },
    };
  }
};
