export default function Option({ option, icon }) {
  return (
    <div className="  bg-secondary flex justify-start items-center gap-1 py-2 pl-2 rounded-md cursor-pointer">
      {icon}
      <span className="text-primary ml-1"> {option} </span>
    </div>
  );
}
