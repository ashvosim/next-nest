import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Divider,
} from '@material-ui/core';
import { Check, Search } from '@material-ui/icons';
import MainLayout from 'layouts/MainLayout';

import styles from './Subscribes.module.scss';

const Rating = () => (
  <MainLayout>
    <Paper className={styles.paperContainer}>
      <div className={styles.inputContainer}>
        <Search />
        <input placeholder="Поиск" />
      </div>
      <Divider />
      <Table className={styles.tableContainer}>
        <TableBody>
          <TableRow>
            <TableCell>Пользователь</TableCell>
            <TableCell style={{ width: 140 }}>100</TableCell>
            <TableCell style={{ width: 60 }} align="right">
              <Button variant="contained">
                <Check />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Пользователь</TableCell>
            <TableCell style={{ width: 140 }}>100</TableCell>
            <TableCell style={{ width: 60 }} align="right">
              <Button variant="contained">
                <Check />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </MainLayout>
);

export default Rating;
