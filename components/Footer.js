import React from "react";

const Footer = () => (
  <footer className="pt-6 flex justify-center items-center flex-wrap space-x-2">
    <section>
        <a 
            className='inline-block px-6 py-2.5 mb-2 text-black font-medium text-xl leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out bg-white'
            href="https://github.com/jkirbs86"
            target='_blank'
            aria-label='Github'
        > 
            <i className="fab fa-github" />
        </a>
        <a
            className='inline-block px-6 py-2.5 mb-2 text-black font-medium text-xl leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out bg-white'
            href="https://www.linkedin.com/in/jkirbs86/"
            target='_blank'
            aria-label='LinkedIn'
        >
            <i className='fab fa-linkedin' />
        </a>
    </section>
  </footer>
);

export default Footer;