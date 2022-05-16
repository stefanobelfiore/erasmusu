import React from "react";
import PropTypes from "prop-types";
import CardRoom from "../cardRoom/cardRoom";
import './roomScreen.scss'

const RoomScreen = ({results}) => {


return(
<div className="container-fluid">
   {results.length ? results.map((room, i)=> {
       return <CardRoom key={i} image={room.photoUrls.homecard} price={room.pricePerMonth} description={room.title}/>
   })  : <h3 className="no-results">"No hay ninguna disponibilidad para esta búsqueda, busque algo"</h3>} 
</div>
)
}

RoomScreen.propTypes = {
    results: PropTypes.array,
  };

export default RoomScreen;