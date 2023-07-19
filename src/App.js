import './App.css';
import Nav from './Components/Nav/Nav';

import {  AiFillSetting ,AiOutlineMore , AiOutlinePlus } from "react-icons/ai";

import avatar from './Images/27470335_7309683.jpg'

import Aside from './Components/Aside/Aside';


function App() {
  return (
    <div className="App">
     <Nav />
     <div className='grid gap-5 mt-8'>
      <Aside />
      {/* right */}
      <div className='row-start-1 col-span-6'>
       {/* private and name */}
        <div className='flex justify-between items-center mb-8'>
          <div className='flex justify-between'>
            <div><h1 className='font-bold text-lg'>Lucinda</h1></div>
            <div className='mx-2 bg-white flex justify-center items-center w-8 h-8 rounded-md border-solid border border-[#edf0ff] '><AiFillSetting className='inline-block text-[#4D60FF]' /></div>
            <div className='mx-2  bg-white flex justify-center items-center px-2 rounded-md border-solid border border-[#edf0ff]'><AiFillSetting className='inline-block text-[#4D60FF]' />Private</div>
            <div className='mx-2  bg-white flex justify-center items-center px-2 rounded-md border-solid border border-[#edf0ff]'><AiFillSetting className='inline-block text-[#4D60FF]' />Board</div>
            <div className='mx-2  bg-[#EDF0FF] flex justify-center items-center w-8 h-8 rounded-md'><AiFillSetting className='inline-block text-[#4D60FF]' /></div>

          </div>
          <div className='flex justify-between'>
          <div className='mx-2  bg-white flex justify-center items-center px-2 rounded-md border-solid border border-[#edf0ff]'><AiFillSetting className='inline-block text-[#4D60FF]' />Power-Ups</div>
          <div className='mx-2  bg-white flex justify-center items-center px-2 rounded-md border-solid border border-[#edf0ff]'><AiFillSetting className='inline-block text-[#4D60FF]' />Automation</div>
          <div className='mx-2  bg-white flex justify-center items-center px-2 rounded-md border-solid border border-[#edf0ff]'><AiFillSetting className='inline-block text-[#4D60FF]' />Filter</div>
          <img src={avatar} alt='avatar' className='rounded-full w-8 h-8' />
          <div className='mx-2  bg-[#EDF0FF] flex justify-center items-center w-8 h-8 rounded-md'><AiOutlineMore className='inline-block text-[#4D60FF] ' /></div>

          </div>
        </div>

        {/* cards  - make it in component*/}
        
        <div className='grid grid-cols-4 gap-4'>
          {/* to do */}
          <div className=' bg-white px-5 py-3 border-solid border divide-y-2  border-[#edf0ff] rounded-lg'>

              <div className='flex justify-between items-center py-2'>
                <h1 className='font-bold'>To Do</h1>
                <AiOutlineMore className='inline-block text-[#4D60FF] ' />

              </div>
              
              <div className='py-2'>
        <AiOutlinePlus className='inline-block text-md text-[#4D60FF] mr-1' />
        <h1 className='inline-block opacity-50'>Add a card</h1>
      </div>
              



          </div>
          {/* in progrss */}
          <div className=' bg-white px-5 py-3 border-solid border divide-y-2  border-[#edf0ff] rounded-lg'>

<div className='flex justify-between items-center py-2'>
  <h1 className='font-bold'>In progress</h1>
  <AiOutlineMore className='inline-block text-[#4D60FF] ' />

</div>

<div className='py-2'>
<AiOutlinePlus className='inline-block text-md text-[#4D60FF] mr-1' />
<h1 className='inline-block opacity-50'>Add a card</h1>
</div>




</div>
{/* Done */}
<div className=' bg-white px-5 py-3 border-solid border divide-y-2  border-[#edf0ff] rounded-lg'>

<div className='flex justify-between items-center py-2'>
  <h1 className='font-bold'>Done</h1>
  <AiOutlineMore className='inline-block text-[#4D60FF] ' />

</div>

<div className='py-2'>
<AiOutlinePlus className='inline-block text-md text-[#4D60FF] mr-1' />
<h1 className='inline-block opacity-50'>Add a card</h1>
</div>




</div>
         
          {/* <div className='h-10 bg-blue-700'>add new list</div> */}


        </div>
        
      </div>
     </div>
      
    </div>
  );
}

export default App;
