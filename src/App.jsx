import Header from "./components/Header";
import Main from "./components/Main";
import PoemDetail from "./components/PoemDetail";
import FavoritePoems from "./components/FavoritePoems";
import FavoritePoemsProvider from "./context/poem-context";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route } from "react-router-dom";

function App() {
   return (
      <FavoritePoemsProvider>
         <div className="App ">
            <Header />
            <div className="min-w-[70%] max-w-[1280px]">
               <Routes>
                  <Route exact path="/" element={<Main />} />
                  <Route path="/favoritePoems" element={<FavoritePoems />} />

                  <Route
                     path=":whatever?/poem/:titleAuthor"
                     element={<PoemDetail />}
                  />

                  <Route path="*" element={<PageNotFound />} />
               </Routes>
            </div>
         </div>
      </FavoritePoemsProvider>
   );
}

export default App;
