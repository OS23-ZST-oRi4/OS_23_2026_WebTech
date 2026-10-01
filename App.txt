
import Technology from "./components/Technology";
import Student from "./components/Student";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Book from "./components/Book";
import Product from "./components/Product";
import User from "./components/User";

function App() {

  function selectProduct(name) {
    console.log("Wybrany produkt: " + name);
  }

  function selectTechnology(name) {
    console.log("Wybrano: " + name);
  }

  const technologies = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      hours: 30
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      hours: 40
    },
    {
      id: 3,
      name: "MySQL",
      category: "Baza danych",
      hours: 20
    }
  ];

  return (
    <>
      <Product name="Laptop" price={3500} selectProduct={selectProduct} />

      <User name="Anna" role="Administrator" />
    </>
    

  )
}

export default App;