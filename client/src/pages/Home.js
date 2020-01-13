import React, { Component } from "react";
import { Container } from "../components/Grid";
// import { Link } from "react-router-dom";
import { Input, Btn } from "../components/Search";
import { Meds, ListItem } from "../components/Meds";
import API from "../utils/API";
class Home extends Component {
    state = {
        medications: [],
        query: ""
    };

    componentDidMount() {

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.query);
        
        API.getRx({ query: this.state.query })
        .then(res => {
            console.log(res);
            console.log(this.state.query);
            this.setState({ medications: res.data })
        })
        .catch(err => console.error(err));
    };

    render() {
        return (
            <Container>
                <form>
                    <Input value={this.state.query} onChange={this.handleInputChange} name="query" placeholder="Search Medication..." />
                    <Btn onClick={this.handleFormSubmit} />
                </form>
                {this.state.medications.length ? (
                    <Meds>
                        {this.state.medications.map(meds => (
                            <ListItem>
                                {meds.openfda.generic_name[0]}
                            </ListItem>
                        ))}
                    </Meds>
                ) : (
                    <h3> No Results to Display</h3>
                )}
            </Container>
        );
    }
}

export default Home;