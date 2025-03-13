import "./App.css";
// import Navbar from "./components/NavBar";
// import HeroSection from "./components/HeroSection";
// import Footer from "./components/Footer";
import { Link, Outlet } from "react-router";

function App() {
  return (
    <div className="app-container">
      <header>
        <nav className="navbar">
          <div className="navbar-left">
            <img src="/images/logo.png" alt="Logo" className="logo" />
            <span className="site-name">Costa Caribe Sur</span>
          </div>
          <div className="navbar-right">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/specialties" className="nav-link">
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
    // <main className="min-h-screen">
    //   <Navbar />
    //   <HeroSection />
    //   {/* <FeaturesSection />
    // <CTASection /> */}
    //   <Footer />
    // </main>
  );
}

export default App;
