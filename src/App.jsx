import Header from "./components/Header.jsx";
import Technology from "./components/Technology.jsx";
import Footer from "./components/Footer.jsx";
import Student from "./components/Student.jsx"
import InfoBox from "./components/InfoBox.jsx"
import Navigation from "./components/Navigation.jsx";
import CourseCard from "./components/CourseCard.jsx";

function App() {
  const technologies = [
  {
    id: 1,
    name: "CSS",
    category: "Style language"
  },
  {
    id: 2,
    name: "React",
    category: "Advanced Web Apps"
  },
  {
    id: 3,
    name: "PHP",
    category: "Server side language"
  }
];

  return (
    <>
      <Header />
      
      <Navigation />

      <main>

        <Technology />

        <Technology />

        <Technology />

        <Student />

        <InfoBox />

        <CourseCard />

        <section>
          <h2>Właściwosci obiektów: </h2>
          <p>{technologies[0].id} {technologies[0].name} {technologies[0].category}</p>
          <p>{technologies[1].id} {technologies[1].name} {technologies[1].category}</p>
          <p>{technologies[2].id} {technologies[2].name} {technologies[2].category}</p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;