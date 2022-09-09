import React from "react";
import Link from "next/link";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in-out duration-300 tracking-widest">
      <div className=" m-auto flex justify-between items-center p-4 text-white">
        {/* Mobile Button */}
        <div className="block sm:hidden z-10 p-6">
          <HiOutlineMenuAlt4 className="scale-x-150 opacity-70" size={35}/>
        </div>
        {/* Mobile Menu */}
        <div className="sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 text-black bg-primary-red">
          <ul>
            <li className="p-6 text-5xl text-bold hover:text-gray-100">
              <Link href="/#about">ABOUT</Link>
            </li>
            <li className="p-6 text-5xl hover:text-gray-100">
              <Link href="/#music">MUSIC</Link>
            </li>
            <li className="p-6 text-5xl hover:text-gray-100">
              <Link href="/#tour">TOUR</Link>
            </li>
            <li className="p-6 text-5xl hover:text-gray-100">
              <Link href="/store">STORE</Link>
            </li>
          </ul>
        </div>
        {/* Web Menu  */}
        <ul className="hidden sm:flex">
          <li className="p-8">
            <Link href="/#about">ABOUT</Link>
          </li>
          <li className="p-8">
            <Link href="/#music">MUSIC</Link>
          </li>
          <li className="p-8">
            <Link href="/#tour">TOUR</Link>
          </li>
          <li className="p-8">
            <Link href="/store">STORE</Link>
          </li>
        </ul>
        <Link href="/">
          <h1 className="font-bold text-4xl">KAR</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
