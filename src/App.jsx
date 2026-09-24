import './App.css'
import Header from "./components/Header"
import StudentCard from "./components/StudentCard"

function App() {
  return (
    <>
      <Header />
      <StudentCard
        name="Jan Kowalski"
        className="4P"
        specialization="technik programista"
        age={17}
        active={true}
      />
      <StudentCard
        name="Oliwier Nowak"
        className="4IP"
        specialization="technik informatyk"
        age={18}
        active={true}
      />
      <StudentCard
        name="Pablo Picasso"
        className="2I"
        specialization="technik malarz"
        age={67}
        active={false}
      />
    </>
  )
}

export default App
