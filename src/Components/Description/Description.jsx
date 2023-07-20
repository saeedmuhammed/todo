// Icons Import
import * as Icons from "../../Icons/Icons";

// Image Import
import avatar from "../../Images/27470335_7309683.jpg";

// Components Import
import Option from "./Option";

export default function Description() {
  return (
    <div class="fixed inset-0  w-full  flex  justify-center overflow-y-auto  bg-primary bg-opacity-90 z-50">
      <div class="  my-10 bg-white w-3/5 h-fit  p-6  rounded-lg shadow-lg">
        <div className="my-2">
          <h1 className="font-bold text-xl my-3 ">Card Title</h1>
          <h2 className="opacity-50">
            In list <span className="underline ml-2">To Do</span>{" "}
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* left */}
          <div className=" col-span-2 w-[95%]">
            <div>
              <h1 className="font-bold  my-2">Notifications</h1>
              <div className="  bg-secondary flex justify-center items-center gap-1 w-1/5 py-2 px-1 cursor-pointer  rounded-md border-solid border border-[#edf0ff]">
                <Icons.Man/>
                <span className="text-primary text-sm">Watch</span>
              </div>
            </div>
            <div className="my-12">
              <h1 className="font-bold text-xl">Description </h1>
              <div className=" my-4 border-solid border border-[#EDF0FF] rounded-lg divide-y-2 divide-[#EDF0FF]">
                <div className=" flex justify-start items-center p-2">
                    
                  <div className="flex items-center h-6 border-r-2 pr-2">
                    <span className="text-primary text-lg mr-1">Aa</span>
                    <Icons.DownArrow className="mt-2"/>
                    
                  </div>
                  <div className="flex items-center h-6 border-r-2 pr-2">
                    <Icons.Bold className="ml-2" />
                    <Icons.Italic className="ml-2" />
                    <Icons.ThreeDots className="ml-2" /> 
                  </div>
                  <div className="flex items-center h-6 border-r-2 pr-2">
                    <Icons.Menu className="ml-2" />
                    <Icons.DownArrow className="ml-2"/>
                  </div>
                   
                </div>
                <div className="p-2">
                  <textarea
                    className="w-full h-32  rounded-lg  outline-none placeholder-[#ACB5FF] text-sm"
                    placeholder="Add a more detailed description..."
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center">
                <button className=" bg-[#4D60FF] px-6 py-2 text-white rounded-lg text-sm">
                  Save
                </button>
                <Icons.Exit className="ml-5" />
              </div>
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
          {/* right */}
          <div className="">
            <div className="pb-2">
              <h1 className="font-bold mb-2">Add to card</h1>
              <div className="flex flex-col gap-2">
                <Option option="Members" icon={<Icons.Man />}  />
                <Option option="Labels" icon={<Icons.Lable />}  />
                <Option option="CheckList" icon={<Icons.CheckList />}  />
                <Option option="Dates" icon={<Icons.Date />}  />
                <Option option="Attatchment" icon={<Icons.Attachement />}  />
                <Option option="Cover" icon={<Icons.Cover />}  />
                <Option option="Custom Fields" icon={<Icons.Fields />}  />
              
              </div>
            </div>
            <div className="py-6">
              <h1 className="font-bold mb-2 ">Power-Ups</h1>
              <div className="flex items-center">
                <Icons.Plus className="mr-3" />
                <h1 className="inline-block">Add Power-Ups</h1>
              </div>
            </div>
            <div className="py-6">
              <h1 className="font-bold mb-2">Automation</h1>
              <div className="flex items-center">
                <Icons.Plus className="mr-3" />
                <h1 className="inline-block">Add button</h1>
              </div>
            </div>

            <div className="pb-2">
              <h1 className="font-bold mb-2">Actions</h1>
              <div className="flex flex-col gap-2">
                <Option option="Moves" icon={<Icons.Moves />}  />
                <Option option="Copy" icon={<Icons.Copy />}  />
                <Option option="Make template" icon={<Icons.MakeTemplate />}  />
                <Option option="Archive" icon={<Icons.Archive />}  />
                <Option option="Share" icon={<Icons.Share />}  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
