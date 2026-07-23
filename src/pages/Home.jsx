import CareerCard from "../components/CareerCard";
import { useState } from "react";
import CareerForm from "../components/CareerForm";

function Home() {
  const [partidas, setPartidas] = useState([]);

  function crearPartida(nuevaPartida) {
    setPartidas([...partidas, nuevaPartida]);
  }

  return (
    <main className="content">
      <h2>Mis partidas</h2>

      <CareerForm onCreate={crearPartida} />

      <hr />

      {partidas.length === 0 ? (
        <p>No tienes partidas.</p>
      ) : (
            partidas.map((partida) => (
        <CareerCard
            key={partida.id}
            partida={partida}
        />
        ))
      )}
    </main>
  );
}

export default Home;