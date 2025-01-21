import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const Inicial = () => {
  const navigate = useNavigate();

  const handleNovoJogo = () => {
    console.log("Novo jogo iniciado");
    navigate("/selecao-equipes"); // Redirecionar para a tela de gerenciamento de elenco
  };

  const handleCarregarJogo = () => {
    console.log("Carregar jogo salvo");
    // ...
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold text-white">
        Football Manager Pernambuco
      </h1>
      <div className="w-1/2 flex flex-col justify-center gap-2 my-10">
        <Button onClick={handleNovoJogo}>Iniciar Novo Jogo</Button>
        <Button onClick={handleCarregarJogo}>Carregar Jogo</Button>
      </div>

      <footer className="absolute bottom-4 flex justify-center items-center text-center text-gray-400 text-sm">
        Desenvolvido por Gabriel Milanez | © 2025 Football Manager Pernambuco
      </footer>
    </div>
  );
};

export default Inicial;
