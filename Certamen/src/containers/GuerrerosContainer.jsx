import { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import GuerreroForm from '../components/GuerreroForm.jsx';
import GuerrerosTable from '../components/GuerrerosTable.jsx';

export default function GuerrerosContainer() {
  const [guerreros, setGuerreros] = useState([]);

  function crearGuerrero(guerrero) {
    const nuevoGuerrero = { ...guerrero, id: crypto.randomUUID() };
    setGuerreros((anteriores) => [...anteriores, nuevoGuerrero]);
  }

  function eliminarGuerrero(id) {
    setGuerreros((anteriores) => anteriores.filter((guerrero) => guerrero.id !== id));
  }

  return (
    <div className="row gy-4">
      <section className="col-12" aria-labelledby="formulario-titulo">
        <Card variant="outlined" sx={{ bgcolor: '#c5bbae', borderColor: '#ac9d80', borderTop: '4px solid #743b3b', '& .MuiSlider-root, & .MuiRadio-root.Mui-checked': { color: '#743b3b' }, '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#743b3b' }, '& .MuiInputLabel-root.Mui-focused, & .MuiFormLabel-root.Mui-focused': { color: '#743b3b' }, '& .MuiRating-root': { color: '#8d7950' } }}>
          <CardContent>
            <Typography variant="h5" component="h2" id="formulario-titulo" sx={{ color: '#352d28' }}>
              Formulario de guerreros
            </Typography>
            <GuerreroForm onCreateGuerrero={crearGuerrero} />
          </CardContent>
        </Card>
      </section>
      <section className="col-12" aria-labelledby="tropas-titulo">
        <Typography variant="h5" component="h2" id="tropas-titulo" sx={{ color: '#baaa83', mb: 2 }}>
          Tropas
        </Typography>
        <GuerrerosTable guerreros={guerreros} onDeleteGuerrero={eliminarGuerrero} />
      </section>
    </div>
  );
}
