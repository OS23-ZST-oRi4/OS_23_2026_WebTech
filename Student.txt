function Student({name,className,age,specialization}){
    return (<>
        <section>
            <h2>Imię: {name}</h2>
            <p>Klasa: {className}</p>
            <p>Wiek: {age}</p>
            <p>Zawód: {specialization}</p>
        </section>
    </>);
}

export default Student;