import { Button, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function GuerrerosTable({ guerreros, onDeleteGuerrero }) {
  return (
    <TableContainer sx={{ bgcolor: '#c5bbae', borderRadius: 1, border: '1px solid #ac9d80' }}>
      <Table aria-labelledby="tropas-titulo">
        <TableHead sx={{ bgcolor: '#302b29', '& .MuiTableCell-root': { color: '#c6b793', fontWeight: 600 } }}>
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
                <Button variant="outlined" sx={{ color: '#743b3b', borderColor: '#743b3b', '&:hover': { bgcolor: '#f0e1df', borderColor: '#5e3030' } }} onClick={() => onDeleteGuerrero(guerrero.id)}>
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
