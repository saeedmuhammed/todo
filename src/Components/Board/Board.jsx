//Icons Import
import { useContext } from "react";
import {
  Plus,
  Star,
  Private,
  BoardOutline,
  DownArrow,
  PowerUp,
  Electric,
  Filter,
  ThreeDotsV,
} from "../../Icons/Icons";

// Image Import
import avatar from "../../Images/Ellipse 2.jpg";

// Components Import
import List from "../List/List";
import BoardOption from "./BoardOption";

// Context Import
import { CardsContext } from "../../Context/CradsContext";
import { DragDropContext } from "react-beautiful-dnd";

import axios from "axios";

const jwtToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg4NjcwNDg0LCJleHAiOjE2OTEyNjI0ODR9.oN0yD0pMSnavPTDKKFsRCEGOxz2fbbvCi-sX36vvyAc";
const config = {
  headers: {
    Authorization: `Bearer ${jwtToken}`,
    "Content-Type": "application/json",
  },
};

export default function Board() {
  const { lists, setLists, allCards, setAllCards } = useContext(CardsContext);
  const onDragEnd = async (result) => {
    if (!result.destination) return; // If the card is dropped outside of a droppable area or in the samelist, do nothing

    try {
      const dragedCard =
        lists[result.source.droppableId].cards[result.source.index];
      const updatedCard = {
        ...dragedCard,
        Status: result.destination.droppableId,
      };
      if (result.source.droppableId !== result.destination.droppableId) {
        // if the card is moved to another list
        await axios.put(
          `https://strapi.techytypes.com/todos/${dragedCard.id}`,
          JSON.stringify(updatedCard),
          config
        );
      }

      const updatedLists = { ...lists };
      updatedLists[result.source.droppableId].cards[
        result.source.index
      ].Status = result.destination.droppableId; // Update the status of the card in the source list
      const [removedItem] = updatedLists[
        result.source.droppableId
      ].cards.splice(result.source.index, 1); // Remove the card from the source list
      updatedLists[result.destination.droppableId].cards.splice(
        result.destination.index,
        0,
        removedItem
      ); // Add the card to the destination list

      setLists(updatedLists);

      //update allcards list that helps in search
      const updatedAllCards = allCards.map((card) =>
        card.id === updatedCard.id ? updatedCard : card
      );
      setAllCards(updatedAllCards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="row-start-1 col-span-6">
      {/* Board options */}
      <div className="flex  sm:flex-wrap  justify-between items-center mb-8">
        <div className="flex  md:flex-row gap-2 flex-wrap lg:flex-nowrap justify-start lg:justify-between items-center">
          <div>
            <h1 className="font-bold text-lg">Lucinda</h1>
          </div>

          <BoardOption icon={<Star />} width="w-8" height="h-8" />
          <BoardOption option="Private" icon={<Private />} />
          <BoardOption option="Board" icon={<BoardOutline />} />
          <BoardOption
            icon={<DownArrow />}
            bg="bg-secondary"
            width="w-8"
            height="h-8"
          />
        </div>
        <div className="flex  md:flex-row gap-2 flex-wrap lg:flex-nowrap justify-between items-center">
          <BoardOption option="Power-Ups" icon={<PowerUp />} />
          <BoardOption option="Automation" icon={<Electric />} />
          <BoardOption option="Filter" icon={<Filter />} />
          <img src={avatar} alt="avatar" className="rounded-full w-8 h-8" />
          <BoardOption option="Share" />
          <BoardOption
            icon={<ThreeDotsV />}
            bg="bg-secondary"
            width="w-8"
            height="h-8"
          />
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-3 lg:md:grid-cols-4 gap-4 grid-auto-rows-auto">
        <DragDropContext onDragEnd={onDragEnd}>
          {lists &&
            Object.entries(lists).map(([listTitle, { id, cards }]) => (
              <List key={id} title={listTitle} cards={cards} />
            ))}
        </DragDropContext>

        {/* add another list */}
        <div>
          <button className=" bg-[#4D60FF] px-4 py-3 text-white rounded-lg text-sm">
            <Plus className="inline-block mr-2" color="#fff" />
            Add Another List
          </button>
        </div>
      </div>
    </div>
  );
}
