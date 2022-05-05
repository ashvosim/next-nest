import { NextPage } from 'next';
import React from 'react';

import { Avatar, Typography } from '@material-ui/core';

import styles from './PostComment.module.scss';

interface IPostComment {
  image: string;
  userName: string;
  userDescription: string;
  comment: string;
}

const PostComment: NextPage<IPostComment> = ({
  image,
  userName,
  userDescription,
  comment,
}) => (
  <div>
    <div className={styles.commentContainer}>
      <Avatar src={image} />
      <div>
        <Typography className={styles.title}>{userName}</Typography>
        <Typography variant="caption">{userDescription}</Typography>
      </div>
    </div>
    <Typography variant="subtitle1">{comment}</Typography>
  </div>
);

export default PostComment;
