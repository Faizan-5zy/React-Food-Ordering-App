import { CDN_URL } from "../../utils/constants";
// 12 
import { useDispatch } from "react-redux";
import {addItem} from "../../utils/cartSlice";


const ItemList = ({items , dummy}) => {
    // console.log("items:", items)

    // 11 props drilling 
    // console.log("dummy from itemlist:", dummy)


    // 12 dispatch an action when clicking

    const dispatch = useDispatch()


    const handleAdditem=(item)=>{
        // dispatch an action
        // dispatch(addItem('pizza'))
        dispatch(addItem(item))
    }


    return (
        <div>
           {items.map((item)=>(
            <div key={item.card?.info?.id} className= "border-gray-400  border-b-2 p-2 m-2">
                
                <div className="flex justify-between flex-grow items-center">
                    <div className="p-4 text-left text-wrap">
                        <span>{item.card?.info?.name}-</span>
                        <span> ₹ {item.card?.info?.price/100 || item.card?.info?.defaultPrice/100}</span>
                        <p className="text-xs text-left">{item.card?.info?.description}</p>                
                    </div>
                   
                    <div className="relative  " >
                        <div className="absolute top-1 left-1">
                            <button 
                            // onClick={handleAdditem}  Passes the function reference; use it when no arguments are needed or you want the event object.
                            onClick={()=>handleAdditem(item)} //Creates a function that calls handleAdditem with arguments when clicked.
                            // onClick={handleAdditem(item)}  Calls handleAdditem(item) immediately during render, which is usually not the desired behavior.
                            className="  p-2 m-1 rounded  bg-white shadow-lg">Add +</button>
                        </div>
                        <div>
                        <img className="  flex "  src={CDN_URL+item.card?.info?.imageId} />
                        </div>
                    </div>
                </div>
            
            </div>

           ))}

        </div>
    )
}

export default ItemList;