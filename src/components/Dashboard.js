import React, { Component } from "react";
import Modal from "react-modal";
import Login from './Login'
import Signup from "./Signup"

import './modal.css';
const buttons = {
  padding: '5px', 
  borderRadius: '10px', 
  margin: '.5rem',
  borderColor: '#054a91'
}

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
            <button style={buttons}
              onClick={() => this.handleOpenModal("Login")}
            >
              Login
            </button>
            <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "Login"
              }
              className="Modal"
              overlayClassName="Overlay"
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
        <div >
            <button
              style={buttons}
              onClick={() => this.handleOpenModal("Signup")}
            >
              Signup
            </button>
            <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "Signup"
              }
              ariaHideApp={false}
              contentLabel="Signup Modal"
              className="Modal"
              overlayClassName="Overlay"
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
