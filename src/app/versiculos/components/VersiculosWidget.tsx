"use client";

import { useState, useRef } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, CardContent, Toolbar, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShareIcon from '@mui/icons-material/Share';
import { shareNodeAsImage } from "@/lib/shareUtils";
import VersiculoVersionSwitch from "./VersiculoVersionSwitch";
import { getAllTarjetas } from "@/lib/tarjetas";

export default function VersiculosWidget() {
  const [version, setVersion] = useState<"rv" | "nvi">("rv");
  const tarjetas = getAllTarjetas();
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
      await shareNodeAsImage(node, {
        hideSelector: '.share-btn',
        fileName: 'versiculo.png',
        shareTitle: v.referencia,
        shareText: `${version === "rv" ? v.rv : v.nvi}\n${window.location.href}`
      });
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
          backgroundColor: '#e1e8ff',
          borderBottom: '1px solid #e0e0e0',
          gap: { xs: 1, sm: 0 },
          justifyContent: { xs: 'flex-start', sm: 'center' }
        }}
      >
        <Toolbar sx={{ p: 0, minWidth: 0, width: { xs: '100%', sm: 'auto' } }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, minWidth: 200 }}
          >
            Cuando te sentís...
          </Typography>
        </Toolbar>
        <Box sx={{ width: { xs: '100%', sm: 'auto' }, mt: { xs: 1, sm: 0 } }}>
          <VersiculoVersionSwitch value={version} onChange={setVersion} />
        </Box>
      </Box>
      {tarjetas.map((e, index) => (
        <Accordion key={e.sentimiento + index}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">{e.sentimiento}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#f1f1f1'}}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {e.versiculos.map((v, idx) => (
                <Card
                  key={v.referencia + idx}
                  sx={{ width: { xs: '100%', sm: '300px' }, flex: '1 1 300px', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}
                  ref={(el) => { cardRefs.current[index * 10 + idx] = el || null; }}
                >
                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', mb: 0.5, textTransform: 'uppercase', fontWeight: 'bold'   }}>
                      {v.referencia}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                      { version === "rv" ? v.rv : v.nvi }
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                      <button 
                        className="share-btn"
                        onClick={() => handleShare(index * 10 + idx, v)} 
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
                  </CardContent>
                </Card>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
