import { Box, Typography } from "@mui/material";

export default function Header() {
    return <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            gap: 2,
            flexWrap: 'wrap',
            textAlign: 'left',
        }}
        >
        <Box
            component="img"
            src="/Logo Principal Blanco.png"
            alt="Logo"
            sx={{
            height: 128,
            width: 'auto',
            }}
        />
        <Box>
            <Typography variant="h2">Casa de</Typography>
            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>AVIVAMIENTO</Typography>
        </Box>
        </Box>;
}
