import { ChangeEvent, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import {
  Avatar,
  Button,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import PostCard from 'components/PostCard';

import MainLayout from 'layouts/MainLayout';

import styles from './Profile.module.scss';

const Profile: NextPage = () => {
  const [tabPage, setTabPage] = useState('articles');
  const onChange = (event: ChangeEvent<{}>, newValue: string): void => {
    setTabPage(newValue);
  };

  return (
    <MainLayout hideComments>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={styles.profileContainer}>
        <Paper className={styles.profileHeader}>
          <div>
            <Image
              src="https://leonardo.osnova.io/2bf4b46c-ae6a-50b1-91d4-de5f078ff28d/-/scale_crop/300x300/-/format/webp/"
              height={112}
              width={112}
            />
            <Typography variant="h3">аш восем</Typography>
            <Typography>Изменить описание</Typography>
            <Typography>на проекте с 4 февраля 2022</Typography>
            <Tabs indicatorColor="primary" value={tabPage} onChange={onChange}>
              <Tab label="Статьи" value="articles" />
              <Tab label="Комментарии" value="comments" />
              <Tab label="Понравившееся" value="liked" />
            </Tabs>
          </div>
          <div className={styles.buttonsContainer}>
            <Button variant="contained">
              <Link href="/editProfile">
                <a>
                  <Settings />
                </a>
              </Link>
            </Button>
          </div>
        </Paper>
        <div className={styles.papersContainer}>
          <div>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
          <div>
            <Paper className={styles.subscribersContainer}>
              <Typography>Подписчики</Typography>
              <div>
                <Avatar />
                <Avatar />
                <Avatar />
              </div>
            </Paper>
            <Paper className={styles.subscribesContainer}>
              <div>
                <Typography>Подписки</Typography>
                <Typography variant="subtitle1">19</Typography>
              </div>
              <div>
                <div>
                  <Image
                    src="https://leonardo.osnova.io/74355c2a-cf87-ffba-aebf-45ae3bc8d1d8/-/scale_crop/108x108/-/format/webp/"
                    width={24}
                    height={24}
                  />
                  <Typography variant="subtitle2">Интернет</Typography>
                </div>
                <div>
                  <Image
                    src="https://leonardo.osnova.io/74355c2a-cf87-ffba-aebf-45ae3bc8d1d8/-/scale_crop/108x108/-/format/webp/"
                    width={24}
                    height={24}
                  />
                  <Typography variant="subtitle2">Интернет</Typography>
                </div>
                <div>
                  <Image
                    src="https://leonardo.osnova.io/74355c2a-cf87-ffba-aebf-45ae3bc8d1d8/-/scale_crop/108x108/-/format/webp/"
                    width={24}
                    height={24}
                  />
                  <Typography variant="subtitle2">Интернет</Typography>
                </div>
                <div>
                  <Image
                    src="https://leonardo.osnova.io/74355c2a-cf87-ffba-aebf-45ae3bc8d1d8/-/scale_crop/108x108/-/format/webp/"
                    width={24}
                    height={24}
                  />
                  <Typography variant="subtitle2">Интернет</Typography>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
