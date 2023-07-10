import React from "react";
import Link from "next/link";

import MenuBtn from "./MenuBtn";
const Navbar = () => {
  return (
    <>
      <div className="hidden sm:flex">
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/pokedex">Pokedex</Link>
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
