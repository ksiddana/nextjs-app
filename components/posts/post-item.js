import React from "react";
import Image from "next/image";
import styles from "./post-item.module.css";
import Link from "next/link";

function PostItem(props) {
  const { source, title, description, articleUrl, image, content, date } = props;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <li className={styles.post}>
      <div className={styles.container}>
        <img src={image} alt={title} width={100} height={100} />
        <Link href={articleUrl} target="_blank">
          <h2>{title}</h2>
          <p>{description}</p>
          <em>Published on: {formattedDate}</em>
        </Link>
      </div>
    </li>
  );
}

export default PostItem;
