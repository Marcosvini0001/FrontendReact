import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

function Inicio() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Início</h2>
      <button onClick={() => navigate("/sobre")}>Ir para Sobre</button>
    </div>
  );
}

function Sobre() {
  return <h2>Sobre</h2>;
}

function Contato() {
  return <h2>Contato</h2>;
}

function Animal() {
  const { name } = useParams();
  return <h2>Animal: {name}</h2>;
}

function Salas() {
  return (
    <div>
      <h2>Lista de Quartos</h2>
      <ul>
        <li>
          <Link to="/sala/1">Quarto 1</Link>
        </li>
        <li>
          <Link to="/sala/2">Quarto 2</Link>
        </li>
      </ul>
    </div>
  );
}

function DetalhesSala() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h2>Detalhes do Quarto {id}</h2>
      <button onClick={() => navigate("/reserva-sucesso")}>Reservar</button>
    </div>
  );
}

function ReservaSucesso() {
  return <h2>Reserva realizada com sucesso!</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Início</Link> |<Link to="/sobre">Sobre</Link> |
        <Link to="/contato">Contato</Link> |<Link to="/salas">Salas</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/animal/:name" element={<Animal />} />
        <Route path="/salas" element={<Salas />} />
        <Route path="/sala/:id" element={<DetalhesSala />} />
        <Route path="/reserva-sucesso" element={<ReservaSucesso />} />
      </Routes>
    </Router>
  );
}

export default App;
