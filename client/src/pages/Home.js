import React, { Component, Fragment } from "react";
import { Container, Col } from "../components/Grid";
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

    // returnResults(){
    //     return (
    //         <Meds>
    //             {this.state.medications.map((meds, i) => (
    //                         <ListItem
    //                         key={i}
    //                         description={meds.results[i].description[i]}
    //                         />
    //                     ))}
    //         </Meds>
    //     )
        
    // }

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
            this.setState({ medications: [results] })
            console.log(this.state)
        })
        // .then(res => this.props.history.push("/search"))

        // API.getRx(this.state.query)
        // .then(res => console.log(res))
        // .then(results => {
        //     console.log(results);
        //     this.setState({ medications: results.data })
        // })
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
                <br/>
                <div className="advisory">Advisory:
                    <p className="adv-desc">Please do not rely on this information for medical advice.</p>
                </div>
                {!this.state.medications.length ? (
                    console.log(this.state.medications),
                    <h3 className="status">No Results to Display</h3>
                ) : (
                    <Meds>
                        {this.state.medications.map((meds, i) => {
                            console.log(meds.results[i].description[i])
                            return (
                            <Fragment>
                                <ListItem
                                key={meds[i]}
                                >
                                 {meds.results[i].description}
                                </ListItem>
                            </Fragment>
                            )
                        })}
                    </Meds>
                     )}
            </Container>
        );
    }
}

export default Home;