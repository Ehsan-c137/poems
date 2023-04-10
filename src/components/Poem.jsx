import StarIcon from "../assets/icons/StarIcon";
import { poemContext } from "../context/poem-context";
import { useState } from "react";
import { Link } from "react-router-dom";

const Poem = ({ poemData }) => {
   const { addPoem, deletePoem } = poemContext();
   const [showPoem, setShowPoem] = useState(false);

   const starClickHandler = () => {
      if (poemData.isFav) {
         deletePoem(poemData.data.title);
      } else {
         addPoem(poemData.data.title);
      }
   };

   const showPoemHandler = () => {
      setShowPoem(!showPoem);
   };

   return (
      <li
         className="flex p-4 max-w-6xl mb-4 border-b-2 rounded-t-md rounded-tr-md border-[#dcdcdc15] bg-[#55555538] text-sm md:text-xl min-w-[70%]"
         key={poemData.data.title}
      >
         <div className="flex justify-between min-w-full">
            <div className="flex flex-col">
               <p
                  className="text-m text-[#ffdbaf] cursor-pointer "
                  onClick={showPoemHandler}
               >
                  {poemData.data.title}
               </p>
               <p className="text-l font-bold text-[#dcdcdc] mt-4 ">
                  {poemData.data.author}
               </p>
            </div>
            <div className="flex flex-col justify-between items-end  ">
               <StarIcon
                  isFavorite={poemData.isFav}
                  clickHandler={starClickHandler}
               />
               <Link
                  to={`poem/${poemData.data.title} - ${poemData.data.author}`}
                  className="text-white mt-4 cursor-pointer text-sm"
               >
                  Read
               </Link>
            </div>
            {/* {showPoem && <p className="text-white">{poemData.data.lines[0]}</p>} */}
         </div>
      </li>
   );
};

export default Poem;
