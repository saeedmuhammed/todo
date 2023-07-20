//Icons Import
import { Bell , Search , Logo } from "../../Icons/Icons";

//Image Import
import avatar from '../../Images/27470335_7309683.jpg'
import { VscChevronDown } from "react-icons/vsc";

export default function Nav() {
  return (
    <div className='w-full bg-[#ffffff] h-[60px] mt-3 flex justify-between items-center rounded-lg border-solid border border-[#edf0ff]' > 
      
    <div className='w-1/3 hidden lg:block' >
      <ul>
        <li className='text-sm'>Workspaces<VscChevronDown className='inline-block' /></li> 
        <li className='text-sm'>Recent <VscChevronDown className='inline-block' /> </li>
        <li className='text-sm'>Starred <VscChevronDown className='inline-block' /></li>
        <li className='text-sm'>Templates <VscChevronDown className='inline-block' /></li>
      </ul>
    </div>
    <div className='w-1/3 flex justify-start lg:justify-center items-center'>
      <Logo />
    </div>
    <div className=' w-1/3 flex items-center justify-end pr-3'>
      <div className='bg-[#F2F4FF] p-2 rounded-lg text-center flex items-center '>
        <Search  className='inline-block mr-1'/>
        <input type='text' placeholder='Search' className='bg-transparent placeholder-[#ACB5FF] text-sm'/>
      </div>
      <div>
        <Bell className='inline-block mx-5' />
      </div>
      <div className='flex-shrink-0'>
      <img src={avatar} alt='avatar' className='rounded-full w-10 h-10' />
      </div>

      
    </div>
    
    </div>

  )
}
