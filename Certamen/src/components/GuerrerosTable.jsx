import { Button, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function GuerrerosTable({ guerreros, onDeleteGuerrero }) {
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
              <TableCell>
                <Chip label={guerrero.tipo} color={guerrero.tipo === 'Orco' ? 'success' : 'error'} />
              </TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => onDeleteGuerrero(guerrero.id)}>
                  Asesinado por la aparición
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
