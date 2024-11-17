"use client";

import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

interface TopicCardProps {
  id: string;
  title: string;
  description: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ id, title, description }) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/my-list/edit/${id}`);
  };

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this topic?');
    console.log('User chose:', confirmed ? 'Yes' : 'No');
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 lg:hover:scale-125 border border-gray-200 cursor-default">
      <div className="flex justify-between items-start my-2 mx-2">
        <div className="flex flex-col flex-grow">
          <h1 className="text-lg font-semibold text-gray-800 truncate">
            {title}
          </h1>
          <p className="text-sm text-gray-600 line-clamp-2 mt-1">
            {description}
          </p>
        </div>
        <div className="flex gap-2 ml-4">
          <button
            onClick={handleEdit}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Edit topic"
          >
            <FiEdit className="w-4 h-4 text-blue-500" />
          </button>
          <button
            onClick={handleDelete}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Delete topic"
          >
            <FiTrash2 className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;