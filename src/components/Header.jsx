import React from "react";
import { Link, useHref } from "react-router-dom";

const Header = () => {
   const urlPath = useHref();

   return (
      <div className="flex items-center justify-around w-full text-3xl text-white p-4 bg-[#ffffff0c]">
         {urlPath != "/" && (
            <Link
               className="float-right hover:text-[#ffdbaf] transition-colors duration-300"
               to="/"
            >
               Home
            </Link>
         )}
         <p className="float-left">Poems</p>

         <Link
            to="/favoritePoems"
            className="float-right hover:text-[#ffdbaf] transition-colors duration-300"
         >
            Favorites
         </Link>
      </div>
   );
};

export default Header;
