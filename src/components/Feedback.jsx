import React from "react";
import s from './Feedback.module.css'

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    goodSum = () => { 
        this.setState(prevState => ({
            good: prevState.good + 1
        }));
    };

    neutralSum = () => { 
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }));
    };

    badSum = () => { 
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }));
    };


    countTotalFeedback = () => { 
        
        return this.state.good + this.state.neutral + this.state.bad
    };

    countPositiveFeedbackPercentage = () => { 
        return (this.state.good * 100)/this.countTotalFeedback()
    };


    render() {
        return (
            <div>
                <h2>Please leave feedback</h2>
                <div className={s.buttons}>
                    <button type="button" onClick={this.goodSum}>Good</button>
                    <button type="button" onClick={this.neutralSum}>Neutral</button>
                    <button type="button" onClick={this.badSum}>Bad</button>
                </div>
                <h2>Statistic</h2>
                <ul className={s.statistic}>
                    <li>Good:{this.state.good}</li>
                    <li>Neutral:{this.state.neutral}</li>
                    <li>Bad:{this.state.bad}</li>
                    <li>Total:{ this.countTotalFeedback() }</li>
                    <li>Positive feedback:{ this.countPositiveFeedbackPercentage() }%</li>
                </ul>
            </div>
        );
    }

}
export default Feedback;