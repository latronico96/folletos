import { Box, Fab, Link, Typography } from '@mui/material';
import { Instagram } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return <Box component="footer" sx={{ py: 3, backgroundColor: '#ffe8e1', textAlign: 'center' }}>
      <Typography variant="body1">
        📩 Pedidos por Instagram:{' '}
        <Link href={"https://instagram.com/cocol.pasteleria/"} target="_blank">@cocol.pasteleria</Link>
        | WhatsApp: 1136724619
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        &copy; 2025 Pastelería Artesanal Cocol. Todos los derechos reservados.
      </Typography>
      <Fab color="success"
        aria-label="whatsapp"
        href="https://wa.me/1136724619"
        target="_blank"
        sx={{ position: 'fixed', bottom: 16, right: 16, bgcolor: '#25D366', '&:hover': { bgcolor: '#1ebe5b', }}}
      >
          <WhatsAppIcon />
      </Fab>
      <Fab
        color="success"
        aria-label="Instagram"
        href="https://instagram.com/cocol.pasteleria/"
        target="_blank"
        sx={{ position: 'fixed', bottom: 16, right: 84, bgcolor: '#E1306C', '&:hover': { bgcolor: '#c13584',}}}
      >
        <Instagram />
      </Fab>
    </Box>;
}
