import { Button, Input } from '@material-ui/core';
import dynamic from 'next/dynamic';

import styles from './WriteForm.module.scss';

const Editor = dynamic(() => import('../Editor'), {
  ssr: false,
});

const WriteForm = () => (
  <div className={styles.container}>
    <Input classes={{ root: styles.title }} placeholder="Заголовок" />
    <div className={styles.editorContainer}>
      <Editor />
    </div>
    <Button variant="contained" color="primary">
      Опубликовать
    </Button>
  </div>
);

export default WriteForm;
