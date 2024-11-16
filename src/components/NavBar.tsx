// components/NavBar.tsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "./Loading";

const NavBar = ({ isDashboard }: { isDashboard?: boolean }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigate = async () => {
    setIsLoading(true);
    await router.prefetch("/my-list");

    setTimeout(() => {
      router.push("/my-list");
    }, Math.random() * (10000 - 5000) + 2000);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50">
          <Loading onLoadingComplete={() => setIsLoading(false)} />
        </div>
      )}
      <nav className="bg-slate-800 sticky top-0 w-full px-10 sm:px-20 lg:px-40 h-16">
        <div className="flex justify-between items-center h-full">
          <Link
            className="text-white font-bold font-mono text-xl sm:text-3xl transition-transform duration-300 hover:scale-110 cursor-pointer"
            href="/"
          >
            &lt;<span>Listi</span>
            <span className="text-green-500">fy</span>
            &nbsp;/&gt;
          </Link>
          {!isDashboard && (
            <button
              onClick={handleNavigate}
              className="text-black text-xs sm:text-base bg-green-500 px-10 py-2 rounded hover:bg-green-800 hover:text-white transition-transform duration-300 hover:scale-x-110 cursor-pointer"
            >
              My List
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
