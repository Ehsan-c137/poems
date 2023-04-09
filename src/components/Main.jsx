import { useState } from "react";
import { poemContext } from "../context/poem-context";
import SyncLoader from "react-spinners/SyncLoader";
import Poem from "./Poem";
import axios from "axios";

const Main = () => {
   const [isloading, setIsLoading] = useState(false);
   const { poems, setPoems } = poemContext();

   const fetchData = () => {
      setIsLoading(true);
      axios
         .get("https://poetrydb.org/random/20")
         .then((data) => {
            const rawData = data.data;
            let uData = [];
            for (const data of rawData) {
               uData.push({ data, isFav: false });
            }

            setPoems(uData);
            setIsLoading(false);
         })
         .catch((error) => {
            console.log(error.message);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   return (
      <div className="flex flex-col justify-center items-center mt-8 ">
         <button
            onClick={fetchData}
            className="text-[#ffdbaf] p-2 hover:text-white hover:bg-[#ffdbaf2b] transition-colors duration-500"
         >
            {!poems ? "Fetch poems" : "Fetch new poems"}
         </button>

         <div className="min-width-full mb-8 mt-8">
            {isloading && (
               <div className="flex justify-center mt-8 mb-8">
                  <SyncLoader color="#ffdbaf" size={10} speedMultiplier={0.7} />
               </div>
            )}
            {poems?.map((poem, i) => {
               return (
                  <Poem
                     poemData={poem}
                     key={poem.data.title + poem.data.author}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default Main;
