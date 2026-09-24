import './App.css'
import Header from "./components/Header"
import StudentCard from "./components/StudentCard"

function App() {
  const studentOne = {
    id: 1,
    firstName: "Jan",
    lastName: "Kowalski",
    className: "4P",
    specialization: "technik programista",
    gradesAverage: 4.75,
    isActive: true
  };

  const studentTwo = {
    id: 2,
    firstName: "Oliwier",
    lastName: "Nowak",
    className: "4IP",
    specialization: "technik informatyk",
    gradesAverage: 4.20,
    isActive: true
  };

  const studentThree = {
    id: 3,
    firstName: "Pablo",
    lastName: "Picasso",
    className: "2I",
    specialization: "technik malarz",
    gradesAverage: 3.50,
    isActive: false
  };

  return (
    <>
      <Header />
      <StudentCard student={studentOne} />
      <StudentCard student={studentTwo} />
      <StudentCard student={studentThree} />
    </>
  )
}

export default App