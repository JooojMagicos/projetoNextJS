"use client";

import { useState } from "react";

type Tarefa = {
  id: number;
  texto: string;
};

export default function InputComponent() {
  // Input simples
  const [texto, setTexto] = useState("");

  // Seletor
  const [categoria, setCategoria] = useState("React");

  // Lista de tarefas
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [editandoId, setEditandoId] = useState<number | null>(null);

  function adicionarTarefa() {
    if (!novaTarefa.trim()) return;

    setTarefas([
      ...tarefas,
      { id: Date.now(), texto: novaTarefa },
    ]);
    setNovaTarefa("");
  }

  function apagarTarefa(id: number) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  function iniciarEdicao(id: number, textoAtual: string) {
    setEditandoId(id);
    setNovaTarefa(textoAtual);
  }

  function salvarEdicao() {
    setTarefas(
      tarefas.map((t) =>
        t.id === editandoId ? { ...t, texto: novaTarefa } : t
      )
    );
    setEditandoId(null);
    setNovaTarefa("");
  }

  return (
    <div className="space-y-10">

      {/* INPUT DE TEXTO */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Input de Texto</h2>

        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white"
          placeholder="Digite algo..."
        />

        <p className="mt-4 text-gray-300">
          Texto digitado: <strong>{texto}</strong>
        </p>
      </section>

      {/* SELETOR */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Seletor</h2>

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white"
        >
          <option>React</option>
          <option>Next.js</option>
          <option>TypeScript</option>
          <option>Node.js</option>
          <option>CSS</option>
        </select>

        <p className="mt-4 text-gray-300">
          Categoria selecionada: <strong>{categoria}</strong>
        </p>
      </section>

      {/* LISTA DE TAREFAS */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Lista de Tarefas</h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            className="flex-1 px-4 py-2 rounded bg-gray-800 text-white"
            placeholder="Nova tarefa"
          />

          {editandoId ? (
            <button
              onClick={salvarEdicao}
              className="px-4 py-2 bg-yellow-600 rounded"
            >
              Salvar
            </button>
          ) : (
            <button
              onClick={adicionarTarefa}
              className="px-4 py-2 bg-green-600 rounded"
            >
              Inserir
            </button>
          )}
        </div>

        <ul className="space-y-2">
          {tarefas.map((tarefa) => (
            <li
              key={tarefa.id}
              className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded"
            >
              <span>{tarefa.texto}</span>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    iniciarEdicao(tarefa.id, tarefa.texto)
                  }
                  className="px-2 py-1 bg-blue-600 rounded text-sm"
                >
                  Editar
                </button>

                <button
                  onClick={() => apagarTarefa(tarefa.id)}
                  className="px-2 py-1 bg-red-600 rounded text-sm"
                >
                  Apagar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
