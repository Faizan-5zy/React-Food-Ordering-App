import { CDN_URL } from "../../utils/constants";


const ItemList = ({items , dummy}) => {
    console.log("items:", items)

    // 11 props drilling 
    console.log("dummy from itemlist:", dummy)
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
                            <button className="  p-2 m-1 rounded  bg-white shadow-lg">Add +</button>
                        </div>
                        <div className="">
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