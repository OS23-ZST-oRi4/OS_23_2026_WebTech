import Header from "./components/Header.jsx";
import Technology from "./components/Technology.jsx";
import Footer from "./components/Footer.jsx";
import Student from "./components/Student.jsx"
import InfoBox from "./components/InfoBox.jsx"
import Navigation from "./components/Navigation.jsx";

function App() {
  function Header(){
    return(
      <div>
        <h1>Web Tech Header</h1>
      </div>
    )
  }

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

      </main>

      <Footer />
    </>
  );
}

export default App;