import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "./screens/TelaInicial";
import SelecaoEquipes from "./screens/SelecaoEquipes";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaInicial />} />
            <Route path="/selecao-equipes" element={<SelecaoEquipes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
