import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Ranking from "./components/Pages/Ranking";
import Contact from "./components/Pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<About />} />

            <Route path="/ranking" element={<Ranking />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/conta" element={<Home />} />
            <Route path="*" element={<h1>Página não encontrada</h1>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
