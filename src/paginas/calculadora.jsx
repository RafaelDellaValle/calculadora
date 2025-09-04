import { useState } from "react";
import "./calculadora.css";

function Calculadora() {
  const [numero, setNumero] = useState("0"); // estado inicial

  // Função para adicionar número ao display
  const adicionarNumero = (valor) => {
    if (numero === "0") {
      setNumero(valor);
    } else {
      setNumero(numero + valor);
    }
  };

  return (
    <div className="corpoCalculadora">
      <div>
        {/* Display */}
        <p className="inputNumero">{numero}</p>

        {/* Grid de botões */}
        <ul className="conteudoOpcoes">
          {["7","8","9","AC","4","5","6","/","1","2","3","*","0",".","=","-"].map((item) => (
            <li key={item} onClick={() => adicionarNumero(item)}>
              {item}
            </li>
          ))}

        </ul>
        
      </div>
    </div>
  );
}

export default Calculadora;