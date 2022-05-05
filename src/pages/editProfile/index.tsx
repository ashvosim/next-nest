import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from 'next';

import { TextField, Paper, Typography, Button } from '@material-ui/core';

import MainLayout from 'layouts/MainLayout';

import styles from './EditProfile.module.scss';

const EditProfile: NextPage = () => (
  <MainLayout hideComments>
    <Head>
      <title>Edit Profile</title>
    </Head>
    <div className={styles.editProfileContainer}>
      <Paper>
        <Typography variant="h5">Настройки профиля</Typography>
        <form>
          <TextField label="Имя" variant="outlined" required />
          <TextField label="Почта" variant="outlined" required />
          <TextField label="Пароль" variant="outlined" required />
          <div className={styles.buttonsContainer}>
            <Link href="/profile/1">
              <a>
                <Button variant="contained">Выйти</Button>
              </a>
            </Link>
            <Button type="submit" variant="contained" color="primary">
              Сохранить
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  </MainLayout>
);

export default EditProfile;
