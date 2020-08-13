import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./index.css";
import Event from './Event.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      events: [
        {
          id: 1,
          time: "09:30",
          title: "Visita ao cliente",
          location: "Zona Sul",
          description: "Encontro com o cliente para discussão de ideias produto"
        },
        {
          id: 2,
          time: "12:00",
          title: "Almoço com a esposa",
          location: "Restaurante X"
        },
        { 
          id: 3, 
          time: "14:30", 
          title: "Comprar roupas novas",
          location: "Shopping Leste",
          description: "Adquirir novas roupas sociais"
        },
        {
          id: 4,
          time: "20:00",
          title: "Aniversário do Ediney",
          location: "Indefinido"
        }
      ]
    };
  }
    render() {
      return (
          <React.Fragment>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="9" className="mb-r">
              <h2 className="text-uppercase my-3">HOJE:</h2>
              <div id="schedule-items">
                {this.state.events.map(event => (
                  <Event
                    key={event.id}
                    id={event.id}
                    time={event.time}
                    title={event.title}
                    location={event.location}
                    description={event.description}
                    onDelete={this.handleDelete}
                  />
                ))}
              </div>
              <MDBRow className="mb-4">
                <MDBCol xl="3" md="6" className="mx-auto text-center">
                  <MDBBtn color="green" rounded onClick={this.toggleModal}>
                    Adicionar evento
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="3">
              <h3 className="text-uppercase my-3">CRONOGRAMA</h3>
              <h6 className="my-3">
                Atenção com o tempo. Você tem {" "}
                <b>{this.state.events.length} eventos </b> hoje.
              </h6>
              <h2 className="my-3">
                <MDBRow>
                    <MDBCol xs="3" className="text-center">
                      <MDBIcon icon="sun" fixed />
                    </MDBCol>
                    <MDBCol xs="9">Ensolarado</MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol xs="3" className="text-center">
                    <MDBIcon icon="thermometer-three-quarters" fixed />
                    </MDBCol>
                    <MDBCol xs="9">28°C</MDBCol>
                  </MDBRow>
              </h2>
              <p>
              Hoje vai estar seco e ensolarado, tornando-se 
              quente à tarde com temperaturas entre 30 e 34 graus.
              Proteja-se.
              </p>
            </MDBCol>
          </MDBRow>
          </MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggleModal}>
          <MDBModalHeader
            className="text-center color"
            titleClass="w-100 font-weight-bold"
            toggle={this.toggleModal}
          >
            Adicionar novo evento
          </MDBModalHeader>
          <MDBModalBody>Body</MDBModalBody>
          <MDBModalFooter className="justify-content-center">
          </MDBModalFooter>
        </MDBModal>
          </React.Fragment>
      );
  }
  handleDelete = eventId => {
    const events = this.state.events.filter(e => e.id !== eventId);
    this.setState({ events });
  };
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
}

export default App;
