import React from "react";
import PropTypes from "prop-types";
import './button.scss'

const Button = (props) => {

    // bgcolor could be green or orange
    //buttonsize could be sm md or lg (small medium large)
    let changeClass = `btn btn-${props.buttonsize} ${props.bgcolor}`


    return (
        <>
        <button type={props.type} className={changeClass} {...props}>{props.textcontent} {props.children}</button>
        </>
    )
}
Button.propTypes = {
    buttonsize: PropTypes.string,
    bgcolor: PropTypes.string,
    textcontent: PropTypes.string
  };

export default Button;