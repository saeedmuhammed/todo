import { useState } from "react";
import { Plus } from "../../Icons/Icons";
import CardTitle from "./AddTitle";

export default function AddCard({ status }) {
  const [showAddTitle, setShowAddTitle] = useState(false);

  function handleClick() {
    setShowAddTitle(true);
  }

  return (
    <>
      {showAddTitle ? (
        <CardTitle setShowAddTitle={setShowAddTitle} status={status} />
      ) : (
        <div className="flex items-center w-full">
          <button className=" px-3 py-2 rounded-lg " onClick={handleClick}>
            <Plus className="inline-block mr-3" />
            <span className="opacity-50">Add a card</span>
          </button>
        </div>
      )}
    </>
  );
}
