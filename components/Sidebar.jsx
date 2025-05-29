'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path ? 'bg-purple-100' : 'bg-gray-100';
  };

  return (
    <div className="fixed left-0 top-0 w-20 h-full bg-white border-r border-gray-200 z-[999]">
      <div className="flex flex-col items-center h-full py-4">
        <Link href="/" className="mb-4">
          <div className="bg-purple-800 text-white p-3 rounded-lg">
            <RxSketchLogo size={20} />
          </div>
        </Link>
        <div className="flex-1 flex flex-col items-center gap-4 mt-4">
          <Link href="/dashboard" className="w-full px-2">
            <div className={`${isActive('/dashboard')} hover:bg-gray-200 p-3 rounded-lg flex justify-center`}>
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/profile" className="w-full px-2">
            <div className={`${isActive('/profile')} hover:bg-gray-200 p-3 rounded-lg flex justify-center`}>
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/workouts" className="w-full px-2">
            <div className={`${isActive('/workouts')} hover:bg-gray-200 p-3 rounded-lg flex justify-center`}>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href="/dashboard/settings" className="w-full px-2">
            <div className={`${isActive('/dashboard/settings')} hover:bg-gray-200 p-3 rounded-lg flex justify-center`}>
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
