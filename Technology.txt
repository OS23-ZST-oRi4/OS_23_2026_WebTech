function Technology({ name, category, hours, onSelect }) {
  return (
    <section>
      <h2>{name}</h2>
      <p>{category}</p>
      <p>{hours}</p>

      <button onClick={() => onSelect(name)}>
        Wybierz
      </button>
    </section>
  );
}

export default Technology