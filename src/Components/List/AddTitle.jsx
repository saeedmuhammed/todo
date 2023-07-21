import { useContext, useState } from "react";

//Icons Import
import { Exit } from "../../Icons/Icons";

import { CardsContext } from "../../Context/CradsContext";

import axios from "axios";

const jwtToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg4NjcwNDg0LCJleHAiOjE2OTEyNjI0ODR9.oN0yD0pMSnavPTDKKFsRCEGOxz2fbbvCi-sX36vvyAc";
const config = {
  headers: {
    Authorization: `Bearer ${jwtToken}`,
    "Content-Type": "application/json",
  },
};

export default function CardTitle({ setShowAddTitle, status }) {
  const [inputValue, setInputValue] = useState("");
  const { lists, setLists, allCards, setAllCards } = useContext(CardsContext);

  async function addCard() {
    const currentDate = new Date();
    const deadline = currentDate.toISOString();
    const card = {
      Task: inputValue,
      Description: "",
      Deadline: deadline,
      Status: status,
      created_by: "",
      updated_by: "",
    };
    try {
      const { data } = await axios.post(
        "https://strapi.techytypes.com/todos",
        JSON.stringify(card),
        config
      );
      const updatedLists = { ...lists };
      updatedLists[status].cards.push(data);
      setLists(updatedLists);
      setAllCards([...allCards, data]); //for search
      setShowAddTitle(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  function confirm(event) {
    event.preventDefault();
    setShowAddTitle(false);
    addCard();
  }
  function reject() {
    setShowAddTitle(false);
  }
  return (
    <>
      <form onSubmit={confirm}>
        <div className="bg-[#F2F4FF]  p-2 rounded-lg my-2">
          <input
            type="text"
            placeholder="Enter a title for this card"
            value={inputValue}
            onChange={handleChange}
            className="bg-transparent pb-10 placeholder-[#ACB5FF] text-sm w-full placeholder-xs"
          />
        </div>
        <div className="flex  items-center w-fit">
          <button className=" bg-primary px-3 py-2 text-white rounded-lg text-sm">
            Add card
          </button>
          <div className="cursor-pointer" onClick={reject}>
            <Exit className="inline-block ml-3" />
          </div>
        </div>
      </form>
    </>
  );
}
