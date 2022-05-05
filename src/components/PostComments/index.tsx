import type { NextPage } from 'next';

import { useState, ChangeEvent } from 'react';
import { Paper, Typography, Tabs, Tab } from '@material-ui/core';

import PostComment from 'components/PostComment';
import AddComment from 'components/AddComment';

import styles from './PostComments.module.scss';

const PostComments: NextPage = () => {
  const [tabPage, setTabPage] = useState('popular');
  const onChange = (event: ChangeEvent<{}>, newValue: string): void => {
    setTabPage(newValue);
  };
  return (
    <Paper className={styles.paperContainer}>
      <Typography variant="h6" className={styles.title}>
        Комментарии (118)
      </Typography>
      <Tabs indicatorColor="primary" value={tabPage} onChange={onChange}>
        <Tab label="Популярные" value="popular" />
        <Tab label="По порядку" value="byOrder" />
      </Tabs>
      <div>
        <AddComment />
        <PostComment
          image="https://leonardo.osnova.io/2bf4b46c-ae6a-50b1-91d4-de5f078ff28d/-/scale_crop/300x300/-/format/webp/"
          userName="аш восем"
          userDescription="3м"
          comment="охранник совершил акт современного искусства, показав всю иронию
          иллюзии безопасности. пририсовав глаза, он метафорически открыл
          глаза людям на то, что опасность системе представляет сама система.
          охранника оправдать, дать премию, картину так и оставить с глазами"
        />
        <PostComment
          image="https://leonardo.osnova.io/2bf4b46c-ae6a-50b1-91d4-de5f078ff28d/-/scale_crop/300x300/-/format/webp/"
          userName="аш восем"
          userDescription="3м"
          comment="охранник совершил акт современного искусства, показав всю иронию
          иллюзии безопасности. пририсовав глаза, он метафорически открыл
          глаза людям на то, что опасность системе представляет сама система.
          охранника оправдать, дать премию, картину так и оставить с глазами"
        />
      </div>
    </Paper>
  );
};

export default PostComments;
