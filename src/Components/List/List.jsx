//Icons Import
import { ThreeDotsV} from "../../Icons/Icons";
import AddCard from "./AddCard";

// Components Import
import Card from "./Card";



export default function List({ title, cards   }) {




  return (
    <div className="h-fit  bg-white px-5 py-3 border-solid border divide-y-2  border-[#edf0ff] rounded-lg">
      <div className="flex justify-between items-center py-2">
        <h1 className="font-bold">{title}</h1>
        <ThreeDotsV />
      </div>

      <div className="py-2">
        {cards &&
          cards.map((card) => <Card key={card.id} card={card}/>)
          }

       <AddCard status={title} />
   
 
      
      
      
      </div>
    </div>
  );
}
