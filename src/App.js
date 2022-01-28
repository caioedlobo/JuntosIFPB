import Home from "./components/Pages/Home";
import Ranking from "./components/Pages/Ranking";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
