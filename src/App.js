import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";


import { Routes, Route } from "react-router-dom";

function App() {

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;