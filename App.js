/*
*<div id = "parent">
    <div id = "child1">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
    <div id = "child2">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
</div>
*
*
*/


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


const heading = React.createElement(
    "h1", 
    {id: "heading"},
    "Hello World in React!"
); 
    // 3 parameters- element(tag), object, childern
    //Objects is the place where you give attributes to the tags

console.log(heading) //this heading is a react-element which  is basically a Js object not an h1 tag yet
    
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // root.render job is to take this object create the h1 tag which the browser understands and put that inside the root(div) in dom:) ---------Amaaaaaziiiinnnnnnnnng




