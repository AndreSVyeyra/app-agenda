import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

class Event extends Component {
  render() {
    return (
        <React.Fragment>
            <h3>{this.props.time} - {this.props.title}</h3>
            <h6>Location: {this.props.location}</h6>
            <p>Desc: {this.props.description}</p>
        </React.Fragment>
    );
  }
}
export default Event;