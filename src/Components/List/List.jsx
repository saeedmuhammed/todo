//Icons Import
import { ThreeDotsV, Plus, Exit } from "../../Icons/Icons";

// Components Import
import Card from "./Card";

export default function List({ title, cards }) {
  return (
    <div className="h-fit  bg-white px-5 py-3 border-solid border divide-y-2  border-[#edf0ff] rounded-lg">
      <div className="flex justify-between items-center py-2">
        <h1 className="font-bold">{title}</h1>
        <ThreeDotsV />
      </div>

      <div className="py-2">
        {cards &&
          cards.map((card, index) => <Card key={index} title={card.title} />)}

        {/* add title */}
        <div className="bg-[#F2F4FF]  p-2 rounded-lg my-2 pb-10">
          <input
            type="text"
            placeholder="Enter a title for this card"
            className="bg-transparent placeholder-[#ACB5FF] text-sm w-full placeholder-xs"
          />
        </div>
        {/* add a card  */}
        <div className="flex items-center">
          <Plus className="inline-block mr-3" />
          <h1 className="inline-block opacity-50">Add a card</h1>
        </div>
        {/* add card */}
        <div className="flex  items-center">
          <button className=" bg-primary px-5 py-3 text-white rounded-lg text-sm">
            {" "}
            Add card{" "}
          </button>
          <Exit className="inline-block ml-3" />
        </div>
      </div>
    </div>
  );
}
