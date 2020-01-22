import React, { Component } from "react";
import { Container } from "../components/Grid";
// import { Link } from "react-router-dom";
import { Input, Btn } from "../components/Search";
import { Meds, ListItem } from "../components/Meds";
import API from "../utils/API";
class Home extends Component {
    state = {
        query: "",
        medications: [],
        loading: false
    };

    componentDidMount() {

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        console.log(this.state.query);

        fetch("https://api.fda.gov/drug/label.json?search=dosage_and_administration:" + this.state.query + "&limit=1")
        .then(res => {
            return res.json();
        })
        .then(results => {
            this.setState({ medications: results })
            console.log(this.state.medications)
        })
        // .then(res => this.props.history.push("/search"))

        // API.getRx(this.state.query)
        // .then(res => console.log(res))
        // .then(results => {
        //     console.log(results);
        //     this.setState({ medications: results })
        // })
        // .then(console.log(this.state.medications))
        .catch(err => {
            this.setState({err})
        });
    };

    render() {
        return (
            <Container>
                <form>
                    <Input value={this.state.query} onChange={this.handleInputChange} name="query" placeholder="Search Medication..." />
                    <Btn onClick={this.handleFormSubmit} 
                    />
                </form>
                <h3>Results:</h3>
                {!this.state.medications.length ? (
                    <h3>No Results to Display</h3>
                ) : (
                    <Meds>
                        {this.state.medications.map(meds => {
                            return (
                                <ListItem
                                description={meds.results[0].description}
                                />
                            )
                        })}
                    </Meds>
                )}
                {/* {this.state.medications.length ? (
                    <Meds>
                        {this.state.medications.map(meds => (
                            <ListItem
                                name={meds.results[0].description[0]}
                            />
                        ))}
                    </Meds>
                ) : (
                    <h3> No Results to Display</h3>
                )} */}
            </Container>
        );
    }
}

export default Home;