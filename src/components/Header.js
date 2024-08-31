import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
// 7
import {Link} from 'react-router-dom'
import useOnlineStatus from "../../utils/useOnlineStatus";
// (11) useContext
import UserContext from "../../utils/UserContext";

const Header = () => {

  const [ btnNameReact , setbtnNameReact ]= useState('Login')

  //  console.log("header rendered") // re-render because of state variable.
  
  // 11 react context
  // const data = useContext(UserContext)
  const {loggedInUser} = useContext(UserContext)
  // console.log(loggedInUser)


// (7) if no dependency array present, the useEffect is called on every render 
  //  useEffect(()=>{
  //   console.log('UseEffect called')
  //  })


// (7) if empty dependency array present, the useEffect is not called on every render (it is called only once initially)
  //  useEffect(()=>{
  //   console.log('UseEffect called')
  //  },[])

// (7) if dependency array present [btnNameReact], the useEffect is called on every change in dependency
   useEffect(()=>{
    console.log('UseEffect called')
   },[btnNameReact])
   

//  (7) useState variables: are written within the component and at the beginnning . useeffect are not allowed to write within loops , conditions, functions

 
// Routes 

// react router DOM : 
// react router library
// use latest version (6 or new)
// install: npm i react-router-dom
// install: npm i react-router-dom


// (8 custom hooks) 
   const onlineStatus = useOnlineStatus()




    return (
// 10
      // <div className="header">
      <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img
            className="w-52"
            src= {LOGO_URL}
          />
        </div>
  
        <div className="flex items-center ">

          <ul className="flex p-4 m-4">

            <li className="px-4">
              Online Status: {onlineStatus ? '🟢':'🔴' }
            </li>
            
            <li className="px-4">
              <Link to='/'>Home</Link>
            </li>

            <li className="px-4">
              <Link to='/about'>About Us</Link>
            </li>
            <li className="px-4">
            <Link to='/contact'>Contact Us</Link>
            </li>

            <li className="px-4">
              <Link to='/grocery'>Grocery</Link>
            </li>
            <li className="px-4">Cart</li>

            <button className="login-btn mx-2" onClick={()=>{
              btnNameReact===('Login')?
              setbtnNameReact('Logout'):
              setbtnNameReact('Login')
            }}>{btnNameReact}</button>
          
          {/* context  */}
          <li className="mx-2 font-bold">
            {loggedInUser}
          </li>


          </ul>
        </div>
      </div>
    );
  };

export default Header;  