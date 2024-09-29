import About from "@/pages/Aboutpage";
import Contact from "@/pages/Contactpage";
import Details from "@/pages/Detailspage";
import Homepage from "@/pages/Homepage";
import Location from "@/pages/Locationpage";
import Product from "@/pages/Productpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/yachts" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/datails/:yachtId" element={<Details />} />
      </Routes>
    </Router>
  );
}
