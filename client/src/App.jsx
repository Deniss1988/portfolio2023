import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import GuestLayout from "./layouts/GuestLayout/GuestLayout";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;