import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import FolletoCocol from './pages/FolletoCocol';
import About from './pages/About';
import './App.css'

function App() {
  return (
    <Router>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Cocol" element={<FolletoCocol />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;