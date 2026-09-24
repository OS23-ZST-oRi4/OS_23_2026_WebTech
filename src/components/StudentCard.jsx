function StudentCard({ student }) {
  return (
    <div>
      <p>{student.firstName} {student.lastName}</p>
      <p>Klasa: {student.className}</p>
      <p>Specjalizacja: {student.specialization}</p>
      <p>Średnia ocen: {student.gradesAverage}</p>
      <p>Status: {student.isActive ? "Aktywny" : "Nieaktywny"}</p>
      <hr />
    </div>
  );
}

export default StudentCard;