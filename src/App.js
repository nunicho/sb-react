import Inicio from "./components/views/Inicio";
import Nosotros from "./components/views/Nosotros"
import Contacto from "./components/views/Contacto";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>} />
          <Route exact path="/Nosotros" element={<Nosotros></Nosotros>} />
          <Route exact path="/Contacto" element={<Contacto></Contacto>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
