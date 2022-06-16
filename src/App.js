import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Ranking from "./components/Pages/Ranking";
import Contact from "./components/Pages/Contact";
import Security from "./components/Pages/Security";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./components/Pages/Account";
import Reset from "./components/Pages/Reset";
import Contributions from "./components/Pages/Contributions";
import DemandsSector from "./components/Pages/DemandsSector";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<About />} />

            <Route path="/ranking" element={<Ranking />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/faq" element={<Contact />} />
            <Route path="/ajuda" element={<Contact />} />
            <Route path="/login/*" element={<Home />} />

            <Route path="/seguranca" element={<Security />} />
            <Route path="/contribuicoes" element={<Contributions />} />
            <Route path="/demandas" element={<DemandsSector />} />
            <Route path="/resetar_senha/*" element={<Reset />} />
            <Route path="*" element={<h1>Página não encontrada</h1>} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/conta" element={<Account />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
