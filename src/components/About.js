import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{

    constructor(props){
        super(props);

        console.log("Parent Constructor");

       
    }

    componentDidMount(){
        console.log("Parent Component Did Mount Called!")
    }
    render(){
        console.log("Parent Render")
        return (
          <div>
            <h1>About</h1>
            <h2>This is Food Ordering App</h2>
            {/* Passing props */}
            {/* <User name={"Aditi (function)"} /> */}
            <UserClass name={"First"} location={"Jaipur"} />
            {/* <UserClass name={"Second"} location={"Jaipur"} />
            <UserClass name={"Third"} location={"Jaipur"} /> */}
          </div>
          
        );

    }
}


export default About;