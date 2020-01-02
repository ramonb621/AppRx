import React from "react";
import "./style.css";

export function Input(props) {
    return(
        <div className="form-group">
            <input className="search" {...props} />
              <button {...props} onClick={props.handleFormSubmit} className="search-btn">
                SUBMIT
              </button>
        </div>
    );

};