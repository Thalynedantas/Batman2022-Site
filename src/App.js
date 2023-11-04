import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/comentarios/comentario';
import Contato from './pages/contato/contato';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/fotos' element={<Fotos />} />
      <Route path='/contato' element={<Contato />} />
      <Route path='/comentarios' element={<Comentarios />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
