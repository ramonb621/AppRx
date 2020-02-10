import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Btn } from "../components/Search";
import { Meds, Save } from "../components/Meds";
import API from "../utils/API";
import "./Rec.css";

class Rec extends Component {
    state = {
        medications: [],
        saved: true,
    }
    componentDidMount() {
        this.loadMeds()
    };

    loadMeds = () => {
        API.getMeds()
        .then(res => this.setState({ medications: res.data }))
        .catch(err => console.log(err));
    }

    handleDelete = (id) => {
        API.deleteMed(id)
        .then(res => this.loadMeds())
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                    {!this.state.medications.length ? (
                        <h2>No Meds Saved</h2>
                    ) : (
                        <Meds>
                            {this.state.medications.map(meds => {
                                return (
                                    <Save key={meds._id}>
                                        <p className="db-med">MEDICATION NAME: <span className="db-res">{meds.medication}</span></p>
                                        <p className="db-med">PRESCRIBED BY: <span className="db-res">{meds.prescribed_by}</span></p>
                                        <p className="db-med">FREQUENCY: <span className="db-res">{meds.frequency}</span></p>
                                        <p className="db-med">NOTES: <span className="db-res">{meds.notes}</span></p>
                                    <Btn className="delete-btn" onClick={() => this.handleDelete(meds._id)}>DELETE</Btn>
                                    </Save>
                                )
                            })}
                        </Meds>
                    )}
                    </Col>
                </Row>
                <Link className="link" to="/meds">SEARCH</Link>
            </Container>
        )
    }
}

export default Rec;