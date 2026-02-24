"use client";

import content from "../../content.json";
const {
  navbar
} = content;
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
const Navbar = () => {
  const {
    data: session
  } = useSession();
  const [dropdown, setDropdown] = useState(false);
  return <nav className={`bg-gray-900 px-8 text-white transition-all duration-500 ease-in-out ${dropdown ? "py-6" : "py-3"} `}>
      <div className="flex justify-between items-center">
      <Link href={'/'}>
      <div className="logo font-bold text-2xl">{navbar.navbar_logo}</div></Link> 
        <div className="butons flex justify-between gap-4 relative">
          {session && <div className="dropdown">
              <button onClick={() => setDropdown(!dropdown)} onBlur={() => {
            setDropdown(!dropdown);
          }} id="dropdownDefaultButton" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                welcome {session.user.name}
                <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              {/* Animated Dropdown Menu */}
              <div id="dropdown" className={`transition-all duration-300 ease-in-out overflow-hidden absolute mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 ${dropdown ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Earnings
                    </Link>
                  </li>
                  <li>
                    <button onClick={() => signOut()} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </div>}
          {!session && <Link href={"/login"}>
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{navbar.navbar_login}</button>
            </Link>}

          {session && <button onClick={() => signOut()} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{navbar.navbar_logout}</button>}
        </div>
      </div>
    </nav>;
};
export default Navbar;