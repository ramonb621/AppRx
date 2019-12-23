import React from "react";

export function Input(props) {
    return(
        <div className="form-group">
            <input className="search" {...props} />
        </div>
    );
}

export function Text(props) {
    return (
      <div className="form-group">
        <textarea className="search" rows="1" {...props} />
      </div>
    );
}

export function FormBtn(props) {
    return (
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="search-btn">
        {props.children}
      </button>
    );
}