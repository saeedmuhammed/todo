// Components Import
import Option from "./Option";

// Icons Import
import * as Icons from "../../Icons/Icons";

export default function Actions() {
  return (
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
  )
}
