import { useState } from "react";

interface ContadorProps {
  inicial: number;
}

const Contador: React.FC<ContadorProps> = ({ inicial }) => {
  const [contador, setContador] = useState(inicial);

  return (
    <div>
      <h2>{contador}</h2>
      <div>
        <button onClick={() => setContador(contador + 1)}>+</button>
        <button onClick={() => setContador(contador - 1)}>-</button>
      </div>
    </div>
  );
};

export default Contador;
