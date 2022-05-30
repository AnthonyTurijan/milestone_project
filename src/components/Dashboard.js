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
      this.setState({ showModal: false });
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
              ariaHideApp={false}
              contentLabel="Login Modal"
            >
              <div className="content">
                <button className="close" onClick={this.handleCloseModal}>X</button>
               <Login />
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
              ariaHideApp={false}
              contentLabel="Signup Modal"
            >
              <div className="content">
                <button className="close" onClick={this.handleCloseModal}>X</button>
                <Signup />
              </div>

            </Modal>
        </div>
        </>
      )
    }
}

export default Dashboard;
