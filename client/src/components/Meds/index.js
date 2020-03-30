import React from "react";
import { Container, Col, Row } from "../Grid";
import "./style.css"

export function Meds({ children }) {
    return <div className="med-list-cont">{children}</div>
}

export function ListItem({ children }) {
    return (
        <Container>
            <div className="med"> 
                <Col>
                    <Row>
                        {/* <h3 className="results">RESULTS:</h3> */}
                        {children}
                    </Row>
                </Col>
            </div>
        </Container>
    )
}

export function Save({ children }) {
    return <div className="saved-meds">{children}</div>
}