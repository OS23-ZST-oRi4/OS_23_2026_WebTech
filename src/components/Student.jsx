function Student(){
    let student = {
        name: "Oskar",
        surname: "Sikora",
        class: "4P",
        specialization: "Programista",
    }
    
    return (
        <section>
        <h2>Informacje</h2>
        <ul>
            <li>Imię: {student.name}</li>
            <li>Nazwisko: {student.surname}</li>
            <li>Klasa: {student.class}</li>
            <li>Specjalizacja: {student.specialization}</li>
        </ul>
        </section>
    );
}

export default Student;