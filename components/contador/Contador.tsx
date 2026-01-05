"use client";

import { useEffect, useState } from "react";

function getValorInicial() {
  if (typeof window === "undefined") return 0;
  const salvo = localStorage.getItem("contador-valor");
  return salvo ? Number(salvo) : 0;
}

function getHistoricoInicial() {
  if (typeof window === "undefined") return [];
  const hist = localStorage.getItem("contador-historico");
  return hist ? JSON.parse(hist) : [];
}

export default function Contador() {
  const [valor, setValor] = useState<number>(getValorInicial);
  const [historico, setHistorico] = useState<number[]>(getHistoricoInicial);

  useEffect(() => {
    localStorage.setItem("contador-valor", valor.toString());
  }, [valor]);

  useEffect(() => {
    localStorage.setItem(
      "contador-historico",
      JSON.stringify(historico)
    );
  }, [historico]);

  function atualizar(novoValor: number) {
    if (novoValor < 0 || novoValor > 10) return;

    setValor(novoValor);
    setHistorico((prev) => [...prev, novoValor]);
  }

  function resetar() {
    setValor(0);
    setHistorico([0]);
  }

  function corDoNumero() {
    if (valor <= 3) return "text-red-500";
    if (valor <= 7) return "text-yellow-400";
    return "text-green-500";
  }

  return (
    <div>
      <div className={`text-6xl font-bold mb-6 ${corDoNumero()}`}>
        {valor}
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => atualizar(valor - 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg"
        >
          −
        </button>

        <button
          onClick={() => atualizar(valor + 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg"
        >
          +
        </button>

        <button
          onClick={resetar}
          className="px-4 py-2 bg-red-700 text-white rounded-lg"
        >
          Reset
        </button>
      </div>

      <div className="text-left">
        <h2 className="text-white font-semibold mb-2">
          Histórico:
        </h2>

        <ul className="list-disc list-inside text-gray-300 space-y-1 max-h-32 overflow-y-auto">
          {historico.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
