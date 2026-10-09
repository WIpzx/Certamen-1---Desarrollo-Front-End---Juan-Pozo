import { useState } from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Slider,
  TextField,
} from '@mui/material';

export default function GuerreroForm({ onCreateGuerrero }) {
  const [formulario, setFormulario] = useState({
    nombre: '',
    tipo: 'Orco',
    combate: 1,
    rango: 'Capitán',
    furia: 1,
  });

  function actualizarCampo(campo, valor) {
    setFormulario((anterior) => ({ ...anterior, [campo]: valor }));
  }

  function registrarGuerrero(event) {
    event.preventDefault();
    onCreateGuerrero({ ...formulario });
  }

  return (
    <form className="row g-3 mt-1" aria-labelledby="formulario-titulo" onSubmit={registrarGuerrero}>
      <div className="col-12 col-md-6">
        <TextField label="Nombre del Guerrero" name="nombre" value={formulario.nombre} onChange={(event) => actualizarCampo('nombre', event.target.value)} fullWidth />
      </div>
      <div className="col-12 col-md-6">
        <FormControl>
          <FormLabel id="tipo-label">Tipo de Guerrero</FormLabel>
          <RadioGroup row aria-labelledby="tipo-label" name="tipo" value={formulario.tipo} onChange={(event) => actualizarCampo('tipo', event.target.value)}>
            <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
            <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="col-12 col-md-6">
        <FormControl fullWidth>
          <FormLabel id="combate-label">Nivel de Combate</FormLabel>
          <Slider
            name="combate"
            aria-labelledby="combate-label"
            value={formulario.combate}
            onChange={(_, valor) => actualizarCampo('combate', valor)}
            min={1}
            max={100}
            step={1}
            valueLabelDisplay="auto"
          />
        </FormControl>
      </div>
      <div className="col-12 col-md-6">
        <FormControl fullWidth>
          <InputLabel id="rango-label">Categoría / Rango</InputLabel>
          <Select labelId="rango-label" name="rango" label="Categoría / Rango" value={formulario.rango} onChange={(event) => actualizarCampo('rango', event.target.value)}>
            <MenuItem value="Capitán">Capitán</MenuItem>
            <MenuItem value="Berserker">Berserker</MenuItem>
            <MenuItem value="Explorador">Explorador</MenuItem>
            <MenuItem value="Asediador">Asediador</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="col-12">
        <FormControl>
          <FormLabel id="furia-label">Nivel de Amenaza / Furia</FormLabel>
          <Rating name="furia" aria-labelledby="furia-label" value={formulario.furia} onChange={(_, valor) => actualizarCampo('furia', valor || 1)} max={5} precision={1} />
        </FormControl>
      </div>
      <div className="col-12">
        <Button variant="contained" type="submit">Registrar Guerrero</Button>
      </div>
    </form>
  );
}
