import type { NextPage } from 'next';

import PostCard from 'components/PostCard';

import styles from './Content.module.scss';

const Content: NextPage = () => (
  <div className={styles.contentContainer}>
    <PostCard />
    <PostCard />
    <PostCard />
  </div>
);

export default Content;
