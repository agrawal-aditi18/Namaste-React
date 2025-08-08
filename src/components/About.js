import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "./utils/UserContext";

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
            <div>
              loggedinuser
              <UserContext.Consumer>
                {({ loggedInUser }) => (
                  <h1 className="text-xl font-bold">{loggedInUser}</h1>
                 )
                }
              </UserContext.Consumer>
            </div>
            <h2>This is Food Ordering App</h2>
            {/* Passing props */}
            {/* <User name={"Aditi (function)"} /> */}
            <UserClass name={"First"} location={"Jaipur"} />
          </div>
        );

    }
}


export default About;