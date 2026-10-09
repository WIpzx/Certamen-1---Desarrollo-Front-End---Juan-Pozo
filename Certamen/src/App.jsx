import { Card, CardContent, CssBaseline, Typography } from '@mui/material';

export default function App() {
  return (
    <>
      <CssBaseline />
      <main className="container py-4">
        <div className="row">
          <div className="col-12">
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h1">
                  Proyecto React + Material UI listo
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  Sustituye este contenido por los módulos que solicite el enunciado.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
