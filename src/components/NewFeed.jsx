import React from 'react';
import { FiUser,FiBookmark,FiAlertCircle } from "react-icons/fi";
import { PiTelevisionSimple } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { GrGroup } from "react-icons/gr";

const NewFeeds = () => {
  const feeds = [
    { icon: <PiTelevisionSimple/>, name: 'Newsfeed', color: 'bg-blue-500' },
    { icon: <FiUser/>, name: 'Badges', color: 'bg-orange-500' },
    { icon: <TbWorld/>, name: 'Explore Stories', color: 'bg-yellow-500' },
    { icon: <GrGroup/>, name: 'Popular Groups', color: 'bg-pink-500' },
    { icon: <FiUser/>, name: 'Author Profile', color: 'bg-blue-500' },
  ];

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">New Feeds</h2>
      <ul>
        {feeds.map((feed, index) => (
          <li key={index} className="flex items-center mb-3 last:mb-0">
            <div className={`${feed.color} w-10 h-10 rounded-full flex items-center justify-center text-white text-xl mr-3`}>
              {feed.icon}
            </div>
            <span className="text-gray-500 hover:text-[#7422c5] cursor-pointer font-bold ">{feed.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewFeeds;
