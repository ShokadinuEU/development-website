import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    padding               :  "0",
    borderRadius          :  "10px",
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

class SignIn extends React.Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: false
    }
  }

  openModal = () => {
    this.setState({modalIsOpen: true})
  }

  afterOpenModal = () => {
    this.subtitle.style.color = '#000';
    this.subtitle.style.backgroundColor = '#ccc';
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  render() {
    return (
      <div>
        <button className="navbar-button-main navbar-button-link" onClick={this.openModal}>Sign In</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Sign In Modal"
        >
          <div className="modal-wrapper">
            <h2 ref={subtitle => this.subtitle = subtitle}>Sign In</h2>
            <form>
              <input type="text" placeholder="Username"/><br />
              <input type="password" placeholder="Password"/><br />
              <button>Sign In</button>
            </form>
            <p>Forgot your 
              <a href="https://shokadinueu.github.io/development-website/">username</a> or&nbsp;
              <a href="https://shokadinueu.github.io/development-website/">password</a> 
            </p>
            <hr/>
            <div className="other-signIn-method">
              <p>Sign in with your LinkedIn account details</p>
              <img src="./data/images/logo/navbar/brand-logo.png" alt=""/>
            </div>
            <div className="new-user">
              <p>New to ShokadinuEU Studio?</p>
              <button>Sign Up</button>
            </div>
            <div className="facebook-signIn">
              <p>Signed in with facebook before?</p>
              <a href="https://shokadinueu.github.io/development-website/">Sign in with Facebook</a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SignIn