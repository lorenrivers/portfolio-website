import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Loren Rivers</h1>
        <nav className="flex gap-3">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
}
