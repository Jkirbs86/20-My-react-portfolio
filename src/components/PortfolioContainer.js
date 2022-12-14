import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Navbar') {
      return <Navbar />;
    }
  if (currentPage === 'Projects') {
     return <Projects />;
  }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}