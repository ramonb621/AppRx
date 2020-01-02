import React from "react";
import "./style.css"

export function Container({children}) {
    return <div className="container">{children}</div>
};

export function Row() {
    return <div className="row"></div>
};

export function Col() {
    return <div className="col"></div>
};