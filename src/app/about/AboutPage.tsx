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

export default function AboutPage() {
  const articulos = [
    {
      nombre: 'Articulo 1',
      descripcion: 'Contar de que es el articulo, que hace, etc.',
      imagen: 'https://picsum.photos/200/300/?random=1&blur',
      precio: '1000',
    },
    {
      nombre: 'Articulo 2',
      descripcion: 'Contar de que es el articulo, que hace, etc.',
      imagen: 'https://picsum.photos/200/300/?random=2&blur',
      precio: '1500',
    },
    {
      nombre: 'Articulo 3',
      descripcion: 'Contar de que es el articulo, que hace, etc.',
      imagen: 'https://picsum.photos/200/300/?random=3&blur',
      precio: '2000',
    },
    {
      nombre: 'Articulo 4',
      descripcion: 'Contar de que es el articulo, que hace, etc.',
      imagen: 'https://picsum.photos/200/300/?random=4&blur',
      precio: '2500',
    },
    {
      nombre: 'Articulo 5',
      descripcion: 'Contar de que es el articulo, que hace, etc.',
      imagen: 'https://picsum.photos/200/300/?random=5&blur',
      precio: '3000',
    },
    {
      nombre: 'Articulo 6',
      descripcion: 'Contar de que es el articulo, que hace, etc.',
      imagen: 'https://picsum.photos/200/300/?random=6&blur',
      precio: '3500',
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#E6F2E9', minHeight: '100vh', height: '100vh' }}>
      <Box sx={{ bgcolor: '#A3D39C', py: 4, textAlign: 'center' }}>
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
          Nombre Del emprendimiento
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
          Descripcion de lo que es, lo que hace, donde está, etc. si quiere agregar como lo vende.
        </Typography>
      </Box>

      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {articulos.map((art, index) => (
            <Grid size={{xs: 12, sm:6, md: 4}} key={index}>
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
                <CardMedia
                  component="img"
                  height="200"
                  image={art.imagen}
                  alt={art.nombre}
                />
                <CardContent>
                  <Typography variant="h6">{art.nombre}</Typography>
                  <Typography variant="body2">{art.descripcion}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: '#A3D39C', textAlign: 'center', py: 3 }}>
        <Typography variant="body1">
          📩 Pedidos por Instagram:{' '}
          <Link href="https://instagram.com/perfil.falso/" target="_blank">
            @perfil.falso
          </Link>{' '}
          | WhatsApp: 221-XXX-XXXX
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          &copy; 2025 Nombre Del emprendimiento
        </Typography>
      </Box>

      <Fab
        color="success"
        aria-label="whatsapp"
        href="https://wa.me/11234567890"
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
