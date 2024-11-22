"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const Add = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/topics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create topic');
      }

      await response.json();
      router.push('/my-list');
      router.refresh();
      
    } catch (error) {
      console.error('Error creating topic:', error);
      alert('Failed to create topic. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar isDashboard={true} />
      <main className="flex-grow flex justify-center items-center">
        <div className="w-[300px] sm:w-[400px] lg:w-[500px] px-4">
          <h1 className="text-5xl font-bold font-mono text-center mb-8">Add Topic</h1>
          <form onSubmit={handleSubmit} className="space-y-6 sm:p-10 sm:border-2 border-gray-200 rounded-3xl mb-5">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Topic Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="Enter topic title"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Topic Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                placeholder="Enter topic description"
                required
              />
            </div>
            <div className='w-full flex justify-center'>
                <button 
                type="submit"
                disabled={isLoading}
                className="w-fit px-10 py-3 bg-green-500 hover:text-white rounded-lg hover:bg-green-800 transition-transform duration-300 hover:scale-105 font-medium"
                >
                {isLoading ? 'Adding...' : 'Add Topic'}
                </button>
            </div>
          </form>
          <div className='flex justify-center'>

          <Link href="/my-list" className='hover:underline hover:text-green-500'>Go Back</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Add;