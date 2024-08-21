import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
// 7
import {Link} from 'react-router-dom'

const Header = () => {

  const [ btnNameReact , setbtnNameReact ]= useState('Login')

   console.log("header rendered") // re-render because of state variable.
  

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






    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}
          />
        </div>
  
        <div className="nav-items">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
            <Link to='/contact'>Contact Us</Link>
            </li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{
              btnNameReact===('Login')?
              setbtnNameReact('Logout'):
              setbtnNameReact('Login')
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;  