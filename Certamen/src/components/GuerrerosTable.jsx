import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function GuerrerosTable({ guerreros }) {
  return (
    <TableContainer>
      <Table aria-labelledby="tropas-titulo">
        <TableHead>
          <TableRow>
            <TableCell>Nombre del Guerrero</TableCell>
            <TableCell>Tipo de Guerrero</TableCell>
            <TableCell>Categoría / Rango</TableCell>
            <TableCell>Nivel</TableCell>
            <TableCell>Clasificación</TableCell>
            <TableCell>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {guerreros.map((guerrero) => (
            <TableRow key={guerrero.id}>
              <TableCell>{guerrero.nombre}</TableCell>
              <TableCell>{guerrero.tipo}</TableCell>
              <TableCell>{guerrero.rango}</TableCell>
              <TableCell>{guerrero.combate}</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
