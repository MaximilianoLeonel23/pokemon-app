import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="hidden sm:flex">
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/pokedex">Pokedex</Link>
            </li>
            <li>
              <Link href="/news">Noticias</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex sm:hidden">Mobile</div>
    </>
  );
};

export default Navbar;
