import { useState } from "react";
import { poemContext } from "../context/poem-context";
import SyncLoader from "react-spinners/SyncLoader";
import Poem from "./Poem";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Main = () => {
   const { poems, setPoems } = poemContext();
   const [isloading, setIsLoading] = useState(false);

   const notify = (msg) => toast.error(msg);

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

            setPoems((prevState) => {
               if (prevState != undefined) {
                  const nonRepetitivePoem = uData.filter(
                     (item1) =>
                        !prevState.some(
                           (item2) => item1.data.title === item2.data.title
                        )
                  );
                  return [...prevState, ...nonRepetitivePoem];
               } else {
                  return [...uData];
               }
            });

            setIsLoading(false);
         })
         .catch((error) => {
            notify(error.message);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   return (
      <div className="flex flex-col justify-center items-center mt-8 min-w-[70%] ">
         <button
            onClick={fetchData}
            className="text-[#ffdbaf] p-2 hover:text-white hover:bg-[#ffdbaf2b] transition-colors duration-500"
         >
            {!poems ? "Fetch poems" : "Fetch new poems"}
         </button>

         <div className="min-w-full mb-8 mt-8">
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
         <Toaster position="bottom-left" duration={3000} />
      </div>
   );
};

export default Main;
