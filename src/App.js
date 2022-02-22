import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Ranking from "./components/Pages/Ranking";
import Partners from "./components/Pages/Partners";
import Contact from "./components/Pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/parceiros" element={<Partners />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
