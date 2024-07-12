import React from 'react';
import "./BasketballPlayerCard.css";

const BasketballPlayerCard = (props) => {

    let player=props.playerData;
    console.log("BasketballPlayerCard");
    console.log(player);
    // console.log("points per game");
    // console.log(stats.pointsPerGame);
    let index=props.index;
    let setIndex=props.setIndex;
    let length=props.length;

    function nextPlayerHandler(){
        if (index >= length - 1) {
            index = 0;
            setIndex(index);
          } else {
            setIndex(index + 1);
          }
    }
  return (
    <div className='player-card'>
        <div className="player-image">
            <img src={player.image} className="player_img" />
        </div>
        <div className='player-desc'>
            <p className='player-name'>{player.name}</p>
            <p className='player-position'>Position : {player.position}</p>
        </div>
        <div className="player-stats">
           <p>Points per Game: <spna>{player.stats.pointsPerGame}</spna></p>
           <p>Assists per Game:<span>{player.stats.assistsPerGame}</span> </p>
           <p>Rebounds per Game: <span>{player.stats.reboundsPerGame}</span></p>
        </div>

        <div className='player-button'>
            <button onClick={nextPlayerHandler}> Next Player</button>
        </div>
    </div>
  )
}

export default BasketballPlayerCard