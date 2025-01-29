import React from "react";
import { useState } from "react";
import { IKImage } from "imagekitio-react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo*/}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="my logo" w={32} h={32} />

        <span>Mulys Blog</span>
      </Link>
      {/* mobile menu*/}
      <div className="md:hidden">
        {/* mobile humburger button*/}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "="}
        </div>
        {/* mobile link list*/}
        <div
          className={` w-full h-screen flex flex-col items-center gap-8 text-lg font-medium justify-center absolute top-16 bg-green-400 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          } `}
        >
          <Link to="/">Trending</Link>
          <Link to="/">Home</Link>
          <Link to="/">Most Populat</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
      {/* desktop menu*/}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium ">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Populat</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default NavBar;
