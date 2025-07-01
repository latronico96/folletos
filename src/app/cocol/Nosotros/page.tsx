import { Box, Typography, Container, Grid, Avatar } from '@mui/material';
import Footer from '../components/Footer';
import Headers from '../components/Header';

export default function Page() {
  return <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', }}>
    <Headers />
    <Box sx={{ py: 6, flexGrow: 1 }}>
      <Container maxWidth="md">
        <Typography variant="h4" textAlign="center" gutterBottom>
          Sobre Cocol
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid key={0} size={{xs: 12, md: 4}}>
            <Avatar
              alt="Foto de la pastelera"
              src="/fotoCocinera.jpg"
              sx={{ width: 200, height: 200, margin: 'auto' }}
            />
          </Grid>
          <Grid key={1} size={{xs: 12, md: 8}}>
            <Typography variant="h6" gutterBottom>
                  Hola, soy Sofi, la creadora de Cocol
            </Typography>
            <Typography variant="body1" component={'p'}>
              Soy pastelera formada en Mundo Pastel, pero mi verdadera escuela fue la cocina de mi abuela, donde descubrí que la pastelería es mucho más que recetas: es una forma de dar amor. Cocol nació de ese recuerdo, de ese apodo que me marcó, y de las ganas de llenar la vida de otros con momentos dulces.
            </Typography>
            <Typography variant="body1" component={'p'}>
              En Cocol creamos tortas personalizadas, cajas temáticas para regalar, viandas caseras, mesas dulces y más. Cada detalle está pensado con dedicación, todo es artesanal y fresco, hecho con ingredientes reales y el corazón puesto en cada entrega.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Footer />
  </Box>;
}
