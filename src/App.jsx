import Header from "./components/Header.jsx";
import Technology from "./components/Technology.jsx";
import Footer from "./components/Footer.jsx";
import Student from "./components/Student.jsx"
import InfoBox from "./components/InfoBox.jsx"
import Navigation from "./components/Navigation.jsx";
import CourseCard from "./components/CourseCard.jsx";
import bootstrapImg from './assets/img/bootstrap.webp';
import TechnologyCard from "./components/TechnologyCard.jsx";
import CheapProductsList from "./components/CheapProductsList.jsx";

function App() {
  const technologies = [
{ id: 1, name: "React", category: "Frontend", hours: 30, image: "/img/react.webp" },
{ id: 2, name: "Node.js", category: "Backend", hours: 40, image: "/img/nodejs.webp" },
{ id: 3, name: "MySQL", category: "Baza danych", hours: 20, image: "/img/mysql.webp" },
{ id: 4, name: "Express", category: "Backend", hours: 25, image: "/img/express.webp" },
{ id: 5, name: "MongoDB", category: "Baza danych", hours: 30, image: "/img/mongodb.webp" },
{ id: 6, name: "Bootstrap", category: "Frontend", hours: 15, image: "/img/bootstrap.webp" },
{ id: 7, name: "CSS", category: "Frontend", hours: 20, image: "/img/css.webp" },
{ id: 8, name: "HTML", category: "Frontend", hours: 10, image: "/img/html.webp" },
{ id: 9, name: "PHP", category: "Backend", hours: 35, image: "/img/php.webp" }
];

  return (
    <>
      <Header />
      
      <main>
      {technologies.map((v,i) => (
        <TechnologyCard img={v.image} name={v.name} category={v.category} hours={v.hours}/>
      ))}
      </main>
      <CheapProductsList />
      <Footer />
    </>
  );
}

export default App;