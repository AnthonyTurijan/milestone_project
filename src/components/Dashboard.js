import React, { Component } from "react";
import Modal from "react-modal";
import Login from './Login'
import Signup from "./Signup"

// import './modal.css';




class Dashboard  extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showModal: false,
        activeModal: "",
      };
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
  
    handleOpenModal(val) {
      this.setState({ activeModal: val });
      this.setState({ showModal: true });
    }
  
    handleCloseModal() {
      this.setState({ showModal: false });
      this.setState({ showModal: "" });
    }
    render() {
      return(
        <>
        {/* {'one item with modal link -login'} */}
        <div className="icon">
            <a
              className="button"
              onClick={() => this.handleOpenModal("login")}
            >
              Login
            </a>
            <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "login"
              }
              contentLabel="login Modal"
            >
              <div className="content">
                <button className="close" onClick={this.handleCloseModal}>X</button>
                <p><Login />></p>
              </div>

            </Modal>
        </div>
        {/* {'another item with modal link calendar, add more by mutiplying this below'} */}
        <div className="icon">
            <a
              className="button"
              onClick={() => this.handleOpenModal("calendar")}
            >
              Signup
            </a>
            <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "calendar"
              }
              contentLabel="calendar Modal"
            >
              <div className="content">
                <button className="close" onClick={this.handleCloseModal}>X</button>
                <p><Signup /></p>
              </div>

            </Modal>
        </div>
        </>
      )
    }
}

export default Dashboard;
