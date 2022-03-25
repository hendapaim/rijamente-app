import logo from "./logo.png";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <title>Rijamente</title>

      <div className="App">
        <Header />
        <header className="App-header">
          <p>Bem-Vindo a Sua sebenta!</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Estámos a criar o melhor para sua formação.</p>
        </header>
      </div>
    </>
  );
}

export default App;
