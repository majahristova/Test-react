import React, { useState } from 'react';
import Modal from './Modal';
import '../Css/Contact.css';

function Contact() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: '',

  });

  const [sended, setSended] = React.useState(false);

  function changeFormdata(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  function sendInfomation() {
    setSended(true);
  }
  console.log(sended);

  return (
    <div className="Form-container">
      <p className="Labelname"> Name</p>
      <input type="text" id="text_name" placeholder="Lägg till namn" value={form.name} onChange={changeFormdata} name="name" />
      <p className="Labelemail"> Email</p>
      <input type="text" id="text_email" placeholder="Lägg till email" value={form.email} onChange={changeFormdata} name="email" />
      <p className="Labelmessage"> Message</p>
      <textarea id="Text_message" placeholder="Lägg till message" rows="4" cols="50" value={form.message} onChange={changeFormdata} name="message" />
      <button type="button" onClick={sendInfomation}>Skicka in</button>
      {' '}
      <br />
      <div id="Outputresult" name="outputresult">
        {

          sended && (
            <>
              <p>
                Name:
                {form.name}
              </p>
              <p>
                Email:
                {form.email}
              </p>
              <p>
                Message:
                {form.message}
              </p>
            </>

          )
        }
      </div>
    </div>
  );
}

function Modalapp() {
  const [openModal, setOpenmodal] = useState(false);
  const handleToggleModal = () => {
    // false => false
    setOpenmodal(!openModal);
  };
  return (

    <div className="Modalstyle">
      <Contact />
      <div className="Modalinfo">
        <h1>Hello! click on the button to book a call</h1>
        <button type="button" className="openmodalbtn" onClick={handleToggleModal}>Click here</button>
        {openModal && <Modal handleToggleModal={handleToggleModal} />}
      </div>
    </div>
  );
}

export default Modalapp;
