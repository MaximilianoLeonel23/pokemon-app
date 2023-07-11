import React from "react";
import Link from "next/link";

import MenuBtn from "./MenuBtn";
const Navbar = () => {
  return (
    <>
      <div className="hidden sm:flex">
        <nav>
          <ul className="flex items-center gap-2 text-zinc-700 text-sm font-medium">
            <li>
              <Link href="/pokedex" className="nav-link">
                Pokedex
              </Link>
            </li>
            <li>
              <Link href="/types" className="nav-link">
                Types
              </Link>
            </li>
            <li>
              <Link href="/abilities" className="nav-link">
                Abilities
              </Link>
            </li>
            <li>
              <Link href="/regions" className="nav-link">
                Regions
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex sm:hidden">
        <MenuBtn />
      </div>
    </>
  );
};

export default Navbar;
