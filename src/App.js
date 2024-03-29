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
import Faq from "./components/Pages/Faq";
import Help from "./components/Pages/Help";
import Demand from "./components/Pages/Demand";
import Outsourced from "./components/Pages/Outsourced";
import SectorAdmin from "./components/Pages/SectorAdmin";
import StatusAdmin from "./components/Pages/StatusAdmin";
import DemandAdmin from "./components/Pages/DemandAdmin";
/* import Axios from "axios";
Axios.create({baseURL: "https://backendjuntosifpb.herokuapp.com"}) */
function App() {
  
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<About />} />

            <Route path="/ranking" element={<Ranking />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/ajuda" element={<Help/>} />
            <Route path="/login/*" element={<Home />} />
            <Route path="/seguranca" element={<Security/>} />
            <Route path="/contribuicoes" element={<Contributions />} />
            <Route path="/demandas" element={<DemandsSector />} />
            <Route path="/servidores" element={<Outsourced />} />
            <Route path="/setor" element={<SectorAdmin />} />
            <Route path="/status" element={<StatusAdmin />} />
            <Route path="/demandas_admin" element={<DemandAdmin/>} />
            <Route path="/resetar_senha/*" element={<Reset />} />
            <Route path="/demanda/*" element={<Demand />} />
            <Route path="*" element={<h1>Página não encontrada</h1>} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/conta" element={<Account/>} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
