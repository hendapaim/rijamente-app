import logo from "../logo.png";
import "./HomePage.css";
import Header from "../components/Header";

function HomePage() {
  return (
    <>
      <title>Home | Rijamente</title>
      <Header />
      
      <div className="App">
        <header className="App-header">
          <p>Bem-Vindo a Sua sebenta!</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Estámos a criar o melhor para sua formação.</p>
        </header>
      </div>
    </>
  );
}

export default HomePage;
