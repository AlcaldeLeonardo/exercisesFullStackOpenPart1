import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => <h1>{props.title}</h1>;

const Part = (props) => {
    console.log("Part: ", props);
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    );
};

const Content = (props) => {
    console.log("Content: ", props.parts);
    return (
        <div>
            <Part
                name={props.parts[0].name}
                exercises={props.parts[0].exercises}
            />
            <Part
                name={props.parts[1].name}
                exercises={props.parts[1].exercises}
            />
            <Part
                name={props.parts[2].name}
                exercises={props.parts[2].exercises}
            />
        </div>
    );
};

const Totals = (props) => {
    console.log("Totals: ", props.parts[0]);
    return (
        <p>
            Number of exercises
            {props.parts[0].exercises +
                props.parts[1].exercises +
                props.parts[2].exercises}
        </p>
    );
};

const App = () => {
    const course = {
        title: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            },
        ],
    };

    return (
        <div>
            <Header title={course.title} />
            <Content parts={course.parts} />
            <Totals parts={course.parts} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
