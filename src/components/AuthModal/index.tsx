import type { NextPage } from 'next';
import Link from 'next/link';
import { useFormik } from 'formik';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@material-ui/core';
import * as yup from 'yup';

import styles from './AuthModal.module.scss';

interface IAuthModal {
  visible: boolean;
  onClose: () => void;
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Почта введена не верно')
    .required('Почта обязательна'),
  password: yup
    .string()
    .min(8, 'Миниумум 16 символов')
    .max(16, 'Максимум 16 символов')
    .required('Пароль обязателен'),
});

const AuthModal: NextPage<IAuthModal> = ({ visible, onClose }) => {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <Dialog open={visible} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Вход</DialogTitle>
        <DialogContent className={styles.modalContainer}>
          <TextField
            name="email"
            value={values.email}
            error={!!errors.email}
            helperText={errors.email}
            onChange={handleChange}
            placeholder="Почта"
            required
          />
          <TextField
            name="password"
            value={values.password}
            error={!!errors.password}
            helperText={errors.password}
            onChange={handleChange}
            placeholder="Пароль"
            required
            type="password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Отмена</Button>
          <Link href="/profile/1">
            <a>
              <Button type="submit">Войти</Button>
            </a>
          </Link>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AuthModal;
