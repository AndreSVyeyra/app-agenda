import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import "./index.css";

class Event extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="media mt-1">
                <h3 className="h3-responsive font-weight-bold mr-3">
                {this.props.time}
                </h3>
            
                <div className="media-body mb-3 mb-lg-3">
                    <MDBBadge onClick={() => this.props.onDelete(this.props.id)} color="danger" className="ml-2 float-right">
                    -
                    </MDBBadge>
                    <h6 className="mt-0 font-weight-bold">{this.props.title} </h6>{" "}
                    <hr className="hr-bold my-2" />
                    {this.props.location && (
                        <React.Fragment>
                            <p className="font-smaller mb-0">
                            <MDBIcon icon="location-arrow" /> {this.props.location}
                            </p>
                        </React.Fragment>
                    )}
                </div>
            </div>
            {this.props.description && (
                <p className="p-2 mb-4 lighten-5 lighten-5">
                {this.props.description}
                </p>
            )}
        </React.Fragment>
    );
  }
}
export default Event;