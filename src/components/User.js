import { useState } from "react";



const User = ({perr,location})=>{

    const [count] = useState(0)
    const [count2] = useState(1)

    

    return (
        <div className="user-card">
            <h2>Count : {count}</h2>
            <h2>Count2 : {count2}</h2>
            <h2>Name : {perr}</h2>
            <h4>Location : {location}</h4>
            <h4>Contact : 65684123</h4>
        </div>
    ) 
}

export default User;