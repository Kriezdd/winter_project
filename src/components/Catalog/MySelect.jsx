import React, { useState } from "react";
const MySelect = ({options,defaultValue, value, onChange}) =>{
    return(
        <select className="Myselect" value={value} onChange={event => onChange(event.target.value)}>
             <option className="Myselect__option" disabled value={" "} >{defaultValue}</option>
             {options.map(option =>
             <option className="Myselect__option" key={option.value} value={option.value}>
                {option.name}
             </option>
             )}
        </select>
    )
}
export default MySelect;