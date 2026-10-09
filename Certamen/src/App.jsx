import { AppBar, Card, CardContent, CssBaseline, Toolbar, Typography } from '@mui/material';

import GuerreroForm from './components/GuerreroForm.jsx';

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between', gap: 2 }}>
          <Typography variant="h6" component="h1">
            Anillo Único
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'right' }}>
            Uno para dominarlos a todos
          </Typography>
        </Toolbar>
      </AppBar>
      <main className="container py-4">
        <div className="row gy-4">
          <section className="col-12" aria-labelledby="formulario-titulo">
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2" id="formulario-titulo">
                  Formulario de guerreros
                </Typography>
                <GuerreroForm />
              </CardContent>
            </Card>
          </section>
          <section className="col-12" aria-labelledby="tropas-titulo">
            <Typography variant="h5" component="h2" id="tropas-titulo">
              Tropas
            </Typography>
          </section>
        </div>
      </main>
    </>
  );
}
