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
              src="/img/pastelera.jpg"
              sx={{ width: 200, height: 200, margin: 'auto' }}
            />
          </Grid>
          <Grid key={1} size={{xs: 12, md: 8}}>
            <Typography variant="h6" gutterBottom>
              Hola, soy Mariana, fundadora de Cocol 🍰
            </Typography>
            <Typography variant="body1" component={'p'}>
              Estudié pastelería en Mundo Pasteñ y desde entonces me enamoré del arte de transformar ingredientes simples en momentos inolvidables. Mi inspiración nace del deseo de compartir dulzura, calidez y detalles que alegren el día de cada persona.
            </Typography>
            <Typography variant="body1" component={'p'}>
              En Cocol hacemos tortas personalizadas, cajas temáticas para fechas especiales, mesas dulces para eventos y más. Todo artesanal, fresco, y hecho con mucho amor.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Footer />
  </Box>;
}
