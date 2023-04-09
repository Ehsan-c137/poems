import { createContext, useContext, useState } from "react";

const FavoritePoemsContext = createContext(null);

const FavoritePoemsProvider = ({ children }) => {
   const [poems, setPoems] = useState();

   const addPoem = (title) => {
      const indexInPoem = poems.findIndex((item) => item.data.title === title);

      if (!poems[indexInPoem].isFav) {
         setPoems((state) => {
            const data = state;
            data[indexInPoem].isFav = true;
            return [...data];
         });
      }
   };

   const deletePoem = (title) => {
      const indexInPoem = poems.findIndex((item) => item.data.title === title);
      if (poems[indexInPoem].isFav) {
         setPoems((state) => {
            const data = state;
            data[indexInPoem].isFav = false;
            return [...data];
         });
      }
   };

   return (
      <FavoritePoemsContext.Provider
         value={{ addPoem, deletePoem, setPoems, poems }}
      >
         {children}
      </FavoritePoemsContext.Provider>
   );
};

export default FavoritePoemsProvider;

export function poemContext() {
   return useContext(FavoritePoemsContext);
}
