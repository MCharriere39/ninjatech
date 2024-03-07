'use client';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'ingredient' | 'quantite' | 'preparation' | 'huile' | 'temperature' | 'tempsCuisson' | 'melanger';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'ingredient', label: 'INGREDIENT', minWidth: 170 },
  { id: 'quantite', label: 'QUANTITE', minWidth: 170 },
  { id: 'preparation', label: 'PREPARATION', minWidth: 170 },
  { id: 'huile', label: 'HUILE', minWidth: 170 },
  { id: 'temperature', label: 'TEMPERATURE', minWidth: 170 },
  { id: 'tempsCuisson', label: 'TEMPS DE CUISSON', minWidth: 170 },
  { id: 'melanger', label: 'MELANGER/RETOURNER LE CONTENU DANS LE PANIER', minWidth: 170 },

];

interface Data {
    ingredient: string;
    quantite: string;
    preparation: string;
    huile: string;
    temperature: string;
    tempsCuisson: string;
    melanger: string;
}

function createData(
    ingredient: string,
    quantite: string,
    preparation: string,
    huile: string,
    temperature: string,
    tempsCuisson: string,
    melanger: string,
): Data {
  return { ingredient, quantite, preparation, huile, temperature,tempsCuisson,melanger };
}

const rows = [
  createData('Asperge', '1 botte (250g)', 'Coupées en deux, sans tiges', '2 c.à.c.','200 °C','8-10 min.','A mi-cuisson'),
  createData('Asperge', '1 botte (250g)', 'Coupées en deux, sans tiges', '2 c.à.c.','200 °C','8-10 min.','A mi-cuisson'),
  createData('Asperge', '1 botte (250g)', 'Coupées en deux, sans tiges', '2 c.à.c.','200 °C','8-10 min.','A mi-cuisson'),
  createData('Asperge', '1 botte (250g)', 'Coupées en deux, sans tiges', '2 c.à.c.','200 °C','8-10 min.','A mi-cuisson'),
  createData('Asperge', '1 botte (250g)', 'Coupées en deux, sans tiges', '2 c.à.c.','200 °C','8-10 min.','A mi-cuisson'),
  createData('Asperge', '1 botte (250g)', 'Coupées en deux, sans tiges', '2 c.à.c.','200 °C','8-10 min.','A mi-cuisson'),
  createData('Asperge', '1 botte (250g)', 'Coupées en deux, sans tiges', '2 c.à.c.','200 °C','8-10 min.','A mi-cuisson'),
  createData('Asperge', '1 botte (250g)', 'Coupées en deux, sans tiges', '2 c.à.c.','200 °C','8-10 min.','A mi-cuisson'),
  createData('Asperge', '1 botte (250g)', 'Coupées en deux, sans tiges', '2 c.à.c.','200 °C','8-10 min.','A mi-cuisson'),
  createData('Asperge', '1 botte (250g)', 'Coupées en deux, sans tiges', '2 c.à.c.','200 °C','8-10 min.','A mi-cuisson'),
];

export default function StickyHeadTable(props:any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', margin: 'auto', marginTop: '2vh', border: `solid ${props.color} 2px`,marginBottom:"40px" }}>
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}