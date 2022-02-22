import Home from "./components/Pages/Home";
import Ranking from "./components/Pages/Ranking";
import Contact from "./components/Pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/template/Layout";

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/parceiros" element={<Layout />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
