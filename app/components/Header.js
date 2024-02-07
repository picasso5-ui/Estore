"use client";

import { FaShoppingCart } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";
import useCartStore from "../cartStore";
import Link from "next/link";

const Header = () => {
  const totalItems = useCartStore((state) => state.totalItems);
  return (
    <div className="p-3 border-b-2 border-[#f5f3ff] bg-black">
      <div className="max-w-7xl mx-auto flex items-center ">
        <div className=" ">
          <Link href="/">
            <h1 className="ml-2 text-2xl lg:text-3xl font-bold text-white">
              eStore
            </h1>
          </Link>
        </div>

        <div className="flex items-center relative justify-between">
          <div>
            <Link href="/cart">
              <FaShoppingCart className="text-3xl text-[#582086] cursor-pointer" />
            </Link>
          </div>

          {totalItems > 0 && (
            <div className="ml-2 bg-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-white text-sm font-semibold">
              {totalItems}
            </div>
          )}

          <div className="ml-4">
            <UserButton afterSignOutUrl="/" className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
