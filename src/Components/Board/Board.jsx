
//Icons Import
import { Plus , Star , Private , BoardOutline , DownArrow , PowerUp , Electric , Filter , ThreeDotsV } from "../../Icons/Icons";

// Image Import
import avatar from '../../Images/27470335_7309683.jpg'

// Components Import
import List from '../List/List';
import BoardOption from "./BoardOption";

export default function Board() {
  return (
    <div className='row-start-1 col-span-6'>
    {/* Board options */}
     <div className='flex  sm:flex-wrap  justify-between items-center mb-8'>
       <div className='flex  md:flex-row gap-2 flex-wrap lg:flex-nowrap justify-start lg:justify-between items-center'>
         <div><h1 className='font-bold text-lg'>Lucinda</h1></div>
        
      <BoardOption icon={<Star />} width="w-8" height="h-8" />
      <BoardOption option="Private" icon={<Private />} />
      <BoardOption option="Board" icon={<BoardOutline />} />
      <BoardOption icon={<DownArrow />} bg="bg-secondary" width="w-8" height="h-8" />

       </div>
       <div className='flex  md:flex-row gap-2 flex-wrap lg:flex-nowrap justify-between items-center'>
       <BoardOption option="Power-Ups" icon={<PowerUp />}  /> 
       <BoardOption option="Automation" icon={<Electric />}  /> 
       <BoardOption option="Filter" icon={<Filter />}  /> 
       <img src={avatar} alt='avatar' className='rounded-full w-8 h-8' />
       <BoardOption option="Share" />
       <BoardOption icon={<ThreeDotsV />} bg="bg-secondary" width="w-8" height="h-8" />   


       </div>
     </div>

   
     
     <div className='grid grid-cols-1  md:grid-cols-3 lg:md:grid-cols-4 gap-4 grid-auto-rows-auto'>
       

       <List title="To Do" cards={[{title:"Card title"}]} />
       <List title="In Progress" cards={[]} />
       <List title="Done" cards={[]} />
    
      {/* add another list */}
       <div>
         <button className=' bg-[#4D60FF] px-4 py-3 text-white rounded-lg text-sm'>
         <Plus className='inline-block mr-2' color="#fff" />
         Add Another List
         </button>
         </div>


     </div>
     
   </div>
  )
}
