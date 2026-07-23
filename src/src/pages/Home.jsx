import { useState } from "react";

function Home() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <main className="content">
      <h2>Mis partidas</h2>

      <button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
        Nueva partida
      </button>

      {mostrarFormulario && (
        <p>Formulario abierto</p>
      )}
    </main>
  );
}

export default Home;
