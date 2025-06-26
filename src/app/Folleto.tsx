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
import { Emprendimiento } from "@/lib/emprendimientos";
import { Instagram } from '@mui/icons-material';
import { shareData } from '@/lib/shareUtils';
import ShareIcon from '@mui/icons-material/Share';
import { getDataToExport } from '@/lib/emprendimientos';

type Props = {
  emprendimiento: Emprendimiento;
};

export default function Folleto({ emprendimiento }: Props) {
  return (
    <Box sx={{ backgroundColor: emprendimiento.backgroundColor ?? '#fff8f5', minHeight: '100vh', height: '100%'}}>
      <Box sx={{ bgcolor: emprendimiento.backgroundHeaderColor ?? '#ffe8e1', py: 4, textAlign: 'center' }}>
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
          {emprendimiento.nombre}
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
          {emprendimiento.descripcion.split('\n').map((linea, i) => (
              <span key={i}>
                {linea}
                <br />
              </span>
            ))}
        </Typography>
      </Box>

      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {emprendimiento.productos.map((art, index) => (
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

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <button 
          className="share-btn"
          onClick={() => shareData(getDataToExport(emprendimiento))} 
          style={{ 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            background: 'none',
            border: 'none',
            padding: 0 
        }}>
          <ShareIcon fontSize="small" />
        </button>
      </Box>

      <Box sx={{ bgcolor: emprendimiento.backgroundHeaderColor ?? '#ffe8e1', textAlign: 'center', py: 3 }}>
        <Typography variant="body1">
          📩 Pedidos por Instagram:{' '}
          <Link href={"https://instagram.com/" + emprendimiento.instagram + "/"} target="_blank">
            @{emprendimiento.instagram}
          </Link>{' '}
          | WhatsApp: {emprendimiento.whatsAppPhone}
        </Typography>
        { emprendimiento.footerDescription && <Typography variant="body1" sx={{ mt: 1 }}>
          {emprendimiento.footerDescription}  
        </Typography> }
        <Typography variant="body2" sx={{ mt: 1 }}>
          &copy; 2025 {emprendimiento.nombre}. Todos los derechos reservados.
        </Typography>
      </Box>

      <Fab
        color="success"
        aria-label="whatsapp"
        href={"https://wa.me/" + emprendimiento.whatsAppPhone}
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
            <Fab
        color="success"
        aria-label="Instagram"
        href={"https://instagram.com/" + emprendimiento.instagram + "/"}
        target="_blank"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 84,
          bgcolor: '#E1306C',
          '&:hover': {
            bgcolor: '#c13584',
          },
        }}
      >
        <Instagram />
      </Fab>
    </Box>
  );
}
