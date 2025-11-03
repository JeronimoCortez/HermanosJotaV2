import "./contador.css";

const Contador = ({ max, contador, setContador }) => {
  function sumarContador() {
    if (contador < max) {
      setContador(contador + 1);
    }
  }

  function restarContador() {
    if (contador > 1) {
      setContador(contador - 1);
    }
  }

  return (
    <div className="contador">
      <button onClick={restarContador}>-</button>
      <p>{contador}</p>
      <button onClick={sumarContador}>+</button>
    </div>
  );
};

export default Contador;
