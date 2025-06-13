'use client';

import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Fab,
  Link,
  Typography,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function FolletoCocol() {
  const articulos = [
    {
      nombre: 'Torta de cumpleaños',
      descripcion: 'Decoración personalizada. ¡Consultanos por sabores!',
      imagen: 'https://source.unsplash.com/featured/?birthday-cake',
      precio: 3500,
    },
    {
      nombre: 'Torta de chocolate',
      descripcion: 'Bizcochuelo húmedo y cobertura de mousse.',
      imagen: 'https://source.unsplash.com/featured/?chocolate-cake',
      precio: 4000,
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#fff8f5', minHeight: '100vh', height: '100vh' }}>
      <Box sx={{ bgcolor: '#ffe8e1', py: 4, textAlign: 'center' }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontSize: {
              xs: '1.8rem',
              sm: '2.2rem',
              md: '2.8rem',
              lg: '3.2rem',
            },
            fontWeight: 'bold',
          }}
        >
          Pastelería Artesanal Cocol
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: {
              xs: '1rem',
              sm: '1.2rem',
            },
            mx: 'auto',
            maxWidth: 600,
          }}
        >
          Tortas artesanales hechas con amor en La Plata 🍰
        </Typography>
      </Box>

      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {articulos.map((art, index) => (
            <Grid key={index} size={{xs: 12, sm: 6, md: 4}}>
              <Card sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    padding: '4px 8px',
                    borderRadius: 1,
                    fontWeight: 'bold',
                  }}
                >
                  ${art.precio}
                </Box>
                <CardMedia component="img" height="200" image={art.imagen} alt={art.nombre} />
                <CardContent>
                  <Typography variant="h6">{art.nombre}</Typography>
                  <Typography variant="body2">{art.descripcion}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: '#ffe8e1', textAlign: 'center', py: 3 }}>
        <Typography variant="body1">
          📩 Pedidos por Instagram:{' '}
          <Link href="https://instagram.com/cocol.pasteleria/" target="_blank">
            @cocol.pasteleria
          </Link>{' '}
          | WhatsApp: 11-3672-4619
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          &copy; 2025 Cocol - Pastelería Artesanal
        </Typography>
      </Box>

      <Fab
        color="success"
        aria-label="whatsapp"
        href="https://wa.me/1136724619"
        target="_blank"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          bgcolor: '#25D366',
          '&:hover': {
            bgcolor: '#1ebe5b',
          },
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Box>
  );
}
