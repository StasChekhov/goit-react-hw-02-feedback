import s from './Feedback.module.css'
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return ( 
        <div className={s.buttons}>
            {options.map(option => (
                <button
                    type="button"
                    key={option}
                    name={option}
                    onClick={() => onLeaveFeedback(option)}
                >
                    {option}   
                </button> 
            ))}
            
        </div>
     );
}
 
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
