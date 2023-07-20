// Icons import
import { Eye, Watch } from "../../Icons/Icons";

// Image Import
import avatar from "../../Images/27470335_7309683.jpg";

export default function Card({ title }) {
  return (
    <div className="bg-white border-solid border border-[#EDF0FF] p-2 rounded-lg my-2 cursor-pointer">
      <div className="bg-[#F2DD54] w-1/4 h-[9px] rounded-2xl mb-2"></div>
      <h1 className="font-bold text-sm">{title}</h1>
      <div className="flex justify-between items-end mt-2">
        <div className="flex items-center">
          <Eye className="inline-block mr-1" />
          <Watch className="inline-block mr-1 ml-2" />
          <h3 className="inline-block text-primary opacity-50 font-bold text-xs">
            Mar 18
          </h3>
        </div>
        <div className="flex-shrink-0 hidden lg:block">
          <img src={avatar} alt="avatar" className="rounded-full w-9 h-9" />
        </div>
      </div>
    </div>
  );
}
