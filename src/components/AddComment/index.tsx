import { Input, Button } from '@material-ui/core';
import { useState } from 'react';

import styles from './AddComment.module.scss';

const AddComment = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [input, setInput] = useState('');

  const onAddComment = (): void => {
    setInput('');
    setIsClicked(false);
  };

  return (
    <div className={styles.inputContainer}>
      <Input
        minRows={isClicked ? 5 : 1}
        onFocus={() => setIsClicked(true)}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        multiline
        className={styles.input}
        placeholder="Написать комментарий"
        fullWidth
      />
      {isClicked && (
        <Button
          disabled={!input}
          className={styles.button}
          variant="contained"
          color="primary"
          onClick={onAddComment}
        >
          Отправить
        </Button>
      )}
    </div>
  );
};

export default AddComment;
