import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddTopicCard = () => {
  return (
    <div>
      <div className="group w-full h-24 border-2 bg-white border-gray-300 rounded-xl p-6 hover:border-gray-400 transition-all cursor-pointer">
        <div className="h-full flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 group-hover:bg-gray-300 transition-colors flex items-center justify-center">
            <AiOutlinePlus className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
          </div>
          <p className="font-medium text-gray-600 group-hover:text-gray-800 transition-colors">
            Add Topic
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddTopicCard;
