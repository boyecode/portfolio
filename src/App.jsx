import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0B0F19] text-[#F9FAFB] min-h-screen scroll-smooth">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;