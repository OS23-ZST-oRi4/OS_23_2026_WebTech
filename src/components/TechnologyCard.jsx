export default function TechnologyCard({img,name,category,hours}){
    return (
        <>
            <article className="card">
                <img src={img} alt={img}></img>
                <h3>Nazwa: {name}</h3>
                <h4>Kategoria: {category}, czas trwania: {hours}</h4>
            </article>
        </>
    );
}