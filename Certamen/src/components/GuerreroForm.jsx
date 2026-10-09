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

export default function GuerreroForm() {
  return (
    <form className="row g-3 mt-1" aria-labelledby="formulario-titulo">
      <div className="col-12 col-md-6">
        <TextField label="Nombre del Guerrero" name="nombre" fullWidth />
      </div>
      <div className="col-12 col-md-6">
        <FormControl>
          <FormLabel id="tipo-label">Tipo de Guerrero</FormLabel>
          <RadioGroup row aria-labelledby="tipo-label" name="tipo" defaultValue="Orco">
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
            defaultValue={1}
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
          <Select labelId="rango-label" name="rango" label="Categoría / Rango" defaultValue="Capitán">
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
          <Rating name="furia" aria-labelledby="furia-label" defaultValue={1} max={5} precision={1} />
        </FormControl>
      </div>
      <div className="col-12">
        <Button variant="contained" type="button">Registrar Guerrero</Button>
      </div>
    </form>
  );
}
