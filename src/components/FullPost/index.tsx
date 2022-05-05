import type { NextPage } from 'next';
import Image from 'next/image';

import { Paper, Typography, IconButton, Button } from '@material-ui/core';
import {
  BookmarksOutlined,
  PersonAdd,
  ShareOutlined,
} from '@material-ui/icons';

import styles from './FullPost.module.scss';

const FullPost: NextPage = () => (
  <Paper className={styles.paperContainer}>
    <Typography variant="h5" className={styles.title}>
      Глаза фигурам на картине ученицы Малевича за 75 млн рублей пририсовал
      охранник «Ельцин Центра». Он работал первый день
    </Typography>
    <Typography variant="body1">
      Дроздов отметил, что 60-летний охранник испортил полотно в первый день
      работы. Он пририсовал глаза фигурам фирменной ручкой «Ельцин Центра».
      Почему он это сделал, сотрудники музея не знают: они предположили, что у
      мужчины произошло «помутнение рассудка». После порчи картины охранник
      пришёл домой и несколько дней не отвечал на звонки из музея, «поскольку
      очень переживал» из-за произошедшего.
    </Typography>
    <Typography variant="body1">
      Фигурам на картине Лепорской пририсовали глазки 7 декабря 2021 года.
      Реставрацию полотна, которое привезли в «Ельцин Центр» из Третьяковской
      галереи, оценили в 250 тысяч рублей. Сумму выплатила страховая компания.
      Первоначально полиция отказывалась возбуждать уголовное дело, посчитав,
      что «картина своих свойств не утратила». После жалобы Министерства
      культуры в Генпрокуратуру правоохранители возбудили уголовное дело.
    </Typography>
    <ul className={styles.actions}>
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
    <div className={styles.userContainer}>
      <Image
        src="https://leonardo.osnova.io/2bf4b46c-ae6a-50b1-91d4-de5f078ff28d/-/scale_crop/300x300/-/format/webp/"
        height={40}
        width={40}
      />
      <div>
        <Typography variant="h6" className={styles.title}>
          аш восем
        </Typography>
        <Typography variant="subtitle1">
          вот и юмореска // заходите в инсту
        </Typography>
      </div>
      <Button color="primary" variant="contained">
        <PersonAdd />
        Подписаться
      </Button>
    </div>
  </Paper>
);

export default FullPost;
