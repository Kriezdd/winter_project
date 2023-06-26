import React, { useState } from "react";
import Card from "./card";
const CardList = ({movielist}) =>{
    return(
        <div className="catalog-cards__List">
            {movielist.map((movie)=>
             <Card movie ={movie} key={movie.id}/>
            )}
        </div>
    )
}
 export default CardList