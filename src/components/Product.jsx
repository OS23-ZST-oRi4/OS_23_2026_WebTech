function Product({name,price,selectProduct}){
    return(
        <>
        <section>
            <h2>Nazwa: {name}</h2>
            <p>Cena: {price}</p>

            <button onClick={() => selectProduct(name)}>Wybierz</button>
        </section>
        </>
    );
}

export default Product;