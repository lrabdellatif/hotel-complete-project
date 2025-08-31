import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";
import Properties from "./components/Properties";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Backtotop from "./components/BackToTop";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Protected Route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Hero />
                <Welcome />
                <Gallery />
                <Properties />
                <Stats />
                <Testimonials />
                <Footer />
                <Backtotop />
              </>
            </ProtectedRoute>
          }
        />
        
        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}