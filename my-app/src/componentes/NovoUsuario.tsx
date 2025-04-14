import React, { useState } from "react";

const CadastrarUsuario: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const cadastrarUsuario = async () => {
    setMensagem(null);
    setErro(null);

    try {
      const resposta = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nome,
            email: email,
          }),
        }
      );

      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      const dados = await resposta.json();
      setMensagem(`Usuário ${dados.name} cadastrado com sucesso!`);
      setNome("");
      setEmail("");
    } catch (err: any) {
      setErro(err.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Cadastrar Novo Usuário</h1>

      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
        className="w-full p-2 border rounded"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
        className="w-full p-2 border rounded"
      />

      <button
        onClick={cadastrarUsuario}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
      >
        Cadastrar
      </button>

      {mensagem && (
        <div className="mt-4 text-green-600 font-medium">{mensagem}</div>
      )}

      {erro && <div className="mt-4 text-red-500">{erro}</div>}
    </div>
  );
};

export default CadastrarUsuario;
