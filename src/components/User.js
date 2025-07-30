import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);
    const [count2, setcount2] = useState(0);
    
    useEffect(()=>{
       const  timer = setInterval(() => {
          console.log("Namaste React!");
        }, 1000);
        console.log("useEffect");

        return()=>{
            clearInterval(timer)
            console.log("Called when unmounting componennt!")
        }
    },[])

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h2>Count: {count}</h2>
        <h2>Count2: {count2}</h2>
        <button
          onClick={() => {
            const updatedCount = count2 + 1;
            setcount2(updatedCount);
          }}
        >
          Update Count2
        </button>

        <h3>Location: Rajasthan</h3>
        <h4>Contact: aditiagrawal@gmail.com</h4>
      </div>
    );
}

export default User;