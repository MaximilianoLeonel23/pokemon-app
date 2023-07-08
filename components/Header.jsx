import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <header className="container py-4 mb-4">
      <div className="flex items-center justify-between">
        <h4>
          <Link href="/">Pokemon App</Link>
        </h4>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
