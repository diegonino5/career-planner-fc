import { useEffect, useState } from "react";
import CareerForm from "../components/CareerForm";
import CareerCard from "../components/CareerCard";

function Home() {
  const [partidas, setPartidas] = useState(() => {
    const guardadas = localStorage.getItem("partidas");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  function crearPartida(nuevaPartida) {
    setPartidas([...partidas, nuevaPartida]);
  }
  function eliminarPartida(id) {
  setPartidas(partidas.filter((partida) => partida.id !== id));
  }

  // 👇 Aquí mismo
  useEffect(() => {
    localStorage.setItem("partidas", JSON.stringify(partidas));
  }, [partidas]);

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
            onDelete={eliminarPartida}
          />
        ))
      )}
    </main>
  );
}

export default Home;