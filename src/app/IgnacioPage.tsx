'use client';

import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Fab,
  Link,
  Typography,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function IgnacioPage() {
  const planes = [
    {
      nombre: 'Básico',
      armado: "$8000",
      mantenimiento: "$2000",
      descripcion: `
        <strong>Ideal para empezar</strong><br/><br/>
        ✅ Hasta <strong>12 productos</strong><br/>
        ✅ Imagen, descripción y precio<br/>
        ✅ Adaptado a celular y PC<br/>
        ✅ Diseño limpio y atractivo. Al cual lo podes personalizar a tu gusto.<br/>
        ✅ <em>Mantenimiento mensual opcional:</em> incluye hasta 10 cambios simples (precio, foto o texto)
      `,
      recomendacion: 'Recomendado para emprendimientos nuevos o catálogos de prueba.',
      link: '/about',
    },
    {
      nombre: 'Estándar',
      armado: "$15000",
      mantenimiento: "$4000",
      descripcion: `
        <strong>Para quienes quieren destacarse y crecer</strong><br/><br/>
        ✅ Hasta <strong>21 productos</strong><br/>
        ✅ Diseño personalizado (colores, logo, portada)<br/>
        ✅ Plantillas y diseños para redes sociales (Instagram, historias)<br/>
        ✅ Cambios ilimitados en precios, fotos y textos<br/>
        ✅ Optimización avanzada para celulares y tabletas<br/>
        ✅ Soporte prioritario vía WhatsApp<br/>
        ✅ Botón de contacto directo con WhatsApp
      `,
      recomendacion: 'Recomendado para quienes quieren mejorar su imagen y vender más sin complicarse.',
      link: '',
    },
    {
      nombre: 'A tu Medida',
      armado: "A convenir",
      mantenimiento: "",
      descripcion: `
        <strong>Solución full personalizada para marcas que quieren crecer a lo grande</strong><br/><br/>
        ✅ Hasta <strong>100 productos</strong><br/>
        ✅ Página web completa y 100% a medida con secciones, galerias, blog y/o tienda<br/>
        ✅ Diseños profesionales para redes sociales (posts, historias, banners)<br/>
        ✅ Dominio personalizado (.com.ar) y correo profesional<br/>
        ✅ SEO avanzado para mejorar visibilidad en buscadores<br/>
        ✅ Mantenimiento completo y soporte dedicado sin límite de cambios<br/>
        ✅ Análisis mensual del tráfico y recomendaciones para mejorar ventas
      `,
      recomendacion: 'Recomendado para marcas consolidadas o con alto volumen de ventas en redes sociales.',
      link: '',
    },
  ];


  function PlanCard({ plan }: { plan: { nombre: string; armado: string; mantenimiento: string; descripcion: string; recomendacion: string; link: string } }) {
    return (
      <Card
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(8px)',
          borderRadius: 5,
          boxShadow: '0 4px 12px rgba(255, 255, 255, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          color: '#0d3b56',
        }}
      >
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 0 }}>
          <Box
            sx={{
              width: '100%',
              height: 40,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '5px 5px 0 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6">{plan.nombre}</Typography>
          </Box> 
          <Box
            sx={{
              width: '100%',
              borderRadius: '5px 5px 0 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexFlow: 'column',
              px: 2,
            }}
          >
            <Typography
              variant="body2"
              component="div"
              sx={{ mt: 1, flexGrow: 1 }}
              dangerouslySetInnerHTML={{ __html: plan.descripcion }}
            />
            {plan.mantenimiento && 
              <Typography variant="body1" sx={{ mt: 2, textAlign: 'left', width: '100%' }}>
                <strong>Armado:</strong> {plan.armado}
                <br />
                <strong>Mantenimiento mensual: </strong> {plan.mantenimiento}
              </Typography>
            }
            {!plan.mantenimiento && <>
              <Typography variant="body1" sx={{ mt: 2, textAlign: 'left', width: '100%'  }}>
                <strong>Consulta El tiempo de desarrollo y precio a convenir.</strong>
              </Typography>
            </>}
            <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
              {plan.recomendacion}
            </Typography>
            { plan.link && (
              <Link href={plan.link} underline="hover" sx={{ mt: 2 }}>Ver ejemplo</Link>)
            }
          </Box>  
        </CardContent>
      </Card>
    );
  }
  return (
    <Box sx={{
        backgroundColor: '#5390BA',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg fill-opacity='0.66'%3E%3Ccircle fill='%235390BA' cx='50' cy='0' r='50'/%3E%3Cg fill='%235793bd' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%235b96c1' cx='50' cy='100' r='50'/%3E%3Cg fill='%235e99c4' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23629bc8' cx='50' cy='200' r='50'/%3E%3Cg fill='%23669ecb' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%236aa1cf' cx='50' cy='300' r='50'/%3E%3Cg fill='%236ea4d2' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%2371a7d6' cx='50' cy='400' r='50'/%3E%3Cg fill='%2375aad9' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%2379addd' cx='50' cy='500' r='50'/%3E%3Cg fill='%237dafe0' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%2381b2e3' cx='50' cy='600' r='50'/%3E%3Cg fill='%2384b5e7' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%2388b8ea' cx='50' cy='700' r='50'/%3E%3Cg fill='%238cbbee' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%2390bef1' cx='50' cy='800' r='50'/%3E%3Cg fill='%2394c0f5' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%2397c3f8' cx='50' cy='900' r='50'/%3E%3Cg fill='%239bc6fc' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%239FC9FF' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat-x',
        color: '#0d3b56',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Box sx={{
        py: 2,
        textAlign: 'center',
        backgroundColor: "#9bd1e5",
        color: '#0d3b56',
      }}>
        <Typography
          variant="h3"
          component="h1"
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
          Catalogo para emprendedores
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 800, mx: 'auto', px: 2, py: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: {
              xs: '1rem',
              sm: '1.2rem',
            },
            mx: 'auto',
            maxWidth: 600,
            textAlign: 'justify', // <- Aquí aplicamos justificación
          }}
        >
          Se ofrecen catálogos digitales pensados para emprendedores que quieren mostrar sus productos de forma sencilla, atractiva y profesional.<br/><br/>
          Están diseñados para adaptarse a cualquier dispositivo (PC, celular) y permiten personalizar tu catálogo en segundos. Ideal para publicar tus productos sin compartir siempre lo mismo.<br/>
        </Typography>
      </Box>

      <Container sx={{ py: 0 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
          {planes.map((plan) => (
            <Grid size={{xs: 12, sm: 6, md:4}} key={plan.nombre} sx={{ display: 'flex', mb: 2 }}>
              <PlanCard plan={plan} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{
        textAlign: 'center',
      }}>
        <Typography variant="body1">
          📩 Pedidos por Instagram:{' '}
          <Link href="https://instagram.com/NOLOTENGOTODAVIA/" target="_blank">
            @NOLOTENGOTODAVIA
          </Link>{' '}
          | WhatsApp: 11-3123-1666
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          &copy; 2025 Catalogos ignacio.
        </Typography>
      </Box>

      <Fab
        color="success"
        aria-label="whatsapp"
        href="https://wa.me/1131231666"
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
