import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modall } from './Modal.styles';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.hendelKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendelKeyDown);
  }

  hendelKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Modall>
          <img src={src} alt={alt} width="900" />
        </Modall>
      </Overlay>,
      modalRoot
    );
  }
}
export default Modal;
