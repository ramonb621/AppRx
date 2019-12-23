import React, { Component } from "react";
import Title from "../components/Title";
import { Container, Row, Col } from "../components/Grid";
// import { Link } from "react-router-dom";
import { Input, Text, FormBtn } from "../components/Search";

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

    render() {
        return (
            <Container>
                <form>
                    <Input value={this.state.query} onChange={this.handleInputChange} name="query" placeholder="Search Medication" />
                </form>
            </Container>
        );
    }
}

export default Home;