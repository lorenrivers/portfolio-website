import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";
import MobileHeader from "./MobileHeader";

export default function Header() {
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
    <header>
      <div className="flex justify-between p-10">
        <h1 className="font-roboto font-bold text-xl">Loren Rivers</h1>
        <nav className="flex gap-5">
          <Link to="/">
            <span className="font-roboto font-bold text-xl underline decoration-transparent hover:decoration-teal-700 hover:text-teal-700 hover:transition-colors hover:duration-300">
              Home
            </span>
          </Link>
          <Link to="/portfolio">
            <span className="font-roboto font-bold text-xl underline decoration-transparent hover:decoration-teal-700 hover:text-teal-700 hover:transition-colors hover:duration-300">
              Portfolio
            </span>
          </Link>
          <Link to="/contact">
            <span className="font-roboto font-bold text-xl underline decoration-transparent hover:decoration-teal-700 hover:text-teal-700 hover:transition-colors hover:duration-300">
              Contact
            </span>
          </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </header>
  );
}
