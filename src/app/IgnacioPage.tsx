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
      armado: 8000,
      mantenimiento: 2000,
      descripcion: `
        <strong>Ideal para empezar</strong><br/><br/>
        ✅ Hasta <strong>12 productos</strong><br/>
        ✅ Imagen, descripción y precio<br/>
        ✅ Adaptado a celular y PC<br/>
        ✅ Diseño limpio y atractivo<br/>
        ✅ <em>Mantenimiento mensual opcional:</em> incluye hasta 10 cambios simples (precio, foto o texto)
      `,
      recomendacion: 'Recomendado para emprendimientos nuevos o catálogos de prueba.',
      link: '/about',
    },
    {
      nombre: 'Estándar',
      armado: 15000,
      mantenimiento: 4000,
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
      nombre: 'Premium',
      armado: 60000,
      mantenimiento: 10000,
      descripcion: `
        <strong>Solución full personalizada para marcas que quieren crecer a lo grande</strong><br/><br/>
        ✅ Hasta <strong>100 productos</strong><br/>
        ✅ Página web completa y 100% a medida con secciones, blog y tienda<br/>
        ✅ Diseños profesionales para redes sociales (posts, historias, banners)<br/>
        ✅ Dominio personalizado (.com.ar) y correo profesional<br/>
        ✅ SEO avanzado para mejorar visibilidad en buscadores<br/>
        ✅ Integración con WhatsApp Business y otras plataformas<br/>
        ✅ Mantenimiento completo y soporte dedicado sin límite de cambios<br/>
        ✅ Análisis mensual del tráfico y recomendaciones para mejorar ventas
      `,
      recomendacion: 'Recomendado para marcas consolidadas o con alto volumen de ventas en redes sociales.',
      link: '',
    },
  ];


  function PlanCard({ plan }: { plan: { nombre: string; armado: number; mantenimiento: number; descripcion: string; recomendacion: string; link: string } }) {
    return (
      <Card
        sx={{
          backgroundColor: 'rgba(224, 242, 241, 0.8)',
          backdropFilter: 'blur(8px)',
          borderRadius: 5,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">{plan.nombre}</Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ mt: 1, flexGrow: 1 }}
            dangerouslySetInnerHTML={{ __html: plan.descripcion }}
          />
          <Typography variant="body1" sx={{ mt: 2 }}>
            <strong>Armado:</strong> ${plan.armado}
            <br />
            <strong>Mantenimiento mensual:</strong> ${plan.mantenimiento}
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
            {plan.recomendacion}
          </Typography>
          { plan.link && (
            <Link href={plan.link} underline="hover" sx={{ mt: 2 }}>Ver ejemplo</Link>)
          }
        </CardContent>
      </Card>
    );
  }
  return (
    <Box sx={{background: 'white', minHeight: '100vh', height: '100vh' }}>
      <Box sx={{
        backgroundImage: 'url(/layered-waves-haikei.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 4,
        textAlign: 'center'
      }}>
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

      <Container sx={{ py: 4, backgroundColor: 'white'}}>
        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
          {planes.map((plan) => (
            <Grid size={{xs: 12, sm: 6, md:4}} key={plan.nombre} sx={{ display: 'flex' }}>
              <PlanCard plan={plan} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{
        backgroundImage: 'url(/layered-waves-haikei.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center', 
        py: 3
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
