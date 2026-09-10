import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Oskar Sikora",
    technologiesCount: 3
  };

  const technology = {
    name: "React",
    category: "Frontend",
    hours: 30,
    active: true
  };

  const student = {
    name: "Oskar",
    surname: "Sikora",
    className: "4P",
    specialization: "technik programista"
  };

  const course = {
    name: "React/JSX",
    teacher: "Paul Friday",
    hours: 24,
    completed: true
  };

  return (
    <div>

      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>
        Liczba technologii: {app.technologiesCount}
      </p>

      <h1>{technology.name}</h1>

      <p>Kategoria: {technology.category}</p>

      <p>Liczba godzin: {technology.hours}</p>

      <h1>Uczeń: {student.name} {student.surname}</h1>

      <p>Klasa: {student.className}</p>

      <p>Kierunek {student.specialization}</p>

      <section className='courseSection'>
        <br></br>
        <h2>Nazwa kursu: {course.name}</h2>

        <p>Nauczyciel kursu: {course.teacher}, czas trwania: {course.hours} godziny</p>

        <p>Status ukończenia: {course.completed ? "Ukończony" : "W trakcie"}</p>

        <p>Wynik końcowy: {Math.floor(Math.random() * 101)}%</p>
      </section>
    </div>
  );

}

export default App;
