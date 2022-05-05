import { useCallback, useState } from 'react';
import type { NextPage } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { Avatar, IconButton, Button, Paper } from '@material-ui/core';
import { AccountCircle, Menu, Notifications, Search } from '@material-ui/icons';

import AuthModal from 'components/AuthModal';

import logo from 'images/ninja.svg';

import styles from './Header.module.scss';

const Header: NextPage = () => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onModalClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const isAuth = false;
  return (
    <Paper classes={{ root: styles.root }}>
      <div>
        <IconButton>
          <Menu />
        </IconButton>
        <Link href="/">
          <a>
            <Image src={logo} alt="logo" width={50} height={50} />
          </a>
        </Link>
        <div className={styles.inputContainer}>
          <Search />
          <input placeholder="Поиск" />
        </div>
        <Link href="/write">
          <a>
            <Button variant="contained">Новая запись</Button>
          </a>
        </Link>
      </div>
      <div>
        <IconButton>
          <Notifications />
        </IconButton>
        {isAuth ? (
          <IconButton>
            <Link href="/profile/1">
              <a>
                <Avatar src="https://leonardo.osnova.io/2bf4b46c-ae6a-50b1-91d4-de5f078ff28d/-/scale_crop/300x300/-/format/webp/" />
              </a>
            </Link>
          </IconButton>
        ) : (
          <div
            role="presentation"
            className={styles.authContainer}
            onClick={() => setIsAuthModal(true)}
          >
            <AccountCircle />
            <p>Войти</p>
          </div>
        )}
      </div>
      <AuthModal visible={isAuthModal} onClose={onModalClose} />
    </Paper>
  );
};

export default Header;
