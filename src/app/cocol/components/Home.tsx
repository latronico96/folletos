"use client";

import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import Header from "./Header";
import Footer from "./Footer";

const productos = [
  {
    titulo: 'Tortas de cumpleaños',
    descripcion: 'Personalizadas y a medida para cada ocasión.',
    imagen: 'https://plus.unsplash.com/premium_photo-1669725150530-06286223f652?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Cajas temáticas',
    descripcion: 'Desayunos y regalos para el Día del Padre, Madre y más.',
    imagen: 'https://plus.unsplash.com/premium_photo-1663013644564-f34ba6d12144?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Bizcochuelos y budines',
    descripcion: 'Ideales para acompañar el mate o el café.',
    imagen: 'https://images.unsplash.com/photo-1605466237773-ed648bb87197?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Mesa dulce para eventos',
    descripcion: 'Brownies, alfajores, cookies, sándwiches y más.',
    imagen: 'https://plus.unsplash.com/premium_photo-1663133730195-2ce4986a96b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Page() {
  return <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', }}>
      <Header />
      <Container maxWidth="md">
        <Box sx={{ py: 8, textAlign: 'center', flexGrow: 1 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                Bienvenidos a Cocol
            </Typography>
            <Typography variant="h6">
                Pastelería artesanal hecha con amor en La Plata 🍰
            </Typography>
            <Typography variant="body1" sx={{ mt: 3 }}>
                Celebramos la vida con dulzura: tortas, cajas temáticas, desayunos y mucho más.
            </Typography>
        </Box>
        <Container sx={{ py: 6 }}>
            <Typography variant="h4" textAlign="center" mb={4}>
            Lo que hacemos
            </Typography>
            <Grid container spacing={4} justifyContent="center">
            {productos.map((prod, index) => (
                <Grid key={index} size={{xs: 12, sm: 6, md: 3}}>
                  <Card sx={{ height: '100%' }}>
                      <CardMedia
                      component="img"
                      height="180"
                      image={prod.imagen}
                      alt={prod.titulo}
                      />
                      <CardContent>
                      <Typography variant="h6">{prod.titulo}</Typography>
                      <Typography variant="body2">{prod.descripcion}</Typography>
                      </CardContent>
                  </Card>
                </Grid>
            ))}
            </Grid>
        </Container>
        <Box sx={{ py: 6, textAlign: 'center' }}>
          <Typography variant="body1" mb={3}>
            En Cocol armamos toda la mesa dulce para vos: tortas, alfajores, mini postres, sándwiches y más. Hacemos todo con amor y a tu medida 💕
          </Typography>
          <Button variant="outlined" color="secondary" href="https://wa.me/9541136724619" target="_blank" >
            Pedí tu presupuesto por WhatsApp
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>;
}
