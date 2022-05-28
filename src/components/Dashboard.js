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
        {/* {'Login Modal'} */}
        <div className="icon">
            <a
              className="button"
              onClick={() => this.handleOpenModal("Login")}
            >
              Login
            </a>
            <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "Login"
              }
              contentLabel="Login Modal"
            >
              <div className="content">
                <button className="close" onClick={this.handleCloseModal}>X</button>
                <p><Login /></p>
              </div>

            </Modal>
        </div>
        {/* {'Sign up modal'} */}
        <div className="icon">
            <a
              className="button"
              onClick={() => this.handleOpenModal("Signup")}
            >
              Signup
            </a>
            <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "Signup"
              }
              contentLabel="Signup Modal"
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
