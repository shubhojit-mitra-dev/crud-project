import React from 'react';
import Footer from '@/components/Footer';

const MyListLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    );
};

export default MyListLayout;