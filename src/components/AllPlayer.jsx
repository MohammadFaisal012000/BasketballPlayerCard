import React from 'react';
import { useState } from 'react';
import "./AllPlayer.css";
import BasketballPlayerCard from './BasketballPlayerCard';

const AllPlayer = (props) => {
    let playerData=props.playerData;
    console.log("All Players");
    console.log(playerData);
    let [index,setIndex]=useState(0);
    let length=playerData.length;
    
  return (
    <div className='All-Player'>
        <div className='All-Player-Card'>
            <BasketballPlayerCard 
            playerData={playerData[index]} 
            index={index} 
            setIndex={setIndex} 
            length={length}
            />
        </div>
    </div>
  )
}

export default AllPlayer