import { useParams } from "react-router-dom";
import { poemContext } from "../context/poem-context";

const PoemDetail = () => {
   const { poems } = poemContext();
   const { titleAuthor } = useParams();
   const indexofHyphen = titleAuthor.lastIndexOf("-");
   const author = titleAuthor.slice(indexofHyphen + 1).trim();
   const title = titleAuthor.slice(0, indexofHyphen).trim();

   return (
      <div className="text-white p-8">
         <div className="bg-[#dcdcdc12]  pl-8 pr-8 pt-8 pb-0 rounded-tl-lg rounded-tr-xl ">
            <h3>{title}</h3>
            <h3 className="text-[#ffdbaf]">{author}</h3>
         </div>
         <p className="p-8 bg-[#dcdcdc12]">
            {poems.map((poem) => {
               const poemTitle = poem.data.title;
               const poemAuthor = poem.data.author;
               if (poemTitle == title && poemAuthor == author) {
                  console.log(poem);
                  return poem.data.lines.map((line) => {
                     return line;
                  });
               }
            })}
         </p>
      </div>
   );
};

export default PoemDetail;
