"use client";
import React, { useState } from "react";
import Button from "./Button";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-20"> {/* Add fixed height container */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/30 shadow-lg hover:shadow-xl transition-shadow h-20">
        <div className="flex justify-between items-center p-8 max-sm:p-4">
          <div>
            <p className="text-3xl font-bold">CodeBase</p>
          </div>
          <div className="hidden md:block">
            <Button
              textColor="text-white"
              hoverColor="hover:bg-white"
              hoverText="hover:text-black"
              bgColor="bg-black"
            >
              LogIn
            </Button>
            <Button
              textColor="text-red"
              hoverColor="hover:bg-black"
              hoverText="hover:text-white"
              bgColor="bg-white"
            >
              SignUp
            </Button>
          </div>

          {/* MOBILE NAV */}
          <div className="block md:hidden">
            {open ? (
              <>
                <HiX
                  className="size-8"
                  onClick={() => setOpen((prev) => !prev)}
                />
                <div className="absolute right-2 bg-white p-8 shadow-xl shadow-gray-400/50 rounded-lg">
                  <div className="m-2">
                    <Button
                      textColor="text-white"
                      hoverColor="hover:bg-white"
                      hoverText="hover:text-black"
                      bgColor="bg-black"
                    >
                      LogIn
                    </Button>
                  </div>
                  <div className="m-2">
                    <Button
                      textColor="text-red"
                      hoverColor="hover:bg-black"
                      hoverText="hover:text-white"
                      bgColor="bg-white"
                    >
                      SignUp
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <HiMenu
                className="size-8"
                onClick={() => setOpen((prev) => !prev)}
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
