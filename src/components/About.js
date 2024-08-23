import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {

//     return (
//         <div>
//         <h1>About Us</h1>
//         {/* <User perr={'fazi functional component'} location={'dubai functional'} /> */}
//         <UserClass perr={'fazi class-based component'} location={'dubai class-based'} />
//         </div>
//     )
// }

class AboutClass extends React.Component{
 
    constructor(){
        super()
        // console.log('Parent-About constructor')
    }
 

    componentDidMount(){
        // console.log('Parent-About Component Did Mount')
    }
    
    render(){
        console.log('Parent-About  render')
        return (
        <div>
           <h1>About Us</h1>
           {/* <UserClass perr={'fazi class-based component'} location={'dubai class-based'} /> */}
           <UserClass perr={'ismail class-based component'} location={'dxb class-based'} />
        </div>
        )
    }
} 

export default AboutClass;