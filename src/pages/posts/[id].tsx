import type { NextPage } from 'next';
import MainLayout from 'layouts/MainLayout';

import PostComments from 'components/PostComments';
import FullPost from 'components/FullPost';

const Post: NextPage = () => (
  <MainLayout>
    <FullPost />
    <PostComments />
  </MainLayout>
);

export default Post;
