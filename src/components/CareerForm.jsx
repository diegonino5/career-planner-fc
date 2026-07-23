import { useState } from "react";

function CareerForm({ onCreate }) {
  const [nombre, setNombre] = useState("");
  const [club, setClub] = useState("");

  function crearPartida() {
    if (!nombre.trim() || !club.trim()) {
      alert("Completa todos los campos");
      return;
    }

    onCreate({
      id: Date.now(),
      nombre,
      club,
    });

    setNombre("");
    setClub("");
  }

  return (
    <div className="formCard">
      <h3>Nueva partida</h3>

      <input
        placeholder="Nombre de la partida"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        placeholder="Club"
        value={club}
        onChange={(e) => setClub(e.target.value)}
      />

      <button onClick={crearPartida}>
        Crear partida
      </button>
    </div>
  );
}

export default CareerForm;