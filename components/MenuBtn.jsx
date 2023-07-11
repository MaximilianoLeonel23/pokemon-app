"use client";
import menuBtn from "@/assets/icons/menuBtn.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const MenuBtn = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu((prevMenu) => !prevMenu);
  };
  return (
    <>
      <div
        className={`rounded-full border border-zinc-700 p-2 ${
          openMenu ? "-rotate-180" : "rotate-45"
        } transition-transform duration-300`}
        onClick={handleMenu}
      >
        <Image src={menuBtn} alt="menu button" />
      </div>
      <nav
        className={`${
          openMenu ? "translate-x-0" : "-translate-x-[125%]"
        } absolute right-4 left-4 top-16 p-4 bg-zinc-100 border border-zinc-200 rounded transition duration-300`}
      >
        <ul className="flex justify-around gap-2 text-zinc-700 text-sm font-medium">
          <li>
            <Link href="/pokedex" className="nav-link" onClick={handleMenu}>
              Pokedex
            </Link>
          </li>
          <li>
            <Link href="/types" className="nav-link" onClick={handleMenu}>
              Types
            </Link>
          </li>
          <li>
            <Link href="/abilities" className="nav-link" onClick={handleMenu}>
              Abilities
            </Link>
          </li>
          <li>
            <Link href="/regions" className="nav-link" onClick={handleMenu}>
              Regions
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MenuBtn;
