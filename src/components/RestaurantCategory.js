import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({data ,showItems , setShowIndex , dummy} ) => {
    console.log("dataa:", data)
 


    const handleClick=()=>{
        // setshowItems(!showItems)
        // showItems(!showItems)
        setShowIndex()
    }

    return (
        <div className="w-6/12 mx-auto my-2 bg-gray-200 shadow-lg p-2" >
            {/* Accordian Header */}
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="text-lg text-bold p-4">{data.title} - ({data.itemCards.length})</span>
                <span
                className={`p-4 transform transition-transform duration-300 ${
                    showItems ? "rotate-180" : ""
                }`}
                >🔻</span>
            </div>
            {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
        </div>
    )
}

export default RestaurantCategory;