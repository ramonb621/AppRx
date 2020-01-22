import React from "react";
import "./style.css";

export function Input(props) {
    return(
        <div className="form-group">
            <input className="search" type="text" {...props} />
        </div>
    );

};

export function Btn(props) {
  return(
    <button {...props} className="search-btn">
     SEARCH
    </button>
  );
};