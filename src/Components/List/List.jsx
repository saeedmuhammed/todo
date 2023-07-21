//Icons Import
import { ThreeDotsV } from "../../Icons/Icons";
import AddCard from "./AddCard";

// Components Import
import Card from "./Card";

import { Droppable, Draggable } from "react-beautiful-dnd";

export default function List({ title, cards }) {
  return (
    <div className="h-fit  bg-white px-5 py-3 border-solid border  border-[#edf0ff] rounded-lg">
      <div className="flex justify-between items-center py-2 border-b border-secondary ">
        <h1 className="font-bold">{title}</h1>
        <ThreeDotsV />
      </div>

      <Droppable droppableId={title}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="py-2"
          >
            {cards &&
              cards.map((card, index) => (
                <Draggable
                  key={card.id}
                  draggableId={card.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Card card={card} index={index} />
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AddCard status={title} />
    </div>
  );
}
