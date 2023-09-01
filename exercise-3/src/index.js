import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => <h1>{props.title}</h1>;

const Part = (props) => {

  console.log("Part: ", props)
  return(
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  console.log("Content: ", props)
    return (
        <div>
            <Part name = {props.parametro1.name} exercises = {props.parametro1.exercises}/>
            <Part name = {props.parametro2.name} exercises = {props.parametro2.exercises}/>
            <Part name = {props.parametro3.name} exercises = {props.parametro3.exercises}/>
        </div>
    );
};

const Totals = (props) => (
    <p>Number of exercises {props.numA + props.numB + props.numC}</p>
);

const App = () => {
  const course = "Half Stack application development";
    const part1 = {
      name: "Fundamentals of React",
      exercises : 10
    }
    const part2 = {
      name: "Using props to pass data",
      exercises : 7

    }
    const part3 = {
      name: "State of a component",
      exercises : 14
    } 
    




    return (
        <div>
            <Header title={course} />
            <Content parametro1= {part1} parametro2= {part2} parametro3= {part3}/>
            <Totals numA={part1.exercises} numB={part2.exercises} numC={part3.exercises} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
