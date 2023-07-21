import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";




const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg4NjcwNDg0LCJleHAiOjE2OTEyNjI0ODR9.oN0yD0pMSnavPTDKKFsRCEGOxz2fbbvCi-sX36vvyAc';
    const config = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };


export const CardsContext = createContext([]);


export function CradsContextProvider({children}) {

   

    const [lists, setLists] = useState({}); //objext of every category with its cards
    const [allCards , setAllCards] = useState([]); //list of al cards

      const getCards = useCallback(async () => {
        try {
          console.log('getcards');
        const { data } = await axios.get('https://strapi.techytypes.com/todos', config);
        setAllCards(data);
        const listMap = createMap(data);
        setLists(listMap);
        
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }, []);

      function createMap(data){
         return data.reduce((map,card)=>{
            if(!map[card.Status]){
                const id = Math.floor(Math.random()*100000);
              
                map[card.Status]={id:id, cards:[card]};
            }
            else{
                map[card.Status].cards.push(card);
            }
            return map;
         },{Todo:{id:1,cards:[]},InProgress:{id:2,cards:[]},Done:{id:3,cards:[]}});  //Initial Lists  
      }  

    

    useEffect(()=>{
       getCards();     
    },[getCards]);

   

  return (
    <CardsContext.Provider value={{lists, setLists , allCards , setAllCards}}>
    {children}
    
    </CardsContext.Provider>
  )
}
