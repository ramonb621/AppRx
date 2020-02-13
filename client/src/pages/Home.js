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
        loading: false
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
                                <ListItem
                                key={`DrugId-${this.state.query}`}                                
                                dosage={meds.results[i].dosage_and_administration === undefined ? "No results to display" : meds.results[i].dosage_and_administration[i].split("DOSAGE AND ADMINISTRATION")}
                                side_effects={meds.results[i].adverse_reactions === undefined ? "No results to display" : meds.results[i].adverse_reactions[i].split("ADVERSE REACTIONS")}
                                contraindications={meds.results[i].contraindications === undefined ? "No results to display" : meds.results[i].contraindications[i].split("CONTRAINDICATIONS")}
                                />
                            </Fragment>
                            )
                        })}
                        <form>
                            <Input className="medication" value={this.state.medication} onChange={this.handleInputChange} name="medication" placeholder="Medication Name..." />
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
                                            <Link to={"/meds/" + rec._id}>
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