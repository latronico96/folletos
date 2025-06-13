import { HashRouter , Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import FolletoCocol from './pages/FolletoCocol';
import About from './pages/About';
import './App.css'

function App() {
  return (
    <HashRouter >
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Cocol" element={<FolletoCocol />} />
        </Routes>
      </Container>
    </HashRouter >
  );
}

export default App;