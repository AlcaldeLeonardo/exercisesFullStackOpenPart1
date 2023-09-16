import React, { useState } from "react";
import ReactDOM from "react-dom";

const ButtonBox = ({ clickGood, clickNeutral, clickBad }) => {
    return (
        <div>
            <h1>Give FeedBack</h1>
            <Button text="good" handleMouse={clickGood} />
            <Button text="neutral" handleMouse={clickNeutral} />
            <Button text="bad" handleMouse={clickBad} />
        </div>
    );
};

const StatisticsLine = ({ statisticName, statisticCounter }) => {
    return (
        <p>
            {statisticName} {statisticCounter}
        </p>
    );
};

const StatisticsBox = ({ good, neutral, bad }) => {
    let positive = 0;
    let average = 0;

    if (good > bad) average = 1;
    else if (good < bad) average = -1;
    else average = 0;

    if (good === 0) {
        positive = 0;
    } else {
        positive = (good * 100) / (good + neutral + bad);
        positive = positive.toString().concat(" %");
    }
    if (good === 0 && neutral === 0 && bad === 0)
        return (
            <div>
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </div>
        );
    else
        return (
            <div>
                <h2>Statistics</h2>
                <StatisticsLine
                    statisticName="Good"
                    statisticCounter={good}
                />
                <StatisticsLine
                    statisticName="Neutrar"
                    statisticCounter={neutral}
                />
                <StatisticsLine statisticName="Bad" statisticCounter={bad} />
                <StatisticsLine
                    statisticName="All"
                    statisticCounter={good + neutral + bad}
                />
                <StatisticsLine
                    statisticName="Average"
                    statisticCounter={average}
                />
                <StatisticsLine
                    statisticName="Positive"
                    statisticCounter={positive}
                />
            </div>
        );
};

const Button = ({ text, handleMouse }) => (
    <button onClick={handleMouse}>{text}</button>
);

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const increaseGood = () => setGood(good + 1);
    const increaseNeutral = () => setNeutral(neutral + 1);
    const increaseBad = () => setBad(bad + 1);

    return (
        <div>
            <ButtonBox
                clickGood={increaseGood}
                clickNeutral={increaseNeutral}
                clickBad={increaseBad}
            />
            <StatisticsBox good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
