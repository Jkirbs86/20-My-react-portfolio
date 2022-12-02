import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-cener">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md: text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mb-8">
                       My name is Jared Kirby. 
                    </h1>
                    <p className="mb-8 leading-relaxed text-white">
                       A little about me. I was born and have lived in Utah all my life. I enjoy watching and playing basketball, and as you can guess my favorite basketball team is the
                       Utah Jazz. I enjoy art and expressing myself through my art. I have been a student at the University of Utah and am looking forward to furthering my career in 
                       web development. I hope to be able to use my love for art and combining it with coding. 
                    </p>

                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    {/* its a me */}
                    <img className="object-cover object-cneter rounded" alt="picture of me" src={require("../me.jpg")}/>
                </div>
            </div>
        </section>
    )
}

{/* <div className="flex justify-center">
<a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
    Work With Me
</a>
<a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
See My Past Work
</a>
</div> */}