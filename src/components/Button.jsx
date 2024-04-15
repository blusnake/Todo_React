import React from "react";

const Button = ({ children, onClick, value }) => {
 return(
    <button type="button" onClick={onClick} value={value}>{children}</button>
 )
}

export default Button 