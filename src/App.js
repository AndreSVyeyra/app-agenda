import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./index.css";
import Event from './Event.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          id: 1,
          time: "07:00",
          title: "Titulo 01",
          location: "Local 01",
          description: "Descrição 01"
        },
        {
          id: 2,
          time: "07:30",
          title: "Titulo 02",
          location: "Local 02"
        },
        { 
          id: 3, 
          time: "08:00", 
          title: "Titulo 03" 
        },
        {
          id: 4,
          time: "08:30",
          title: "Titulo 04",
          location: "Local 04",
          description: "A"
        }
      ]
    };
  }
    render() {
      return (
          <React.Fragment>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="9">
              {this.state.events.map(event => (
                  <Event
                    key={event.id}
                    id={event.id}
                    time={event.time}
                    title={event.title}
                    location={event.location}
                    description={event.description}
                  />
                ))}
              </MDBCol>
              <MDBCol md="3" />
            </MDBRow>
          </MDBContainer>
          </React.Fragment>
      );
  }
}
export default App;
