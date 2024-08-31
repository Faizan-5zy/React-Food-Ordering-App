import React from "react"

class UserClass extends React.Component{
   
    constructor(props){

        super(props)  
        // console.log(this.props.perr+' child-user constructor  ')
//super(props) is necessary for properly initializing the this context in class components and ensuring that props are correctly passed to the parent React.Component class.
// It enables you to access this.props in the constructor and throughout the component's lifecycle.
        console.log("props:", props)

// we write state variables ninside the constructor in class based component . this.state is a large component which consists of many state variables
        this.state={
            count: 0,
            count2: 1,

            userInfo:{
                name:'Default Name',
                location:'Default location',
                avatar_url:'Default avatar'
            }


        }
    }



    async componentDidMount(){
        // console.log(this.props.perr+' Child-About Component did mount ')


        const data = await fetch("https://api.github.com/users/Faizan-5zy")

        const json = await data.json();
        // console.log("json:", json)  
        

        // the state variable is updated 
        this.setState({
            userInfo:json
        })

    }

    componentDidUpdate(){
        // console.log('componentDidUpdate called')
    }

    componentWillUnmount(){
        // console.log('componentWillUnmount called')
    }

    
    render(){
        // console.log(this.props.perr+' child-user render ')
        // destructuring
        // const {perr,location}=this.props

        const {count} = this.state
        const {count2} = this.state

        const {name,location,avatar_url} = this.state.userInfo
        // debugger;
        return(
            <div className="user-card">
                        {/* <h2>Count : {count}</h2>
                        <button onClick={()=>{
                            this.setState({
                                count : this.state.count+1
                                // count2 : this.state.count2+1
                            })
                        }}>Count Increase</button>
                        {/* <h2>Count2 : {count2}</h2> */}
                        {/* <h2>Name : {perr}</h2>
                        <h4>Location : {location}</h4>
                        <h4>Contact : 65684123</h4>  */}
            
                            
                         <img src={avatar_url}/>
                        <h2>Name : {name}</h2>
                        <h4>Location : {location}</h4>
                        <h4>Contact : 65684123</h4>    
            </div>
        )
    }
}

export default UserClass; 