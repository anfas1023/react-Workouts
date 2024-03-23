import Welcome from "./Welcome";
import Code from "./Code";

export default function Conditinolcomponent() {
  let display = true;
  //    if(display){
  //     return <Welcome/>
  //    }else{
  //     return <Code/>
  //    }
  let message;
  return display ? <Welcome /> : <Code />;
  // if(display){
  //   message=<h6>This is Message one..!!</h6>
  // }else{
  //     message=<h6>This is messsage two..!!</h6>
  // }

  // return message
}

// Fragments

// In React, fragments provide a way to group multiple children elements without adding extra nodes to the DOM. Fragments allow you to return multiple elements from a component's render method without needing to wrap them in a single parent element. This can be particularly useful when you want to avoid introducing unnecessary wrapper elements, such as <div> or <span>, into your component tree.
