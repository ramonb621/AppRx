import React, { Component } from "react";
import Title from "../components/Title";
import { Container, Row, Col } from "../components/Grid";
// import { Link } from "react-router-dom";
import { Input } from "../components/Search";
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
        
        API.getRx(this.state.query)
        .then(res => {
            console.log(res);
            this.setState({ query: res.data })
        })
        .catch(err => console.error(err));
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