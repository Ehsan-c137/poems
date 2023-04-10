import React from "react";
import { Link, useHref } from "react-router-dom";

const Header = () => {
   const urlPath = useHref();

   return (
      <div className="flex items-center justify-around gap-4 w-full md:text-3xl text-white p-4 bg-[#ffffff0c]">
         {urlPath != "/" && (
            <Link
               className="hover:text-[#ffdbaf] transition-colors duration-300 "
               to="/"
            >
               Home
            </Link>
         )}
         <Link
            to="/favoritePoems"
            className=" hover:text-[#ffdbaf] transition-colors duration-300"
         >
            Favorites
         </Link>
      </div>
   );
};

export default Header;
