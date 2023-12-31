import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => <h1>{props.title}</h1>;

const Content = (props) => (
    <p>
        {props.part} {props.exercises}
    </p>
);

const Totals = props => <p>Number of exercises {props.numA + props.numB + props.numC}</p>;

const App = () => {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;

    return (
        <div>
            <Header title={course} />
            <Content part={part1} exercises={exercises1} />
            <Content part={part2} exercises={exercises2} />
            <Content part={part3} exercises={exercises3} />
            <Totals numA = {exercises1} numB = {exercises2} numC = {exercises3} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
