import avatar from '../../Images/27470335_7309683.jpg'
import { VscChevronDown , VscBell } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";

export default function Nav() {
  return (
    <div className='w-full bg-[#ffffff] h-[60px] mt-3 flex  items-center rounded-lg border-solid border border-[#edf0ff]' > 
      
    <div className='w-1/3' >
      <ul>
        <li className='text-sm'>Workspaces <VscChevronDown className='inline-block' /></li> 
        <li className='text-sm'>Recent <VscChevronDown className='inline-block' /> </li>
        <li className='text-sm'>Starred <VscChevronDown className='inline-block' /></li>
        <li className='text-sm'>Templates <VscChevronDown className='inline-block' /></li>
      </ul>
    </div>
    <div className='w-1/3 text-center'> logo</div>
    <div className=' w-1/3 flex items-center justify-end pr-3'>
      <div className='bg-[#F2F4FF] p-1 rounded-lg text-center '>
        <AiOutlineSearch className='inline-block text-2xl text-[#4D60FF] mr-1' />
        <input type='text' placeholder='Search' className='bg-transparent placeholder-[#ACB5FF] text-sm'/>
      </div>
      <div>
        <VscBell className='inline-block mx-5 text-2xl text-[#4D60FF]' />
      </div>
      <div className='flex-shrink-0'>
      <img src={avatar} alt='avatar' className='rounded-full w-11 h-11' />
      </div>

      
    </div>
    
    </div>

  )
}
