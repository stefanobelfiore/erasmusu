import React from "react";
import PropTypes from "prop-types";

// const InputSelected = ({ value, label, options }) => {
const InputSelected = (props) => {
  return (
    <>
      <label htmlFor="exampleFormControlSelect1">{props.label}</label>
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        {...props}
      >
        {props.children}
        {props.options.map((option, i) => {
          return <option key={i}>{option}</option>;
        })}
      </select>
    </>
  );
};

InputSelected.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
};

export default InputSelected;
