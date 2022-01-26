import s from './Feedback.module.css'

const FeedbackOptions = ({good, neutral, bad}) => {
    return ( 
        <div className={s.buttons}>
                    <button type="button" onClick={good}>Good</button>
                    <button type="button" onClick={neutral}>Neutral</button>
                    <button type="button" onClick={bad}>Bad</button>
                </div>
     );
}
 
export default FeedbackOptions;