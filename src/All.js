import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Contacts from "./Components/Contacts"
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
