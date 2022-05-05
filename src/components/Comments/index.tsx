import { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';

import { Typography } from '@material-ui/core';
import { KeyboardArrowRight, KeyboardArrowUp } from '@material-ui/icons';

import styles from './Comments.module.scss';

const Comments: NextPage = () => {
  const [hide, setHide] = useState(false);
  return (
    <div>
      <Typography
        variant="h3"
        className={`${styles.title}${
          hide ? ` ${styles.transformedTitle}` : ''
        }`}
        onClick={() => setHide(!hide)}
      >
        Комментарии
        {hide ? <KeyboardArrowUp /> : <KeyboardArrowRight />}
      </Typography>
      {!hide && (
        <div>
          <ul className={styles.comments}>
            <li className={styles.commentContainer}>
              <div>
                <Image
                  src="https://leonardo.osnova.io/74355c2a-cf87-ffba-aebf-45ae3bc8d1d8/-/scale_crop/108x108/-/format/webp/"
                  width={24}
                  height={24}
                />
                <Typography variant="h6">аш восем</Typography>
                <Typography variant="caption">3м</Typography>
              </div>
              <Typography variant="subtitle1">
                В смысле виноват? Газ народное достояние. Дворец построен. В
                гробу карманов нет. В итоге,…
              </Typography>
              <Typography variant="h6">
                Если бы Украина не воровала газ в нулевые
              </Typography>
            </li>
            <li className={styles.commentContainer}>
              <div>
                <Image
                  src="https://leonardo.osnova.io/74355c2a-cf87-ffba-aebf-45ae3bc8d1d8/-/scale_crop/108x108/-/format/webp/"
                  width={24}
                  height={24}
                />
                <Typography variant="h6">аш восем</Typography>
                <Typography variant="caption">3м</Typography>
              </div>
              <Typography variant="subtitle1">
                В смысле виноват? Газ народное достояние. Дворец построен. В
                гробу карманов нет. В итоге,…
              </Typography>
              <Typography variant="h6">
                Если бы Украина не воровала газ в нулевые
              </Typography>
            </li>
            <li className={styles.commentContainer}>
              <div>
                <Image
                  src="https://leonardo.osnova.io/74355c2a-cf87-ffba-aebf-45ae3bc8d1d8/-/scale_crop/108x108/-/format/webp/"
                  width={24}
                  height={24}
                />
                <Typography variant="h6">аш восем</Typography>
                <Typography variant="caption">3м</Typography>
              </div>
              <Typography variant="subtitle1">
                В смысле виноват? Газ народное достояние. Дворец построен. В
                гробу карманов нет. В итоге,…
              </Typography>
              <Typography variant="h6">
                Если бы Украина не воровала газ в нулевые
              </Typography>
            </li>
            <li className={styles.commentContainer}>
              <div>
                <Image
                  src="https://leonardo.osnova.io/74355c2a-cf87-ffba-aebf-45ae3bc8d1d8/-/scale_crop/108x108/-/format/webp/"
                  width={24}
                  height={24}
                />
                <Typography variant="h6">аш восем</Typography>
                <Typography variant="caption">3м</Typography>
              </div>
              <Typography variant="subtitle1">
                В смысле виноват? Газ народное достояние. Дворец построен. В
                гробу карманов нет. В итоге,…
              </Typography>
              <Typography variant="h6">
                Если бы Украина не воровала газ в нулевые
              </Typography>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Comments;
