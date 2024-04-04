import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";
import MobileHeader from "./MobileHeader";

export default function Header() {
  // Insert conditional rendering for different menus based on screen size
  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 640;

  useEffect(() => {
    // event listener that updates the "width" state variable when the window size changes.
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // clean-up function to remove the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  if (width < breakpoint) {
    return <MobileHeader />;
  }

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
