import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import Contact from "./components/Contact";
import Service from "./pages/Service";
import Career from "./pages/Career";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/career" element={<Career />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
