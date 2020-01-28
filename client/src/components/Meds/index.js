import React from "react";
// import { Container, Row } from "../Grid";

export function Meds({ children }) {
    return <div className="med-list-cont">{children}</div>
}

export function ListItem({ children }) {
    console.log(children)
    return <div className="med"><p className="results">Results:</p>{children}</div>
}