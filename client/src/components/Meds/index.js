import React from "react";
import { Container, Col, Row } from "../Grid";
import "./style.css"

export function Meds({ children }) {
    return <div className="med-list-cont">{children}</div>
}

export function ListItem({ dosage, side_effects, contraindications, children }) {
    return (
        <Container>
            <div className="med"> 
                <Col>
                    <Row>
                        <h3 className="results">RESULTS:</h3>
                        <p className="dosage"><span id="dosage">DESCRIPTION: </span>{dosage}</p>
                        <p className="side_effects"><span id="side_effects">SIDE EFFECTS: </span>{side_effects}</p>
                        <p className="contraindications"><span id="contraindications">CONTRAINDICATIONS: </span>{contraindications}</p>
                        <div>
                            {children}
                        </div>
                    </Row>
                </Col>
            </div>
        </Container>
    )
}

export function Save({ children }) {
    return <div className="saved-meds">{children}</div>
}