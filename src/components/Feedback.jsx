import React, {Component} from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";
import Notification from "./Notification";

class Feedback extends Component {
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
        return Math.round((this.state.good * 100) / this.countTotalFeedback());
       
    };

    render() {
        return (
            <div>
                <Section title="Please leave feedback"
                >
                    
                    <FeedbackOptions
                        good={this.goodSum}
                        neutral={this.neutralSum}
                        bad={this.badSum}
                    />
                </Section>  
                <Section title="Statistic">
                    {this.countTotalFeedback() === 0 ? (
                        <Notification message="No feedback given"/>
                            ) : (
                        <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={ this.countPositiveFeedbackPercentage()}
                    />
                    )}
                </Section>
            </div>
        );
    }

}
export default Feedback;