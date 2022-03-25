import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/sobre" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
