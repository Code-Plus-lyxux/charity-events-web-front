'use client';
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(true); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) { 
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <nav className="navbar font-roboto flex justify-between items-center p-3 h-[75px] border-b-[1px] border-solid border-[#E5E5E5]">
      {!isMobileMenuOpen ? (
        <>
          <div className="logo">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-[50px] h-[50px]"
            />
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
              <img src="/icons/menu.png" alt="Menu" className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden md:flex justify-end items-center gap-6">
            {isLoggedIn ? (
              <ul className="nav-links flex items-center gap-6 text-[20px] font-semibold">
                <li><a href="/Home" className="hover:text-greenbutton">Home</a></li>
                <li><a href="/all-events" className="hover:text-greenbutton">All Events</a></li>
                <li><a href="/edit_events" className="hover:text-greenbutton">Your Events</a></li>
                <li><a href="/host-events" className="hover:text-greenbutton">Host Your Events</a></li>
                <li>
                  <a href="/profile/1">
                    <img
                      src="/nuwan-silva.png"
                      alt="Profile"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                  </a>
                </li>
              </ul>
            ) : (
              <div className="flex gap-4">
                <button className="bg-greenbutton text-white rounded-full px-6 py-2">Login</button>
                <button className="border border-black rounded-full px-6 py-2 hover:bg-greenbutton hover:text-white">Sign Up</button>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="absolute  z-10 top-0 left-0 w-full h-[300px] bg-greenbutton  md:hidden">
          <div className="flex justify-end p-5">
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
              <img src="/icons/menu.png" alt="Menu" className="w-[24px] h-[24px] " />
            </button>
          </div>
          {isLoggedIn ? (
            <ul className="flex flex-col items-start p-4 gap-4">
              <li>
                <a href="/profile/1" className="flex items-center gap-2">
                  <img
                    src="/nuwan-silva.png"
                    alt="Profile"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <span className="text-white font-semibold text-[12px]">Profile</span>
                </a>
              </li>
              <li><a href="/Home" className="text-white font-semibold text-[12px]">Home</a></li>
              <li><a href="/all-events" className="text-white font-semibold text-[12px]">All Events</a></li>
              <li><a href="/your-events" className="text-white font-semibold text-[12px]">Your Events</a></li>
              <li><a href="/host-events" className="text-white font-semibold text-[12px]">Host Your Events</a></li>
            </ul>
          ) : (
            <div className="flex flex-col items-center p-4 gap-4">
              <button className="bg-greenbutton text-white rounded-full px-6 py-2">Login</button>
              <button className="border-2 border-black rounded-full px-6 py-2 hover:bg-greenbutton hover:border-greenbutton hover:text-white">Sign Up</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
