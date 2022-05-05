import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from '@material-ui/core';
import { List, TrendingUp, Whatshot } from '@material-ui/icons';

import styles from './Menu.module.scss';

const menu = [
  { text: 'Лента', icon: <Whatshot />, path: '/' },
  { text: 'Рейтинг', icon: <TrendingUp />, path: '/rating' },
  { text: 'Подписки', icon: <List />, path: '/subscribes' },
];

const Menu: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.menuContainer}>
      <div>
        {menu.map(({ path, icon, text }) => (
          <Link href={path} key={path}>
            <a>
              <Button
                variant={router.pathname === path ? 'contained' : 'text'}
                startIcon={icon}
              >
                {text}
              </Button>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
