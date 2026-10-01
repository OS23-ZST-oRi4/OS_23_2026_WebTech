
import Technology from "./components/Technology";
import Student from "./components/Student";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Book from "./components/Book";

function App() {

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
    },
    {
      id: 4,
      name: "Express",
      category: "Backend",
      hours: 25
    },
    {
      id: 5,
      name: "MongoDB",
      category: "Baza danych",
      hours: 20
    }
  ];

  const students = [
    { id: 1, name: "Anna", className: "4P", age: 17, specialization: "Programmer" },
    { id: 2, name: "Jan", className: "4P", age: 16, specialization: "Programmer" },
    { id: 3, name: "Adam", className: "4P", age: 18, specialization: "Programmer" }
  ];

  const books = [
    { id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
    { id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "Lalka", author: "Bolesław Prus" }
  ];

  return (
    <>
      <Header />
      <main>
        <section>
          {technologies.map((technology) => (
            <Technology
              key={technology.id}
              name={technology.name}
              category={technology.category}
              hours={technology.hours}
            />
          ))}
        </section>
        <hr />
        <section>
          {
            students.map(v => {
              return (<Student
                key={v.id}
                name={v.name}
                className={v.className}
                age={v.age}
                specialization={v.specialization}
              />);
            })
          }
        </section>
        <hr />
        <section>
          {
            books.map(v => (
              <Book
                key={v.key}
                title={v.title}
                author={v.author}
              />
            ))
          }
        </section>
        <hr />
        {
          books.map(v => {
            return (<Book
              key={v.key}
              title={v.title}
              author={v.author}
            />)
          })
        }
      </main>

      <Footer />
    </>
  );
}

export default App;