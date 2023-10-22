import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import All from "./All";

import "./App.css";

function App() {
  return (
    <div className="cont">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
