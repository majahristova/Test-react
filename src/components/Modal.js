import React from 'react';
import Modalapp from './Contact';

function Modal({ handleToggleModal }) {
  return (
    <div className="modalBackround">
      <div className="modalContainer">
        <button onClick={handleToggleModal}> x</button>
        <div className="modalbooking">
          <h2>The call is now booked</h2>
        </div>
        <div className="modalmessagebtn">
          <button onClick={handleToggleModal}>Cancell</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
