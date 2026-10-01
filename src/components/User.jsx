function User({name,role}){
    function showInfo(name,role){
        console.log("Użytkownik: " + name)
        console.log("Rola: " + role)
    }

    return (
        <>
            <section>
                <button onClick={() => showInfo(name,role)}>Pokaż użytkownika</button>
            </section>
        </>
    )
}

export default User;