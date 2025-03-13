import "./App.css";
import { useState } from "react"; // Add useState import
import { Link, Outlet, useLocation } from "react-router"; // Add useLocation import

function App() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname); // Initialize state with current path

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <div className="app-container">
      <header>
        <nav className="navbar">
          <div className="navbar-left">
            <img src="/images/logo.png" alt="Logo" className="logo" />
            <span className="site-name">Costa Caribe Sur</span>
          </div>
          <div className="navbar-right">
            <Link
              to="/"
              className={`nav-link ${activeLink === "/" ? "active" : ""}`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <Link
              to="/specialties"
              className={`nav-link ${
                activeLink === "/specialties" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/specialties")}
            >
              Specialties
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 Costa Caribe Sur</p>
      </footer>
    </div>
  );
}

export default App;
