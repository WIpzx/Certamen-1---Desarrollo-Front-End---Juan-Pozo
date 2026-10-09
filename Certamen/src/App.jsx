import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';

import GuerrerosContainer from './containers/GuerrerosContainer.jsx';

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
        <GuerrerosContainer />
      </main>
    </>
  );
}
