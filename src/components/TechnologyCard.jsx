import { use, useState } from "react";

export default function TechnologyCard({ img, name, category, hours }) {

    const [likes, setLikes] = useState(0);
    const [isLearning, setIsLearning] = useState(false);
    const [detailsVisible, showDetails] = useState(false);

    return (
        <>
            <article className="card">
                <img src={img} alt={img}></img>
                <h3>Nazwa: {name}</h3>
                <h4>Kategoria: {category}, czas trwania: {hours}</h4>
                <h3>Polubienia: ❤️{likes}</h3>
                <div className="przyciskiLike">
                    <button onClick={() => setLikes(likes + 1)}>Polub</button>
                    <button onClick={() => setLikes(0)}>Reset</button>
                </div>
                <button onClick={() => setIsLearning(!isLearning)}>Zmień status nauki</button>
                {isLearning && <h4>Uczę się</h4>}
                {!isLearning && <h4>Nie uczę się</h4>}

                <button onClick={() => (showDetails(!detailsVisible))}>Pokaż szczegóły</button>
                {detailsVisible && (
                    <div>
                        <span>{category}</span>
                        <p>Czas nauki: {hours} godz.</p>
                    </div>
                )}
            </article>
        </>
    );
}