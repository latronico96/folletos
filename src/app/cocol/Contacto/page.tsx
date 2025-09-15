'use client';

import { Button, Container, TextField, Typography, Stack, Box, } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const mensajeWhatsApp = encodeURIComponent(
    `Hola! Soy ${form.nombre}, mi email es ${form.email}. Quisiera hacer una consulta:\n${form.mensaje}`
  );

  const mailtoBody = `Nombre: ${form.nombre}\nEmail: ${form.email}\nMensaje:\n${form.mensaje}`;
  const mailtoLink = `mailto:sofi.arce@gmail.com?subject=${encodeURIComponent("Consulta desde el sitio")}&body=${encodeURIComponent(mailtoBody)}`;

  return <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', }}>
    <Header />
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Contactanos
      </Typography>
      <Typography variant="body1" textAlign="center" mb={4}>
        Si tenés dudas, querés hacer un pedido o simplemente hablar con nosotras, completá el formulario o escribinos por WhatsApp o email 💌
      </Typography>

      <Stack spacing={3}>
        <TextField label="Tu nombre" name="nombre" value={form.nombre} onChange={handleChange} fullWidth required/>
        <TextField label="Tu email" name="email" value={form.email} onChange={handleChange} fullWidth required/>
        <TextField label="Mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} fullWidth multiline rows={4} required/>
        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
          <Button
            variant="contained"
            color="success"
            startIcon={<WhatsAppIcon />}
            href={`https://wa.me/5491136724619?text=${mensajeWhatsApp}`}
            target="_blank"
            disabled={!form.nombre || !form.email || !form.mensaje}
          >
            Enviar por WhatsApp
          </Button>

          <Button
            variant="outlined"
            color="primary"
            startIcon={<EmailIcon />}
            href={mailtoLink}
            disabled={!form.nombre || !form.email || !form.mensaje}
          >
            Enviar por Email
          </Button>
        </Stack>
      </Stack>
    </Container>
    <Footer />
    </Box>;
}
