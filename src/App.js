import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Ranking from "./components/Pages/Ranking";
import Contact from "./components/Pages/Contact";
import Security from "./components/Pages/Security";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./components/Pages/Account";
import Reset from "./components/Pages/Reset";

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<About />} />

            <Route path="/ranking" element={<Ranking />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/login/*" element={<Home />} />
            <Route path="/conta" element={<Account />} />
            <Route path="/seguranca" element={<Security/>} />
            <Route path="/contribuicoes" element={<Ranking />} />
            <Route path="/resetar_senha/*" element={<Reset />} />
            <Route path="*" element={<h1>Página não encontrada</h1>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
