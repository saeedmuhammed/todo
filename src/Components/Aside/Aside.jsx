import { AiFillLayout , AiFillSetting , AiOutlinePlus , AiTwotoneMinusSquare } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

import avatar from '../../Images/27470335_7309683.jpg'

export default function Aside() {
  return (
    <div className='  bg-white row-start-1 col-span-1 p-3 divide-y-2  rounded-lg border-solid border-[1px] border-[#edf0ff]'>
        <div className='w-full py-5 flex items-center'>
        <div className='flex-shrink-0'>
        <img src={avatar} alt='avatar' className='rounded-full w-14 h-14' />
        </div>
        <div className='ml-5 font-bold'>
          <h1>Lucinda</h1>
          <h1 className='text-[#4D60FF]'>Free</h1>
          </div>  
          
        
        </div> 
        
        <div className='w-full py-5 flex flex-col gap-1 '>
        <div className=''>
          <AiFillLayout className='inline-block mr-2 text-[#4D60FF]' />  <h3 className='inline-block'>Workspaces</h3> 

          </div>
        
          <div className='flex items-center justify-between'>
          <div>
            <BsFillPersonFill className='inline-block mr-2 text-[#4D60FF]' />  <h3 className='inline-block'>Members</h3>
            </div>
            <div>
              <AiOutlinePlus className='inline-block text-[#4D60FF]' />
            </div> 

          </div>
          <div className='flex items-center justify-between'>
            <div>
            <AiFillSetting className='inline-block mr-2 text-[#4D60FF]' />  <h3 className='inline-block'>Workspaces  settings</h3>
            </div>
            <div>
              <AiOutlinePlus className='inline-block text-[#4D60FF] ' />
            </div>

          </div>
         
        </div>
        <div className='w-full py-5  flex flex-col gap-1 '>
        <h2 className='font-bold'>Workspaces Views</h2>
        <div className='flex items-center justify-start'>
          <AiFillLayout className='inline-block mr-2 text-[#4D60FF]' />  <h3>Table</h3>

          </div>
          <div className='flex items-center justify-start'>
          <AiFillLayout className='inline-block mr-2 text-[#4D60FF]' />  <h3>Calender</h3>

          </div>
        </div>
        <div className='w-full py-5  flex flex-col gap-1'>
        <h2 className='font-bold'>Your boards</h2>
        <div className='flex items-center justify-start'>
        <AiTwotoneMinusSquare className='inline-block mr-2 text-[#0017E0]' />  <h3>Mo</h3> 

          </div>
          
        </div>

      </div>
  )
}
