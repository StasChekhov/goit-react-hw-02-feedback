import React from "react";
import s from './Feedback.module.css'
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
    return ( 
        <div className={s.container}>
            <h2 className={s.titles}>{title}</h2>
            {children}
        </div>
     );
}
 
export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
}