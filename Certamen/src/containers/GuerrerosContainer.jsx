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

  return (
    <div className="row gy-4">
      <section className="col-12" aria-labelledby="formulario-titulo">
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" id="formulario-titulo">
              Formulario de guerreros
            </Typography>
            <GuerreroForm onCreateGuerrero={crearGuerrero} />
          </CardContent>
        </Card>
      </section>
      <section className="col-12" aria-labelledby="tropas-titulo">
        <Typography variant="h5" component="h2" id="tropas-titulo">
          Tropas
        </Typography>
        <GuerrerosTable guerreros={guerreros} />
      </section>
    </div>
  );
}
