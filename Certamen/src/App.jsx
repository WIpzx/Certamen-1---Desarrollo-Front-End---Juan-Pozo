import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';

import sauronEye from './assets/sauron-eye.png';
import GuerrerosContainer from './containers/GuerrerosContainer.jsx';

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" sx={{ bgcolor: '#242424', borderBottom: '2px solid #743b3b' }}>
        <Toolbar sx={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 50px minmax(0, 1fr)', gap: { xs: 1, sm: 2 }, py: 1 }}>
          <Typography variant="h6" component="h1" sx={{ color: '#baaa83', letterSpacing: 1 }}>
            Anillo Único
          </Typography>
          <img className="sauron-logo" src={sauronEye} alt="Ojo de Sauron" width="50" height="50" />
          <Typography variant="body1" sx={{ textAlign: 'right', color: '#e5e1d9' }}>
            Uno para dominarlos a todos
          </Typography>
        </Toolbar>
      </AppBar>
      <main className="container py-4">
        <GuerrerosContainer />
      </main>
    </>
  );
}
