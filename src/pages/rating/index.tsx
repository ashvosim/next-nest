import { ChangeEvent, useState } from 'react';
import type { NextPage } from 'next';

import {
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Typography,
  Button,
} from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';

import MainLayout from 'layouts/MainLayout';

import styles from './Rating.module.scss';

const Rating: NextPage = () => {
  const [tabPage, setTabPage] = useState('month');
  const onChange = (event: ChangeEvent<{}>, newValue: string): void => {
    setTabPage(newValue);
  };
  return (
    <MainLayout>
      <Paper className={styles.paperContainer}>
        <Typography variant="h5" className={styles.title}>
          Рейтинг сообществ и блогов
        </Typography>
        <Typography variant="subtitle1">
          Десять лучших авторов и комментаторов, а также администраторы первых
          десяти сообществ из рейтинга по итогам месяца бесплатно получают
          Plus-аккаунт на месяц.
        </Typography>
        <Tabs indicatorColor="primary" value={tabPage} onChange={onChange}>
          <Tab label="Февраль" value="month" />
          <Tab label="Последние 3 месяца" value="3month" />
          <Tab label="Полгода" value="halfYear" />
        </Tabs>
      </Paper>
      <Paper className={`${styles.paperContainer} ${styles.tableContainer}`}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Сообщества</TableCell>
              <TableCell style={{ width: 140 }}>Рейтинг</TableCell>
              <TableCell style={{ width: 60 }} align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>1</strong>
                Пользователь
              </TableCell>
              <TableCell style={{ width: 140 }}>100</TableCell>
              <TableCell style={{ width: 60 }} align="right">
                <Button variant="contained">
                  <PersonAdd />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
};

export default Rating;
