import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Contact from "./pages/Contact";

const publicUrl = process.env.PUBLIC_URL || "";
const redirectedRoute = new URLSearchParams(window.location.search).get("route");

if (redirectedRoute) {
  window.history.replaceState(null, "", `${publicUrl}${redirectedRoute}`);
}

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL || "/"}>
      <div className="flex flex-col min-h-screen" id="barczak-okna">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/oferta" element={<Offer />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
