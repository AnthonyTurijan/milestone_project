import React, {Component} from "react";
import Modal from 'react-modal';
import NewEvent from "../components/NewEvent";
import '../components/css/modal.css'

const buttons = {
    padding: '5px', 
    borderRadius: '10px', 
    margin: '.5rem',
    borderColor: '#054a91'
  }

class Home extends Component{
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
render(){
    return(
        <div>
             <button
              style={buttons}
              onClick={()=> this.handleOpenModal("NewEvent")}
             >
                Add Event
             </button>
             <Modal
                isOpen={
                    this.state.showModal &&
                    this.state.activeModal === "NewEvent"
                }
                className='Modal'
                overlayClassName='Overlay'
                ariaHideApp={false}
                contentLabel="NewEvent Modal"
             >
                 <div style={{borderBottom: '1px solid #054a91'}}>
                 <div style={{display: 'flex', color:'#054a91', fontWeight: 'bold', width: '150px'}}>
                  Add New Event
                </div> 
                <button className="close" onClick={this.handleCloseModal}>
                    X
                  </button>
                  <NewEvent/> 
                 </div>
             </Modal>
        </div>
        
    )
    }
}

export default Home;