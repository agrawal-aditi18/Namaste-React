import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
      userInfo:{
        name: "default",
        location: "default"
       
      }
    };
    console.log(this.props.name + "Child Constructor");
  }

   async componentDidMount() {
    this.timer = setInterval(()=>{
      console.log("Namaste React!")
    },1000)
    // console.log(this.props.name + "Child Component Did Mount Called!");
    const data = await fetch("https://api.github.com/users/agrawal-aditi18");
    const json = await data.json();
    

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.count != prevState.count){
      //
    }
    if (this.state.count2 != prevState.count2) {
      //
    }

    console.log("component did upadte")
  }
  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("component unmount")
  }

  render() {
    const { name, location, bio, avatar_url } = this.state.userInfo;
    // debugger;
    return(
      <div className="user-card">
        <img src={avatar_url}/>
        <h3>Name:{name} </h3>
        <h4>Location:{location} </h4>
        <h4>Bio:{bio} </h4>
      </div>
    )
    
    /*const { name, location } = this.props;
    const { count } = this.state;

    console.log(this.props.name + "Child render");

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h2>Count : {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              // can also update other state var here only!!
            });
          }}
        >
          Count Increase
        </button>
        // Also i can destrucuture this like count 
        <h2>Count2 : {this.state.count2}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: aditiagrawal@gmail.com</h4>
      </div>
    );*/
  }
}

export default UserClass;