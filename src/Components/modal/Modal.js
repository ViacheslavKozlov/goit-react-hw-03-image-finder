import { Component } from "react";
import PropTypes from "prop-types";
import style from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEsc);
  }
  handleEsc = evt => {
    if (evt.code === "Escape") {
      this.props.onSelect();
    }
  };
  handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onSelect();
    }
  };

  // handleEsc = evt => evt.code === "Escape" && this.props.onSelect();

  // handleBackdropClick = evt => {evt.currentTarget === evt.target && this.props.onSelect();

  render() {
    return (
      <div className={style.Overlay} onClick={this.handleBackdropClick}>
        <div className={style.Modal}>
          <img src={this.props.scr} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  handleEsc: PropTypes.func,
  handleBackdropClick: PropTypes.func
};

export default Modal;
