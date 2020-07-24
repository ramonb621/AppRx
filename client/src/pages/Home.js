import React, { Component, Fragment } from "react";
import { Container, Col, Row } from "../components/Grid";
import { Link, Redirect } from "react-router-dom";
import { Input, Btn, Text } from "../components/Search";
import { Meds, ListItem, Save } from "../components/Meds";
import API from "../utils/API";
import "./Home.css"
class Home extends Component {
    state = {
        query: "",
        medication: "",
        prescribed_by: "",
        frequency: "",
        notes: "",
        medications: [],
        log: [],
        loading: false,
        open: false,
        open2: false,
        open3: false
    };

    componentDidMount() {
        this.loadMeds()
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

// Fetch call to OpenFDA API, sets results as state for medications array
    handleFormSubmit = (event) => {
        event.preventDefault();

        this.setState({ loading: true });

        fetch("https://api.fda.gov/drug/label.json?search=dosage_and_administration:" + this.state.query + "&limit=1")
        .then(res => {
            return res.json();
        })
        .then(results => {
            this.setState({ medications: [results], query: "" })
            // console.log(this.state.medications)
        })
        .catch(err => {
            this.setState({err})
        });

    };

// Gathers data from Mongoose database and sets response as the state for log array
    loadMeds = () => {
        this.setState({ loading: true })
        API.getMeds()
        .then(res => 
            this.setState({ log: res.data, medication: "", prescribed_by: "", frequency: "", notes: "" }),
            // console.log(this.state.log)
            )
            .catch(err => console.log(err));
    }

    handleSave = event => {
        event.preventDefault();

        API.saveMed({
            medication: this.state.medication,
            prescribed_by: this.state.prescribed_by,
            frequency: this.state.frequency,
            notes: this.state.notes
        })
        .then(res => this.loadMeds())
        .catch(err => console.log(err));

    }

    togglePanel = () => {
        this.setState({ open: !this.state.open })
    }

    togglePanel2 = () => {
        this.setState({ open2: !this.state.open2 })
    }

    togglePanel3 = () => {
        this.setState({ open3: !this.state.open3 })
    }

    render() {
        return (
            <Container>
                <form>
                    <Input className="search" value={this.state.query} onChange={this.handleInputChange} name="query" placeholder="Search Medication..." />
                    <Btn onClick={this.handleFormSubmit}>SEARCH</Btn>
                </form>
                <br/>
                <div className="advisory-cont">
                    <h3 className="advisory">ADVISORY:</h3>
                    <p className="adv-desc">Please <strong>DO NOT</strong> rely on this information for medical advice.</p>
                </div>
                {!this.state.medications.length ? (
                    // console.log(this.state.medications),
                    <h3 className="status">No Results to Display</h3>
                ) : (
                    <Meds>
                        {this.state.medications.map((meds, i) => {
                            return (
                            <Fragment>
                                <h3 className="results">RESULTS:</h3>
                                <ListItem>
                                    <div className="dosage" onClick={() => this.togglePanel()}>DOSAGE: <i className="far fa-caret-square-down"></i>
                                        {this.state.open ? (<div id="dosage">{meds.results[i].dosage_and_administration === undefined ? "No results to display" : meds.results[i].dosage_and_administration[i].split("DOSAGE AND ADMINISTRATION")}</div>) : null}
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div className="side_effects" onClick={() => this.togglePanel2()}>SIDE EFFECTS: <i className="far fa-caret-square-down"></i>
                                        {this.state.open2 ? (<div id="side_effects">{meds.results[i].adverse_reactions === undefined ? "No results to display" : meds.results[i].adverse_reactions[i].split("ADVERSE REACTIONS")}</div>) : null}
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div className="contraindications" onClick={() => this.togglePanel3()}>CONTRAINDICATIONS: <i className="far fa-caret-square-down"></i>
                                        {this.state.open3 ? (<div id="contraindications">{meds.results[i].contraindications === undefined ? "No results to display" : meds.results[i].contraindications[i].split("CONTRAINDICATIONS")}</div>) : null}
                                    </div>
                                </ListItem>
                            </Fragment>
                            )
                        })}
                        <form>
                            <Input className="medication" value={this.state.medication} onChange={this.handleInputChange} name="medication" placeholder="Rx Name..." />
                            <Input className="prescribed_by" value={this.state.prescribed_by} onChange={this.handleInputChange} name="prescribed_by" placeholder="Prescribed By..." />
                            <Input className="frequency" value={this.state.frequency} onChange={this.handleInputChange} name="frequency" placeholder="Frequency..." />
                            <Text className="notes" value={this.state.notes} onChange={this.handleInputChange} name="notes" placeholder="Notes..." />
                            <Btn onClick={this.handleSave}>SAVE NOTE</Btn>
                        </form>
                        <Col>
                            {this.state.log.length ? (
                                <Row>
                                    {this.state.log.map(rec => (
                                        <Meds key={rec._id}>
                                            <Link className="redirect" to={"/meds/" + rec._id}>
                                                {rec.medication}
                                            </Link>
                                        </Meds>
                                    ))}
                                </Row>
                            ) : (
                                <h4>No Saved Meds</h4>
                            )}
                        </Col>
                    </Meds>
                     )}
                     <Link className="link" to="/meds/:id">SAVED MEDS</Link>
            </Container>
        );
    }
}

export default Home;