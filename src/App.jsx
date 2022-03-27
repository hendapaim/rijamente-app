import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PerfilPage from "./pages/perfil/PerfilPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/sobre" element={<AboutPage />} />
        <Route exact path="/in/:email" element={<PerfilPage />} />
        <Route path='*' exact={true} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
