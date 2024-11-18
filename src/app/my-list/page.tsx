"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import AddTopicCard from "@/components/ui/AddTopicCard";
import TopicCard from "@/components/ui/TopicCard";

interface Topic {
  _id: string;
  title: string;
  description: string;
}

export default function MyList() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTopics = async () => {
      try {
        const response = await fetch('/api/topics');
        if (!response.ok) {
          throw new Error('Failed to fetch topics');
        }
        const data = await response.json();
        setTopics(data);
      } catch (error) {
        console.error('Error fetching topics:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getTopics();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar isDashboard={true} />
      <main className="flex-grow flex justify-center">
        <div className="w-[300px] sm:w-[400px] lg:w-[500px] px-4">
          <h1 className="text-4xl font-bold text-center my-8">My List</h1>
          <div className="space-y-4 mb-20">
            <AddTopicCard />
            {isLoading ? (
              <p className="text-center">Loading topics...</p>
            ) : (
              topics.map((topic) => (
                <TopicCard
                  key={topic._id}
                  id={topic._id}
                  title={topic.title}
                  description={topic.description}
                />
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}