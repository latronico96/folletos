"use client";

import { useState, useRef } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, CardContent, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShareIcon from '@mui/icons-material/Share';
import { shareNodeAsImage } from "@/lib/shareUtils";
import VersiculoVersionSwitch from "./VersiculoVersionSwitch";
import { getAllTarjetas } from "@/lib/tarjetas";
import Footer from "./Footer";
import Header from "./Header";

export default function VersiculosWidget() {
  const [version, setVersion] = useState<"rv" | "nvi">("rv");
  const [acoordionIndex, setAcoordionIndex] = useState<number | null>(null);
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
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100vh' }}>
      <Box sx={{backgroundColor: '#000', color: 'white', width: '100%'}}>
        <Header />
        <Box sx={{ width: { xs: '100%', sm: 'auto' }, p: 2, textAlign: 'center'}}>
          <Typography variant="h6"> Cuando te sentís... </Typography>
          <VersiculoVersionSwitch value={version} onChange={setVersion} />
        </Box>
      </Box> 
      <Box sx={{ width: '100%', mt: 2, display: 'flex', flexDirection: 'column', gap: 2, backgroundColor: '#f1f1f1', p: 2 }}> 
        {tarjetas.map((e, index) => (
          <Accordion key={e.sentimiento + index} expanded={acoordionIndex === index} onChange={(_, expanded) => setAcoordionIndex(expanded ? index : null)}>
            <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel1-content" id="panel1-header">
              <Typography component="span">{e.sentimiento}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#f1f1f1'}}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {e.versiculos.map((v, idx) => (
                  <Card
                    key={v.referencia + idx}
                    sx={{ maxWidth: { xs: '100%', sm: '300px' }, flex: '1 1 300px', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}
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
      <Footer />
  </Box>);
}
