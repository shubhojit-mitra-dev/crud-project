import React from "react";
import NavBar from "@/components/NavBar";
import TypeWriter from "@/components/ui/TypeWriter";
import Footer from "@/components/Footer";
import Image from "next/image";

import nextImage from "@/assets/nextjs.svg";
import reactImage from "@/assets/react.svg";
import tailwindImage from "@/assets/tailwind.svg";
import typescriptImage from "@/assets/typescript.svg";
import mongodbImage from "@/assets/mongodb.svg";
import vercelImage from "@/assets/vercel.svg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar isDashboard={false} />
      <main className="flex-grow my-16 flex justify-center items-center">
        <div className="text-center">
          <h1 className="font-extrabold text-slate font-mono text-3xl sm:text-5xl transition-transform duration-300 hover:scale-105 cursor-default">
            &lt;<span>Listi</span>
            <span className="text-green-500">fy</span>
            &nbsp;/&gt;
          </h1>
          <h2 className="sm:text-6xl text-4xl font-mono my-10 font-bold transition-transform duration-300 hover:scale-125 cursor-default">
            <TypeWriter 
              text="<Welcome to my CRUD App />" 
              delay={100} 
              pauseTime={5000} 
            />
          </h2>
          <p className="sm:text-lg text-xs text-gray-800 max-w-xl mx-auto text-center transition-transform duration-300 hover:scale-105 cursor-default">
            This is a CRUD app built with Next.js, and MongoDB
            <br />
            for my DBMS Lab Minor Project.
          </p>
          <div className="mt-10">
            <h1 className="text-2xl font-bold">Tech Stack</h1>
            <div className="flex justify-center items-center">
              <ul className="mt-10 grid grid-cols-3 gap-x-10 gap-y-8">
                <li className="transition-transform duration-300 hover:scale-125 cursor-pointer"><Image src={nextImage} alt="Nextjs" width={50} height={50}/></li>
                <li className="transition-transform duration-300 hover:scale-125 cursor-pointer"><Image src={reactImage} alt="React" width={50} height={50}/></li>
                <li className="transition-transform duration-300 hover:scale-125 cursor-pointer"><Image src={tailwindImage} alt="Tailwind CSS" width={50} height={50}/></li>
                <li className="transition-transform duration-300 hover:scale-125 cursor-pointer"><Image src={typescriptImage} alt="TypeScript" width={50} height={50}/></li>
                <li className="transition-transform duration-300 hover:scale-125 cursor-pointer"><Image src={mongodbImage} alt="MongoDB" width={50} height={50}/></li>
                <li className="transition-transform duration-300 hover:scale-125 cursor-pointer"><Image src={vercelImage} alt="Vercel" width={50} height={50}/></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
