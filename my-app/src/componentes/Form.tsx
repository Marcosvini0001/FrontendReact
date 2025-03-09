import "./Form.css";

const Form = () => {
  return (
    <form className="form">
      <label htmlFor="name">Nome:</label>
      <input type="text" id="name" placeholder="Seu nome" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="Seu email" required />

      <label htmlFor="message">Mensagem:</label>
      <textarea id="message" placeholder="Sua mensagem" required></textarea>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
