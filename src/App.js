import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
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
          description: "Encontro com o cliente para ouvir a proposta"
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
                <MDBCol xl="6" md="6" className="mx-auto text-center">
                  <MDBBtn className="button" rounded onClick={this.toggleModal}>
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
          <MDBModalBody>
          <form className="mx-3 grey-text">
          <MDBInput
            name="time"
            label="Horário"
            icon="clock"
            hint="12:30"
            group
            type="text"
            getValue={this.handleInputChange("time")}
          />
          <MDBInput
            name="title"
            label="Título"
            icon="edit"
            hint="Reunião"
            group
            type="text"
            getValue={this.handleInputChange("title")}
          />
          <MDBInput
            name="location"
            label="Local (opcional)"
            icon="map-marked"
            group
            type="text"
            getValue={this.handleInputChange("location")}
          />
          <MDBInput
            name="description"
            label="Descrição (opcional)"
            icon="comment-alt"
            group
            type="textarea"
            getValue={this.handleInputChange("description")}
          />
        </form>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
          <MDBBtn className="button" 
              onClick={() => {
              this.toggleModal();
              this.addEvent();
              }}>
            Adicionar
          </MDBBtn>
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
  handleInputChange = inputName => value => {
    const nextValue = value;
    this.setState({
      [inputName]: nextValue
    });
  };
  addEvent = () => {
    var newArray = [...this.state.events];
    newArray.push({
      id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
      time: this.state.time,
      title: this.state.title,
      location: this.state.location,
      description: this.state.description,
      value: this.var > 5 ? "Its's grater then 5" : "Its lower or equal 5"
    });
    this.setState({ events: newArray });
    this.setState({
      time: "",
      title: "",
      location: "",
      description: ""
    });
  };
}

export default App;
