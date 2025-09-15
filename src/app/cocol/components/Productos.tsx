"use client";

import { Container,  Typography,  Box, Grid, Card, CardContent, } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export type Producto = {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string[];
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
};

export default function Productos() {
    const productos: Producto[] = [
      {
        nombre: 'Torta de cumpleaños',
        descripcion: 'Decoración personalizada. ¡Consultanos por sabores!',
        precio: "",
        imagen: [
          'tortaButterCream.jpeg', "tortaButterCream1.jpeg",
          'tortaDegrade.jpeg', 'tortaDegrade1.jpeg', 'tortaDegrade1.jpeg',
          'tortaEstudiantes.jpeg', 'tortaEstudiantes1.jpeg', 'tortaEstudiantes2.jpeg', 'tortaEstudiantes3.jpeg', 
          'tortaLorenzo.jpeg', 'tortaLorenzo1.jpeg', 'tortaLorenzo2.jpeg', 'tortaLorenzo3.jpeg', 'tortaLorenzo4.jpeg', 
        ],
      },
      {
        nombre: 'Brownies',
        descripcion: 'Brownies de chocolate Amargo con chuipas de cocolates.',
        precio: "4800",
        imagen: ['brownies.jpeg'],
      },
      {
        nombre: 'Alfajores',
        descripcion: 'Alfajores de coco, maicena, alfacookies y tradiciones como estilo Habana.',
        precio: "4800",
        imagen: ['alfajorMaicena3.jpeg', 'alfajorDeCoco.jpeg', 'alfajorMaicena.jpeg', 'alfajorMaicena1.jpeg', 'alfajorMaicena2.jpeg'],
      },
      {
        nombre: 'Bizcochuelos',
        descripcion: 'Bizcochuelos esponja recomendables para que decores tus tortas.',
        precio: '',
        imagen: ['bizcochuelos.jpeg']
      },
      {
        nombre: 'Budines',
        descripcion: 'Budines de limon, vainilla, naranja, chocolate, con o sin chispas.',
        precio: '',
        imagen: ['budin1.jpeg', 'budin2.jpeg', 'budin3.jpeg', 'budin4.jpeg', 'budin5.jpeg', 'budin6.jpeg', 'budin7.jpeg', 'budines.jpeg']
      },
      {
        nombre: 'Promo budin con Alfajores',
        descripcion: 'Budin de chocolate o vainilla con 4 alfajores de dulce de leche bañados con chocolates.',
        precio: '',
        imagen: ['budinAlfacookies.jpeg', 'budinAlfacookies1.jpeg', 'budinAlfacookies2.jpeg', ]
      },
      {
        nombre: 'Chipas',
        descripcion: 'Bolsa de un cuardo de chipas.',
        precio: '',
        imagen: ['chipas.jpeg', 'chipas1.jpeg']
      },
      {
        nombre: 'Lemonies',
        descripcion: 'Como bronies pero de limon.',
        precio: '',
        imagen: ['lemonies.jpeg', 'lemonies1.jpeg']
      },
      {
        nombre: 'Lemonpies',
        descripcion: 'Lemon pies de 20cm',
        precio: '',
        imagen: ['lemonPies.jpeg']
      },
      {
        nombre: 'Masas Finas',
        descripcion: 'Masas fina rellenas',
        precio: '',
        imagen: ['MasaFinas.jpeg', 'MasaFinas1.jpeg']
      },
      {
        nombre: 'Pastafrola',
        descripcion: 'Pastafrila de 20cm de dulce de membrillo, dulce de batata o dulce de leche.',
        precio: '',
        imagen: ['pastaFrola.jpeg', 'pastaFrola1.jpeg', 'pastaFrola2.jpeg', 'pastaFrola3.jpeg', 'pastaFrola4.jpeg', 'pastaFrola5.jpeg', 'pastaFrola6.jpeg', 'pastaFrola7.jpeg', ]
      }
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
                    <Box sx={{ my: 2 }}>
                    <Slider {...settings}>
                        {art.imagen.map((src, i) => (
                        <Box
                            key={i}
                            sx={{
                            position: 'relative',
                            width: '100%',
                            pt: '177.78%', // 9:16
                            borderRadius: 1,
                            overflow: 'hidden',   
                            }}
                        >
                            <Box
                            component="img"
                            src={`/fotos/${src}`}
                            alt={`imagen-${i}`}
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            />
                        </Box>
                        ))}
                    </Slider>
                    </Box>

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
