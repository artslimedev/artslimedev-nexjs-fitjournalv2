"use client";

import Link from "next/link";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="fixed hidden md:flex w-20 h-screen p-4 bg-white border-r-[1px] flex-col justify-between">
      <div className="flex flex-col items-center">
        <Link href="/">
          <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
            <RxSketchLogo size={20} />
          </div>
        </Link>
        <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
        <Link href="/dashboard">
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
            <RxDashboard size={20} />
          </div>
        </Link>
        <Link href="/profile">
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
            <RxPerson size={20} />
          </div>
        </Link>
        <Link href="/settings">
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
            <FiSettings size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
