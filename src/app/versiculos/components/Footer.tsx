import { Box, Typography, Link } from "@mui/material";
import { Instagram, YouTube } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "white",
        width: "100%",
        mt: 4,
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 1.5,
      }}
    >
      <Typography variant="h6">Seguinos en:</Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 3 }}>
        <Instagram fontSize="small" />
        <Link
          href="https://www.instagram.com/casadeavivamiento_laplata"
          target="_blank"
          rel="noopener"
          underline="hover"
          color="inherit"
          variant="body2"
        >
          @casadeavivamiento_laplata
        </Link>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 3 }}>
        <YouTube fontSize="small" />
        <Link
          href="https://www.youtube.com/@CasadeAvivamientoLaPlata"
          target="_blank"
          rel="noopener"
          underline="hover"
          color="inherit"
          variant="body2"
        >
          @CasadeAvivamientoLaPlata
        </Link>
      </Box>
    </Box>
  );
}
