import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "./screens/TelaInicial";
import SelecaoEquipes from "./screens/SelecaoEquipes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/selecao-equipes" element={<SelecaoEquipes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
