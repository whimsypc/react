import React from "react";
import ReactDOM from 'react-dom/client';
/*
 <div id="parent">
 <div id="child">
 <h1 id="child1">I am tag 1</h1>
  <h2 id="child2">I am tag 2</h2>
 </div>
 </div>
 createElement returns Object => which is converted into HTML on render root.render(parent);
 */
const child1 = React.createElement("h1", { id: "heading" }, "Hi I am tag 1");
const child2 = React.createElement("h2", { id: "heading" }, "Hi I am tag ss 2");
const child = React.createElement("div", { id: "child1" }, [child1,child2])
const parent = React.createElement("div", { id: "parent" }, child)

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(parent);