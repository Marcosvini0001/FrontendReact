import React, { useState } from "react";

const BuscarUsuario: React.FC = () => {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const buscarUsuario = async () => {
    setUsuario(null);
    setErro(null);

    try {
      const resposta = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      if (!resposta.ok) {
        throw new Error("Usuário não encontrado");
      }

      const dados = await resposta.json();
      setUsuario({ name: dados.name, email: dados.email });
    } catch (err: any) {
      setErro(err.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Buscar Usuário</h1>

      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Digite o ID do usuário"
        className="w-full p-2 border rounded"
      />

      <button
        onClick={buscarUsuario}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Buscar
      </button>

      {usuario && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <p>
            <strong>Nome:</strong> {usuario.name}
          </p>
          <p>
            <strong>Email:</strong> {usuario.email}
          </p>
        </div>
      )}

      {erro && (
        <div className="mt-4 text-red-500">
          <p>{erro}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarUsuario;
