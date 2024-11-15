import React from "react";
import NavBar from "@/components/NavBar";
import TypeWriter from "@/components/ui/TypeWriter";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow mt-24 flex justify-center">
        <div className="text-center">
          <h1 className="font-extrabold text-slate font-mono text-3xl sm:text-5xl transition-transform duration-300 hover:scale-105 cursor-default">
            &lt;<span>Listi</span>
            <span className="text-green-500">fy</span>
            &nbsp;/&gt;
          </h1>
          <h2 className="sm:text-6xl text-4xl font-lora my-14 font-bold transition-transform duration-300 hover:scale-105 cursor-default">
            <TypeWriter 
              text="Welcome to my CRUD App" 
              delay={100} 
              pauseTime={5000} 
            />
          </h2>
          <p className="sm:text-lg text-sm font-mono text-gray-800 max-w-xl mx-auto text-center transition-transform duration-300 hover:scale-105 cursor-default">
            This is a CRUD app built with Next.js, and MongoDB
            <br />
            for my DBMS Lab Minor Project.
          </p>
        </div>
      </main>
      <footer className="w-full bg-slate-800 py-2 mt-auto flex justify-center">
        <span className="text-center text-white text-sm">&copy; 2024 Built by Shubhojit Mitra</span>
      </footer>
    </div>
  );
};

export default Home;
