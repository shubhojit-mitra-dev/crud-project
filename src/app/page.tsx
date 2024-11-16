import React from "react";
import NavBar from "@/components/NavBar";
import TypeWriter from "@/components/ui/TypeWriter";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar isDashboard={false} />
      <main className="flex-grow mt-24 flex justify-center">
        <div className="text-center">
          <h1 className="font-extrabold text-slate font-mono text-3xl sm:text-5xl transition-transform duration-300 hover:scale-105 cursor-default">
            &lt;<span>Listi</span>
            <span className="text-green-500">fy</span>
            &nbsp;/&gt;
          </h1>
          <h2 className="sm:text-6xl text-4xl font-mono my-14 font-bold transition-transform duration-300 hover:scale-105 cursor-default">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
