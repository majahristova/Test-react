import React from 'react';
import PropTypes from 'prop-types';

function Modal({ handleToggleModal }) {
  return (
    <div className="modalBackround">
      <div className="modalContainer">
        <button type="button" onClick={handleToggleModal}> x</button>
        <div className="modalbooking">
          <h2>The call is now booked</h2>
        </div>
        <div className="modalmessagebtn">
          <button type="button" onClick={handleToggleModal}>Cancell</button>
        </div>
      </div>
    </div>
  );
}
Modal.propTypes = {
  handleToggleModal: PropTypes.func,
};
Modal.defaultProps = {
  handleToggleModal: () => {},
};
export default Modal;
