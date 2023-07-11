import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";
const Header = () => {
  return (
    <header className="container py-4 mb-4">
      <div className="flex items-center justify-between">
        {/* <div className="flex items-center gap-2">
          <Image src={pokeball} alt="pokeball" />
          <h4>
            <Link href="/" className="font-black text-lg text-zinc-700">
              POKEAPP
            </Link>
          </h4>
        </div> */}
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
