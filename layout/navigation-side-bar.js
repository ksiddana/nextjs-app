import React from 'react'
import Link from 'next/link';
import styles from './navigation-side-bar.module.css';

function NavigationSideBar() {
  return (
    <nav className={styles.container}>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/news/techcrunch">Tech Crunch</Link></li>
            <li><Link href="/news/hackernews">Hacker News</Link></li>
            <li><Link href="/news/bbc">BBC</Link></li>
            <li><Link href="/news/reuters">Reuters</Link></li>
            <li><Link href="/news/cnn">CNN</Link></li>
        </ul>
    </nav>
  )
}

export default NavigationSideBar