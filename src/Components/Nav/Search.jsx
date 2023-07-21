//Icons Import
import { SearchIcon } from "../../Icons/Icons";

// Components Import
import Card from "../List/Card";

import { useContext, useState } from "react";
import { CardsContext } from "../../Context/CradsContext";


export default function Search() {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [expandSearch, setExpandSearch] = useState(false);

    const {allCards} = useContext(CardsContext);

    const handleSearch = (query) => {
        const filteredResults = allCards.filter((card) =>
          card.Task.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);
      };

 

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
        handleSearch(event.target.value);
      };  
     
    const handelExpandSearch = () => {
        if(searchQuery === ''){
        setExpandSearch(!expandSearch);
        }   
    };  

  return (
    <>
    <div className={`bg-[#F2F4FF] relative p-2 rounded-lg flex items-center justify-start transition-all ${expandSearch ? 'w-full' : ''}`}>
    <SearchIcon  className='inline-block mr-1'/>
    <input type='text'
     placeholder='Search'
     className='bg-transparent placeholder-[#ACB5FF] text-sm w-full' 
     value={searchQuery}
     onFocus={handelExpandSearch}
     onBlur={handelExpandSearch}
     onChange={handleChange}/>
     {searchResults.length > 0 && searchQuery !== '' &&
    <div className="bg-[#e0e3f6] absolute  top-full left-0 w-full p-2 mt-2 rounded-lg z-10">
    
    {searchResults.map((card)=>(
        <Card key={card.id} card={card} />
    )

    )}
 
 

    </div>
}
  </div>

  </>
  )
}
