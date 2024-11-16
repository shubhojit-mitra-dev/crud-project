import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const CollectionCard = () => {
  return (
    <div>
      <div className="group sm:w-64 w-full h-44 border-2 bg-white border-gray-300 rounded-xl p-6 hover:border-gray-400 transition-all cursor-pointer">
        <div className="h-full flex flex-col items-center justify-center gap-3">
          <p className="font-medium text-gray-600 group-hover:text-gray-800 transition-colors">
            Create Collection
          </p>
          <div className="w-12 h-12 rounded-full bg-gray-200 group-hover:bg-gray-300 transition-colors flex items-center justify-center">
            <AiOutlinePlus className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
