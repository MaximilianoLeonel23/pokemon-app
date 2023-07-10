"use client";
import Image from "next/image";
import psyduck from "@/assets/images/psyduck.svg";
import Link from "next/link";
const error = () => {
  return (
    <main className="container">
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="mt-16 h-60 w-60">
          <Image src={psyduck} alt="psyduckError" className="w-full h-full" />
        </div>
        <h3 className="text-zinc-700 text-center">
          Seems like you're kinda lost.{" "}
          <Link href="/" className="text-type-water">
            Come with me to the home page
          </Link>
        </h3>
      </section>
    </main>
  );
};

export default error;
