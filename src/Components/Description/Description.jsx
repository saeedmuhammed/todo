// Icons Import
import * as Icons from "../../Icons/Icons";

// Image Import
import avatar from "../../Images/Ellipse 2.jpg";

import { CardsContext } from "../../Context/CradsContext";
import axios from "axios";

import { useContext, useState } from "react";
import Actions from "./Actions";

const jwtToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg4NjcwNDg0LCJleHAiOjE2OTEyNjI0ODR9.oN0yD0pMSnavPTDKKFsRCEGOxz2fbbvCi-sX36vvyAc";
const config = {
  headers: {
    Authorization: `Bearer ${jwtToken}`,
    "Content-Type": "application/json",
  },
};

export default function Description({ setShowDetails, card }) {
  const [descriptionValue, setdescriptionValue] = useState("");
  const [showAddDescription, setShowAddDescription] = useState(true);
  const { lists, setLists , allCards, setAllCards  } = useContext(CardsContext);

  async function addDescription() {
    if (descriptionValue === "") {
      setShowAddDescription(false);
      return;
    } //to make sure that the user entered a value

    try {
      const updatedCard = { ...card, Description: descriptionValue };
      await axios.put(
        `https://strapi.techytypes.com/todos/${card.id}`,
        JSON.stringify(updatedCard),
        config
      );

      // get the cards of the list
      // update the array
      //add the array to updated lists
      //set state
      const updatedCards = lists[card.Status].cards.map((card) =>
        card.id === updatedCard.id ? updatedCard : card
      );
      const updatedLists = { ...lists };
      updatedLists[card.Status].cards = updatedCards;
      setAllCards(allCards.map((card) => card.id === updatedCard.id ? updatedCard : card)); // update all cards for search
      setLists(updatedLists);
      setShowAddDescription(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleChange = (event) => {
    setdescriptionValue(event.target.value);
  };

  return (
    <div
      className="fixed inset-0  w-full  flex  justify-center overflow-y-auto cursor-default bg-primary bg-opacity-75 z-50"
      onClick={() => setShowDetails(false)}
    >
      <div
        className=" my-10 bg-white w-3/5 h-fit  p-6  rounded-lg shadow-lg "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="my-2">
          <h1 className="font-bold text-xl my-3 ">{card.Task}</h1>
          <h2 className="opacity-50">
            In list <span className="underline ml-2">{card.Status}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* left */}
          <div className=" col-span-2 w-[95%]">
            <div>
              <h1 className="font-bold  my-2">Notifications</h1>
              <div className="  bg-secondary flex justify-center items-center gap-1 w-1/5 py-2 px-1 cursor-pointer  rounded-md border-solid border border-[#edf0ff]">
                <Icons.Man />
                <span className="text-primary text-sm">Watch</span>
              </div>
            </div>
            <div className="my-12">
              <h1 className="font-bold text-xl">Description </h1>
              <p
                className="w-1/2 cursor-pointer py-2"
                onClick={() => setShowAddDescription(true)}
              >
                {" "}
                {card.Description}{" "}
              </p>
              {showAddDescription && (
                <div>
                  <div className=" my-4 border-solid border border-[#EDF0FF] rounded-lg divide-y-2 divide-[#EDF0FF]">
                    <div className=" flex justify-start items-center p-2">
                      <div className="flex items-center h-6 border-r-2 pr-2">
                        <span className="text-primary text-lg mr-1">Aa</span>
                        <Icons.DownArrow className="mt-2" />
                      </div>
                      <div className="flex items-center h-6 border-r-2 pr-2">
                        <Icons.Bold className="ml-2" />
                        <Icons.Italic className="ml-2" />
                        <Icons.ThreeDots className="ml-2" />
                      </div>
                      <div className="flex items-center h-6 border-r-2 pr-2">
                        <Icons.Menu className="ml-2" />
                        <Icons.DownArrow className="ml-2" />
                      </div>
                    </div>
                    <div className="p-2">
                      <textarea
                        onChange={handleChange}
                        className="w-full h-32  rounded-lg  outline-none placeholder-[#ACB5FF] text-sm"
                        placeholder="Add a more detailed description..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      className=" bg-[#4D60FF] px-6 py-2 text-white rounded-lg text-sm"
                      onClick={addDescription}
                    >
                      Save
                    </button>
                    <div
                      className="cursor-pointer"
                      onClick={() => setShowAddDescription(false)}
                    >
                      <Icons.Exit className="ml-5" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3 ">
              <div className="flex-shrink-0">
                <img
                  src={avatar}
                  alt="avatar"
                  className="rounded-full w-10 h-10"
                />
              </div>
              <div className="bg-transparent px-1 py-2 rounded-lg  w-full border-solid border border-secondary ">
                <input
                  type="text"
                  placeholder="Write a comment"
                  className="pl-2 bg-transparent placeholder-[#ACB5FF]  text-sm"
                />
              </div>
            </div>
          </div>

          <Actions />
        </div>
      </div>
    </div>
  );
}
