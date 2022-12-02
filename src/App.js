import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

import "./index.css";

export default function App() {

  return (
    <div className="container mx-auto bg-stone-400 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-white font-bold mb-5 flex justify-center">
      
      </p>

      <main className="text-stone-100 bg-slate-700 body-font">
        
        <PortfolioContainer />
        
      </main>

        <Footer />

    </div>
  );
}