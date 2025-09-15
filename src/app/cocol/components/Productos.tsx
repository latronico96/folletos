"use client";

import { useState } from "react";
import { Container,  Typography,  Box, Grid, Card, CardContent, Dialog, DialogTitle, DialogContent, IconButton, } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import CloseIcon from "@mui/icons-material/Close";

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
        nombre: 'Cokies',
        descripcion: '🍪💞',
        precio: "",
        imagen: [
          '1.jpg', 
        ],
      },
      {
        nombre: 'AlfaCokies',
        descripcion: 'Alfacookies una cookie pero con onda!😎🍪😋',
        precio: "",
        imagen: [
          '2.jpg', 
        ],
      },
      {
        nombre: 'Chipas',
        descripcion: 'Holaaa! Feliz viernes!' +
          'Se vino el fresquito y acá inaguramos la temporada de chipas, recién salidos del horno! Decime si no te tienta para acompañar con unos ricos mates? Una verdadera delicia. ' +
          '📱Hace tu pedido al ' +
          '1136724619. ' +
          '📍Av 122 entre 37 y 38 La plata',
        precio: "",
        imagen: [
          '3.1.jpg', 
          '3.2.jpg', 
        ],
      },
      {
        nombre: 'Pasta Frola',
        descripcion: 'Hola!! Feliz comienzo de semana! ' +
          'Lunes, Acá traemos nuestra PASTA FROLA, tenemos nuestra versión con coco y sin. Para todos los gustos ❤️😋' +
          'Tmb podes pedirla de batata ! ✨',
        precio: "",
        imagen: [
          '4.1.jpg', 
          '4.2.jpg',
          '4.3.jpg',
          '4.4.jpg',
          '4.5.jpg',
          '4.6.jpg',
        ],
      },
      {
        nombre: 'Alfajores de coco',
        descripcion: 'ALFAJORES DE COCO, una delicia que no podes dejar de probar',
        precio: "",
        imagen: [
          '5.1.jpg', 
          '5.2.jpg',
          '5.3.jpg',
        ],
      },
      {
        nombre: 'Galletitas de Sablée',
        descripcion: 'Galletitas de Masa Sablée vainilla y chocolate con decoración en choco blanco y negro 🍫☕🧉❤️' +
          '#masasablée #galletitasdecoradas',
        precio: "",
        imagen: [
          '6.1.jpg', 
          '6.2.jpg',
          '6.3.jpg',
          '6.4.jpg',
          '6.5.jpg',
        ],
      },
      {
        nombre: 'Desayunos para Mamá',
        descripcion: 'Gracias a todas las personas que confiaron en mí trabajo para mimar a papá, totalmente agradecida y feliz por todo el trabajo que tuve estos días. ' +
          ' espero que hayan disfrutado el día del padre con algo rico hecho con mucho amor🙌🏻💕🦋✨',
        precio: "",
        imagen: [
          '7.1.jpg', 
          '7.2.jpg',
          '7.3.jpg',
          '7.4.jpg',
          '7.5.jpg',
          '7.6.jpg',
          '7.7.jpg',
          '7.8.jpg',
          '7.9.jpg',
        ],
      },
      {
        nombre: 'Lemon Pie',
        descripcion: 'Buenas tardes para todos' +
          'Lemon pie 24 cm 🍋✨ con la frescura del limón y la dulzura de un merengue italiano que no podés dejar de probar!' +
          'Estoy tomando pedidos✍🏻 Para este finde! ' +
          'para una rica merienda o porque no para algún festejo!' +
          'Pedidos por Whatsapp link, o a través de MD.' +
          'Buen jueves para todos! ❣️🙌🏻',
        precio: "",
        imagen: [
          '8.1.jpg', 
          '8.2.jpg',
          '8.3.jpg',
          '8.4.jpg',
        ],
      },
      {
        nombre: 'TORTA DEGRADE',
        descripcion: 'TORTA DEGRADE en tonos rosas.' +
          'Les muestro un poco de mi trabajo realizado en el día de hoy.' +
          'La base es un bizcochuelo de vainilla con relleno de dulce de leche. Y se cubre con una suave ganache de chocolate blanco.' +
          'Toda la decoración está hecha a mano. Con pasta de goma. las rosas blancas y las hojas .😍 🫶🏻' +
          'Está torta es perfecta para cualquier ocasión especial.. Espero que lo disfruten tanto como yo lo hice al hacerlo❤️' +
          '#tortas #floresenpastadegoma🌸🏵️🌺 #pasteleriacreativa #ganachecake #dulcedeleche #instafood',
        precio: "",
        imagen: [
          '9.1.jpg', 
          '9.2.jpg',
          '9.3.jpg',
          '9.4.jpg',
          '9.5.jpg',
        ],
      },
      {
        nombre: 'Box Navideño',
        descripcion: '🎄BOX NAVIDEÑO🎄' +
          'Está época del año es la más divertida y esperada para los peques de la familia 😍 y que mejor que expresen su creatividad ✨con este box que contiene:' +
          '🍪6 Cookies de masa sablee' +
          '3 Mangas de glase real de 50gr cada una' +
          '2 Pack de granas de 20gr cada una' +
          'El valor es de $10.000' +
          'Estamos tomando pedidos con 24hs de anticipación!' +
          '#cookies #navidad #papanoel #glasereal ' +
          '#cajanavideña #feliznavidad',
        precio: "",
        imagen: [
          '10.1.jpg', 
          '10.2.jpg',
        ],
      },
      {
        nombre: 'Pan Dulce',
        descripcion: '🎄✨ LLEGO EL PAN DULCE ARTESANAL✨🎄' +
          'Sin dudas lo más rico de la mesa navideña y lo más discutido🤭...' +
          'Con fruta abrillantada? Con chips?' +
          'ACA EN COCOL TENEMOS PARA TODOS LOS GUSTOS 🙂‍↔' +
          'De: 1kg 1/2kg 1/4kg' +
          '✨️Solo : $9000 $6000 $2300' +
          '✨Chispas : $13000 $8500 $4600' +
          '✨Frutas : $13600 $8600 $4600' +
          'No dudes en agregarle el baño de Chocolate o Glase por $500' +
          '🎄✨️DATAZO: Podes armarlo como más te guste, con chips de choco, frutas abrillantadas, solo.' +
          'Arriba podes elegir baño de choco o glasé como más te guste. 😍' +
          'RECORDA QUE LOS PEDIDOS SE TOMAN CON 24 HS DE ANTICIPACIÓN 💌',
        precio: "",
        imagen: [
          '11.1.jpg', 
          '11.2.jpg',
          '11.4.jpg',
          '11.5.jpg',
        ],
      },
      {
        nombre: 'Chispas Sin Tacc',
        descripcion: 'Los chipá más ricos están en Cocol!' +
          'Crujientes por fuera, suaves por dentro y con ese sabor irresistible a queso.' +
          'adictivos te lo aseguro.' +
          'Ideales para acompañar con unos ricos mates.' +
          'Hace tu pedido por mensaje directo o al WhatsApp que está en la bio. ¡Recién horneados y con mucho amor!' +
          '#CocolPastelería #ChipáCasero #MeriendaRica #ViandasCocol #SaboresQueConectan',
        precio: "",
        imagen: [
          '12.1.jpg', 
          '12.2.jpg',
          '12.3.jpg',
        ],
      },
      {
        nombre: 'Desayuno para Papá',
        descripcion: 'Desayuno para Papá – Hecho con amor por Cocol 💙' +
          '🧁 Opción 1 – Desayuno Completo para compartir ❣️👌🏻' +
          'Infusiones: té, café y jugo exprimido de naranja' +
          'Mini cake de 12 cm (vainilla con dulce de leche, decorada con buttercream)' +
          '2 scones de queso' +
          '2 alfa cookies' +
          '2 alfajorcitos de masa sablé con azúcar impalpable' +
          '1 pasta frola de membrillo' +
          '🎁 Presentado con caja decorada, cinta y tarjetita personalizada' +
          '💰 $25.000' +
          'Opción 2 – torta sola. (12 cm)' +
          'Bizcochuelo de vainilla con relleno de dulce de leche' +
          'Cobertura en buttercream' +
          'Decoración temática para papá' +
          '💰 $13.000' +
          'Con caja y stickers alusivos al día' +
          '📍 Entrega en zona, barrio hipodromo 122 y 38.' +
          '📱 Pedidos por mensaje directo o Whatssap link⤴️' +
          '📅 Reservá con anticipación hasta el 13/06/25 – Cupos limitados',
        precio: "",
        imagen: [
          '13.1.jpg', 
          '13.2.jpg',
          '13.3.jpg',
          '13.4.jpg',
        ],
      },
      {
        nombre: 'Cookies XL',
        descripcion: '🍪✨ ¡Llegaron las COOKIES XL de Cocol!' +
          'Súper rellenas, blanditas por dentro crocantes por fuera 😍' +
          '💥 Sabores :' +
          'Chips de chocolate semi amargo 🍫' +
          'Rocklets con baño de chocolate blanco 🍭' +
          'Oreo + Nutcream 🍪' +
          '🎁 Caja x3 cookies surtidas: $6.800' +
          '🎁 Caja x6 (2 de cada una): $14 000' +
          '🧁 También por unidad desde $3500' +
          '📍 Entrega por la zona (Barrio Hipódromo)' +
          '🔎 Consultar por demás puntos de entrega' +
          '⏰ Pedilas con anticipación porque vuelan' +
          '#cookies🍪,#cookiesofinstagram' +
          '#pasteleriaartesanal',
        precio: "",
        imagen: [
          '14.1.jpg', 
          '14.2.jpg',
          '14.3.jpg',
          '14.4.jpg',
          '14.5.jpg',
          '14.6.jpg',
          '14.7.jpg',
        ],
      },
      {
        nombre: 'Budin De Naranja',
        descripcion: '🍊❄️ Un mimo para estos días fríos: Budín de naranja casero con glasé 🍊' +
          'Perfecto para acompañar unos mates o un té 🧉☕' +
          'Realizamos pedidos con anticipación como siempre' +
          '📩 Pedidos por mensaje directo, o en el link del perfil ❤️',
        precio: "",
        imagen: [
          '15.1.jpg', 
          '15.2.jpg',
        ],
      },
      {
        nombre: 'Budín Hamburgues',
        descripcion: '🍫✨ Budín Hamburgues artesanal' +
          'Húmedo, esponjoso y con el sabor perfecto para acompañar tus meriendas y desayunos.' +
          '💛 Con chips de chocolate, nueces crocantes y un baño de chocolate.' +
          '📩 Pedidos por mensaje directo o link de WhatsApp ⤴️' +
          '📍 Hecho con amor en Cocol Pastelería Artesanal' +
          '📆 ¡Encargalo con anticipación y disfrutalo cuando quieras!',
        precio: "",
        imagen: [
          '16.1.jpg', 
          '16.2.jpg',
        ],
      },
      {
        nombre: 'Bizcochuelo de chocolate',
        descripcion: '🍫🍒 ¡Amantes del chocolate, esta es para ustedes!' +
          'Presentamos nuestra versión artesanal de la Selva Negra:' +
          '💛 Bizcochuelo de chocolate súper esponjoso' +
          '💛 Relleno de crema chantilly, dulce de leche y frutos rojos.' +
          '💛 Virutas de chocolate' +
          'Ideal para sorprender o darte un gustito ✨' +
          'Hacemos por pedido con 2 días de anticipación.' +
          '📍 Zona barrio hipódromo' +
          '📩 Pedidos por mensaje o link de WhatsApp⤴️',
        precio: "",
        imagen: [
          '17.1.jpg', 
          '17.2.jpg',
        ],
      },,
      {
        nombre: 'Lingote Red Velvet',
        descripcion: '🌹Red Velvet en formato lingote ✨' +
          'Bizcocho rojo aterciopelado con suave crema de queso, decorado con frambuesas.' +
          'Ideal para eventos, regalos o como postre' +
          '🎂 También disponible en formato torta personalizada...' +
          'Consultame por más opciones. 🎀' +
          '#RedVelvet #LingoteGourmet #CocolPastelería #redvelvetcake❤️ #TortasPorEncargo',
        precio: "",
        imagen: [
          '18.1.jpg', 
          '18.2.jpg', 
          '18.3.jpg',
        ],
      },
    ];

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<Producto | null>(null);

    const handleOpen = (producto: Producto) => {
      setSelected(producto);
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
      setSelected(null);
    };


    return <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', }}>
        <Header />
        <Container maxWidth="sm" sx={{ py: 8 }}>
            <Grid container spacing={4} justifyContent="center">
            {productos.slice().reverse().map((art, index) => (
                <Grid key={index} size={{xs: 12, sm: 6, md: 4}}>
                  <Card
                    sx={{ position: "relative", cursor: "pointer" }}
                    onClick={() => handleOpen(art)}
                  >
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
                      <Slider {...{ ...settings, infinite: art.imagen.length > 1 }}>
                        {art.imagen.map((src, i) => (
                        <Box
                            key={i}
                            sx={{
                            position: 'relative',
                            width: '100%',
                            pt: '100%', // 1:16
                            borderRadius: 1,
                            overflow: 'hidden',   
                            }}
                        >
                            <Box
                            component="img"
                            src={`/posts/${src}`}
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
                      <Typography variant="body2" sx={{display: 'none'}}>{art.descripcion}</Typography>
                    </CardContent>
                </Card>
                </Grid>
            ))}
            </Grid>
        </Container>
        <Footer />
        {/* Modal con carrusel */}
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ m: 0, p: 2 }}>
            {selected?.nombre}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            {selected && (
              <>
                <Slider
                  {...{ ...settings, infinite: selected.imagen.length > 1 }}
                >
                  {selected.imagen.map((src, i) => (
                    <Box
                      key={i}
                      sx={{
                        position: "relative",
                        width: "100%",
                        pt: "75%", // relación 4:3
                        borderRadius: 1,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        component="img"
                        src={`/posts/${src}`}
                        alt={`imagen-${i}`}
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          backgroundColor: "#000",
                        }}
                      />
                    </Box>
                  ))}
                </Slider>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {selected.descripcion}
                </Typography>
              </>
            )}
          </DialogContent>
        </Dialog>
    </Box>;
}
