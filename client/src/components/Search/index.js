import React from "react";
import "./style.css";

export function Input(props) {
    return (
            <input type="text" {...props} />
        
    );

};

export function Btn(props) {
  return (
    <button {...props} className="search-btn">
     {props.children}
    </button>
  );
};

export function Text(props) {
  return (
    <div>
      <textarea className="text-area" rows="40" {...props} />
    </div>
  )
}