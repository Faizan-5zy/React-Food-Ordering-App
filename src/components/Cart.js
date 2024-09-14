import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";



const Cart = () =>{
    const cartItems = useSelector((store)=>store.cart.items)
    //12 dispatch hook 
    const dispatch = useDispatch()
    
    //12 dispatching action 
    const handleClearCart =()=>{
         dispatch(clearCart())
    }


    // redux dev tools chrome extension install

    return(
        <div className="text-center m-4 p-4" data-testid='cartData'> 
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">

        <button className="bg-black text-white p-2 m-2 rounded"  onClick={handleClearCart}>Clear Cart</button>
        { cartItems.length==0 ? <h1 className="text-l font-bold">Cart is Empty</h1>:
            <ItemList items={cartItems}/>}
            {/* re-using component  */}
        </div>
        </div>
    )
}

export default Cart;