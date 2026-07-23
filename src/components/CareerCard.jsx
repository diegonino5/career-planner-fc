function CareerCard({ partida, onDelete }) {
  return (
    <div className="careerCard">
      <h3>{partida.nombre}</h3>

      <p>
        <strong>Club:</strong> {partida.club}
      </p>

      <button>Abrir</button>

      <button
        className="secondary"
        onClick={() => onDelete(partida.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default CareerCard;