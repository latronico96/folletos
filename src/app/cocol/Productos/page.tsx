

import { Container,  Typography,  Box, Grid, Card, CardContent, CardMedia, } from '@mui/material';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page() {
    const productos = [
      {
        nombre: 'Torta de cumpleaños',
        descripcion: 'Decoración personalizada. ¡Consultanos por sabores!',
        precio: "4500",
        imagen: 'https://plus.unsplash.com/premium_photo-1669725150530-06286223f652?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        nombre: 'Torta de chocolate',
        descripcion: 'Bizcochuelo húmedo y cobertura de mousse.',
        precio: "4800",
        imagen: 'https://images.unsplash.com/photo-1722846047434-07c0fc7b1a71?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ];

    return <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', }}>
        <Header />
        <Container maxWidth="sm" sx={{ py: 8 }}>
            <Grid container spacing={4} justifyContent="center">
            {productos.map((art, index) => (
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
        <Footer />
    </Box>;
}
