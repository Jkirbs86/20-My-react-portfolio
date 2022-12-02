import React from "react";

export default function Navbar({ currentPage, handlePageChange}) {
    return (
        <header className="bg-stone-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <p className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                        About Me
                    </a>
                </p>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
                        Projects
                    </a>
                </nav>
                <p className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                    <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                        Resume
                    </a>
                </p>
                <a href="#contact"  onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                     Contact Me
                </a>
            </div>
        </header>
    );
}



// className="ml-3 text-xl"
// className="mr-5 hover:text-white"
// className="ml-3 text-xl"
// className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"