import "./calculadora.css";

function Calculadora() {
  return (
    <div className="corpoCalculadora">
      <div>
        <p className="inputNumero">1203</p>
        <ul className="conteudoOpcoes">
          <li>0</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>+</li>
          <li>-</li>
          <li>/</li>
          <li>*</li>
        </ul>
      </div>
    </div>
  );
}

export default Calculadora;
