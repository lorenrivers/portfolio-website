import { Routes, Route, Link } from "react-router-dom";
import App from "../App";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";

export default function Header() {
  return (
    <div>
      <h1>Loren Rivers</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </nav>
    </div>
  );
}
