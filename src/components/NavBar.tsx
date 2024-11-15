import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-slate-800 w-full px-10 sm:px-20 lg:px-40 h-16">
            <div className='flex justify-between items-center h-full'>
                <Link className='text-white font-bold font-mono text-xl sm:text-3xl transition-transform duration-300 hover:scale-105' href="/">
                &lt;<span>Listi</span>
                <span className='text-green-500'>fy</span>
                &nbsp;/&gt;
                </Link>
                <Link className='text-black text-xs sm:text-sm bg-green-500 px-5 py-2 rounded hover:bg-green-800 hover:text-white transition-transform duration-300 hover:scale-105' href="/dashboard">Go to Dashboard</Link>
            </div>
        </nav>
    );
};

export default NavBar;