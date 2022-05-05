import type { NextPage } from 'next';
import Head from 'next/head';
import Content from 'components/Content';
import MainLayout from 'layouts/MainLayout';

const Home: NextPage = () => (
  <MainLayout>
    <Head>
      <title>Next</title>
    </Head>
    <Content />
  </MainLayout>
);

export default Home;
