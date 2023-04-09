import React, { useEffect, useState } from "react";
import Poem from "./Poem";
import { poemContext } from "../context/poem-context";

const FavoritePoems = () => {
   const { poems } = poemContext();
   const [favPoems, setFavPoems] = useState([]);

   useEffect(() => {
      const favP = [];
      poems?.map((poem) => {
         if (poem.isFav) {
            favP.push(poem);
         }
      });
      setFavPoems(favP);
   }, [poems]);

   return (
      <div className="mt-8">
         <p className="text-[#ffdbaf] text-center mb-8">
            Add your favorite poem
         </p>
         {favPoems?.map((poem) => {
            return <Poem poemData={poem} key={poem.data.title} />;
         })}
      </div>
   );
};

export default FavoritePoems;
