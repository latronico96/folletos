"use client";

import { getAllTarjetas } from "@/lib/tarjetas";
import { Accordion, AccordionDetails, AccordionSummary, Box, CardContent, Toolbar, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState, useRef } from "react";
import { toBlob } from "html-to-image";
import VersiculoVersionSwitch from "./VersiculoVersionSwitch";


export default function EmprendimientosPage() {
  const [version, setVersion] = useState<"rv" | "nvi">("rv");
  const tarjetas = getAllTarjetas();

  // refs para cada card
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  type Versiculo = {
    referencia: string;
    rv: string;
    nvi: string;
  };

  const handleShare = async (idx: number, v: Versiculo) => {
    const node = cardRefs.current[idx];
    if (!node) return;
    try {
      const blob = await toBlob(node);
      if (!blob) return;
      const file = new File([blob], "versiculo.png", { type: blob.type });
      const data = {
        files: [file],
        title: v.referencia,
        text: `${version === "rv" ? v.rv : v.nvi}\n${window.location.href}`
      };
      if (navigator.canShare && navigator.canShare(data)) {
        await navigator.share(data);
      } else {
        // fallback: descarga la imagen
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'versiculo.png';
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: { xs: 'flex-start', sm: 'center' },
          flexDirection: { xs: 'column', sm: 'row' },
          padding: 2,
          backgroundColor: '#f5f5f5',
          borderBottom: '1px solid #e0e0e0',
          gap: { xs: 1, sm: 0 }
        }}
      >
        <Toolbar sx={{ p: 0, minWidth: 0, width: { xs: '100%', sm: 'auto' } }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, minWidth: 200 }}
          >
            ¿Hoy como te sentis?
          </Typography>
        </Toolbar>
        <Box sx={{ width: { xs: '100%', sm: 'auto' }, mt: { xs: 1, sm: 0 } }}>
          <VersiculoVersionSwitch value={version} onChange={setVersion} />
        </Box>
      </Box>
      {tarjetas.map((e, index) => (
        <Accordion key={e.emocion + index}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">{e.emocion}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {e.versiculos.map((v, idx) => (
                <Card key={v.referencia + idx} sx={{ maxWidth: 300, flex: '1 1 300px' }}>
                  <div ref={(el) => { cardRefs.current[index * 10 + idx] = el || null; }}>
                    <CardContent>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {v.referencia} - { version === "rv" ? v.rv : v.nvi }
                      </Typography>
                    </CardContent>
                  </div>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                    <button onClick={() => handleShare(index * 10 + idx, v)} style={{ cursor: 'pointer' }}>Compartir</button>
                  </Box>
                </Card>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
