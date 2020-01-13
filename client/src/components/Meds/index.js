import React from "react";

export function Meds({ children }) {
    return (
        <div className="med-list-cont">
            <ul className="med-list-group">{children}</ul>
        </div>
    );
}

export function ListItem({ children }) {
    return <li className="med">{children}</li>
}