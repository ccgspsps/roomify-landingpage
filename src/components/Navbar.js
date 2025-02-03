import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Close drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Menu items, used for both mobile and desktop
  const menuItems = (
    <>
      <Link href="/#" onClick={closeDrawer}>
        <span>Home</span>
      </Link>
      <Link href="/#Services" onClick={closeDrawer}>
        <span>Services</span>
      </Link>
      
      <Link href="/#Contact" onClick={closeDrawer}>
        <span>Contact Us</span>
      </Link>
    </>
  );

  return (
    <>
      <div className="w-full flex flex-row justify-center items-center z-30 relative">
        <div className="h-[60px] w-[90%] text-black text-lg flex flex-row justify-between items-center gap-5">
          <div>
            <Image
              src="/finallogoroomify.svg"
              width={150}
              height={100}
              alt="logo"
            />
          </div>

          {/* Menu for desktop */}
          <div className="hidden md:flex flex-row justify-end items-center gap-5">
            {menuItems}
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <label onClick={toggleDrawer}>
              <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                <input
                  className="hidden peer"
                  type="checkbox"
                  checked={isDrawerOpen}
                  readOnly
                />
                <div
                  className={`w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] ${
                    isDrawerOpen ? "rotate-[-45deg]" : ""
                  }`}
                ></div>
                <div
                  className={`w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center ${
                    isDrawerOpen ? "hidden" : ""
                  }`}
                ></div>
                <div
                  className={`w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] ${
                    isDrawerOpen ? "rotate-[45deg]" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeDrawer}
        ></div>
      )}

      {/* Drawer for Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-white text-black p-6 transition-transform transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
      >
        <div className="flex flex-col mt-5 gap-5">{menuItems}</div>
      </div>
    </>
  );
};

export default Navbar;
