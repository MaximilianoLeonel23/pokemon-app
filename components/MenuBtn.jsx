"use client";
import menuBtn from "@/assets/icons/menuBtn.svg";
import Image from "next/image";
import { useState } from "react";
const MenuBtn = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu((prevMenu) => !prevMenu);
  };
  return (
    <div
      className={`rounded-full border border-zinc-700 p-2 ${
        openMenu ? "-rotate-180" : "rotate-45"
      } transition-transform duration-300`}
      onClick={handleMenu}
    >
      <Image src={menuBtn} alt="menu button" />
    </div>
  );
};

export default MenuBtn;
