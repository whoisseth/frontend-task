"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  const [animationParent] = useAutoAnimate();
  const [open, setOpen] = useState(false);
  return (
    <nav className=" w-full border-b shadow-sm py-3 relative ">
      <div
        ref={animationParent}
        className=" max-w-5xl  px-2  flex justify-between gap-2 w-full  mx-auto   "
      >
        <div className="text-3xl">Logo</div>
        {/* mobile dive */}
        <IoMenu
          size="32"
          className="sm:hidden cursor-pointer z-50 "
          onClick={() => setOpen(!open)}
        />
        {open && (
          <div className="flex flex-col sm:hidden absolute bg-background h-screen w-[200px] border-left shadow right-0 pt-10 items-end pr-5">
            <Link href={"#"} className="underline">
              About
            </Link>
            <Link href={"#"} className="underline">
              Contact
            </Link>
          </div>
        )}
        <section className=" items-center gap-3 hidden sm:flex">
          <Link href={"#"} className="underline">
            About
          </Link>
          <Link href={"#"} className="underline">
            Contact
          </Link>
        </section>
      </div>
    </nav>
  );
}
