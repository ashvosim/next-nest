import Image from 'next/image';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { IconButton, Paper, Typography } from '@material-ui/core';

import {
  BookmarksOutlined,
  CommentOutlined,
  ShareOutlined,
} from '@material-ui/icons';

import styles from './Post.module.scss';

const PostCard: NextPage = () => {
  const router = useRouter();
  const onPostOpen = () => {
    router.push('/posts/1');
  };

  return (
    <div className={styles.postContainer}>
      <Paper onClick={onPostOpen}>
        <div className={styles.postHeader}>
          <Image
            src="https://leonardo.osnova.io/2bf4b46c-ae6a-50b1-91d4-de5f078ff28d/-/scale_crop/300x300/-/format/webp/"
            height={24}
            width={24}
          />
          <Typography variant="h6">Аш восем</Typography>
          <Typography variant="body2">4 февраля</Typography>
        </div>
        <Typography variant="h5" className={styles.title}>
          Роскомнадзор требует от TJ удалить девять материалов по расследованиям
          Навального. Уведомления пришли и другим
        </Typography>
        <Typography>
          Это самый массовый список уведомлений от ведомства, который мы
          когда-либо получали.
        </Typography>
        <Image
          src="https://leonardo.osnova.io/bcef5c44-63ee-550b-8092-ebb468e3d3cf/-/preview/1300/-/format/webp/"
          height={400}
          width={600}
        />
        <ul className={styles.actions}>
          <li>
            <IconButton>
              <CommentOutlined />
            </IconButton>
          </li>
          <li>
            <IconButton>
              <BookmarksOutlined />
            </IconButton>
          </li>
          <li>
            <IconButton>
              <ShareOutlined />
            </IconButton>
          </li>
        </ul>
      </Paper>
    </div>
  );
};

export default PostCard;
