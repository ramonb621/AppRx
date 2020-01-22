import React from "react";
import { Container, Row } from "../Grid";

export function Meds({ children }) {
    return (
        <div className="med-list-cont">
            <ul className="med-list-group">{children}</ul>
        </div>
    );
}

export function ListItem({ children }) {
    return <p className="med">{children}</p>
}

// export function ListItem({
//     description
// }) {

//     return (
//         <li className="med-item">
//             <Container>
//                 <Row>
//                     <p><strong>Description:</strong> {description} </p>
//                 </Row>
//             </Container>
//         </li>
//     )
// }