import React from "react";
import ReactDOM from "react-dom/client";

/*
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div",
     { id: "child1" },
      [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]),
      //for giving siblings we have to give array of childerns
       React.createElement("div",
     { id: "child2" },
      [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")])]
);


const heading = React.createElement(     //this is REACT-ELEMENT Using CORE REACT
    "h1", 
    {id: "heading"},
    "Hello World in React!"
); 
*/
//console.log(heading) //this heading is a react-element which  is basically a Js object not an h1 tag yet
    // 3 parameters- element(tag), object, childern
    //Objects is the place where you give attributes to the tags

//  JSX - HTML-like or XML-like syntax
const jsxHeading =( <h1 className = "head" tabIndex= "5">Namaste React using JSX 🚀</h1>  )  //this is REACT-ELEMENT Using JSX
console.log(jsxHeading);



//REACT FUNCTIONAL COMPONENT
const HeadingComponent = () => {
    return <h1 className="heading"> Namaste React Functional Component</h1>;
};
const number = 10000;
//COmponent Composition
const HeadingComponent2 = () => (
  <div id="container">
    {jsxHeading}
    <h2> {number} </h2>
    {/* can write any javascript expression /code inside JSX */}
    <HeadingComponent />
    <h1 className="heading"> Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading); // root.render job is to take this object create the h1 tag which the browser understands and put that inside the root(div) in dom:) ---------Amaaaaaziiiinnnnnnnnng


root.render(< HeadingComponent2 />);



