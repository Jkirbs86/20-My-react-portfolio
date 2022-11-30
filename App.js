import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

import "./index.css";

export default function App() {

  return (
    <div className="container mx-auto bg-sky-800 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-white font-bold mb-5 flex justify-center">
      Cory Metcalf
      </p>

      <main className="text-gray-400 bg-gray-900 body-font">
        
        <PortfolioContainer />
        
      </main>

        <Footer />

    </div>
  );
}