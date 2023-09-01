import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => <h1>{props.title}</h1>;

const Part = (props) => <p>{props.part} {props.exercises}</p>

const Content = (props) => {
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";

  return (
    <div>
      <Part part = {part1} exercises = {props.ex1}/>
      <Part part = {part2} exercises = {props.ex2}/>
      <Part part = {part3} exercises = {props.ex3}/>
    </div>
  )
  
};

const Totals = props => <p>Number of exercises {props.numA + props.numB + props.numC}</p>;

const App = () => {
    const course = "Half Stack application development";
    
    const exercises1 = 10;
    
    const exercises2 = 7;
    
    const exercises3 = 14;

    return (
        <div>
            <Header title={course} />
            <Content ex1 = {exercises1} ex2 = {exercises2} ex3 = {exercises3} />
            <Totals numA = {exercises1} numB = {exercises2} numC = {exercises3} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
