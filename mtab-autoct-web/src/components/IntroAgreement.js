import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class IntroAgreement extends React.Component {

    state = {
        agreed: false
    }

    hideModal(){
        this.setState({ agreed: true})
    }
    render = () => {
        // const show = true;

        return (
            <Modal
                // {...props}
                size="lg"
                
                show={!this.state.agreed}
                // onHide={handleClose}
                // backdrop="static"
                // keyboard={false}
                centered={true}
                className = "popup-agreement"
                // style= {{backgroundColor:"#F0F4EF"}}
            >
                <Modal.Header>
                    <Modal.Title> Welcome to Auto CT! </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </Modal.Body>
                <Modal.Footer show = {!this.state.agreed}>
                    <Button variant="primary" 
                    className = "customBtn" 
                    style={{ color: "black", background: "#B4CDED" }}
                    onClick={() => this.hideModal()}>
                        I acknowledge the statement above and agree to the terms and conditions.
                    
                    </Button>
                    {/* <Button></Button> */}
                    {/* <Button>ahhhh</Button> */}
                </Modal.Footer>
                {/* <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                I will not close if you click outside me. Don't even try to press
                escape key.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
                </Modal.Footer> */}
            </Modal>
        )
    }
}

export default IntroAgreement;