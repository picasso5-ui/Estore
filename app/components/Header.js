import { FaShoppingCart } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="p-3 border-b-2 border-[#f5f3ff]">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="flex items-center">
          <h4 className="text-2xl text-purple-500 font-bold">picasso</h4>
          <h1 className="ml-2 text-2xl lg:text-3xl font-bold text-gray-700">eStore</h1>
        </div>
        <div className="flex items-center relative">
          <FaShoppingCart className="text-3xl text-[#582086] cursor-pointer" />
          <div className="ml-2 bg-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-white text-sm font-semibold">
            1
          </div>
          <div className="ml-4">
            <UserButton afterSignOutUrl="/" className='mt-4'/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
