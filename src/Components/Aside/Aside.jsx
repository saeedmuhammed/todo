//Icons Import
import { BoardFilled , Man , Setting , Box , Plus } from "../../Icons/Icons";

//Image Import
import avatar from '../../Images/27470335_7309683.jpg'

export default function Aside() {
  return (
    <div className='  bg-white row-start-1 col-span-1 p-3 divide-y-2  rounded-lg border-solid border-[1px] border-[#edf0ff]'>
        <div className='w-full py-5 flex flex-col lg:flex-row items-center justify-center lg:justify-start'>
        <div className='flex-shrink-0'>
        <img src={avatar} alt='avatar' className='rounded-full w-12 h-12' />
        </div>
        <div className='lg:ml-5 font-bold text-center lg:text-left'>
          <h1>Lucinda</h1>
          <h1 className='text-primary'>Free</h1>
          </div>  
          
        
        </div> 
        
        <div className='w-full py-7 flex flex-col gap-2 '>
        <div className=''>
          <BoardFilled className='hidden lg:inline-block mr-2 ' />
          <h3 className='inline-block'>Workspaces</h3> 

          </div>
        
          <div className='flex items-center justify-between'>
          <div>
            <Man className='hidden lg:inline-block mr-2' />
            <h3 className='inline-block'>Members</h3>
            
            </div>
            <div>
              <Plus className='inline-block' />
            </div> 

          </div>
          <div className='flex items-center justify-between'>
            <div>
            <Setting className='hidden lg:inline-block mr-2 ' />
            <h3 className='inline-block'>Workspaces  settings</h3>
            </div>
            <div>
            <Plus className='inline-block' />
            </div>

          </div>
         
        </div>
        <div className='w-full py-7  flex flex-col gap-2 '>
        <h2 className='font-bold'>Workspaces Views</h2>
        <div className='flex items-center justify-start'>
        <BoardFilled className='hidden lg:inline-block mr-2' /> <h3>Table</h3>

          </div>
          <div className='flex items-center justify-start'>
          <BoardFilled className='hidden lg:inline-block mr-2' />  <h3>Calender</h3>

          </div>
        </div>
        <div className='w-full py-7  flex flex-col gap-2'>
        <h2 className='font-bold'>Your boards</h2>
        <div className='flex items-center justify-start'>
        <Box className='hidden lg:inline-block mr-2 ' />  
        <h3>Mo</h3> 

          </div>
          
        </div>

      </div>
  )
}
