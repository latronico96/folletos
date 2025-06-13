import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import FolletoCocol from './pages/FolletoCocol';
import About from './pages/About';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Cocol" element={<FolletoCocol />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;