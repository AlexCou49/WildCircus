import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);
    formData.append('message', message);
    // console.log(emailpro, namepro, messagepro)
    axios.post('http://localhost:8000/message', formData).then((result) => {
      // console.log(result);
    });
  };

   return (
        <form className="text-center border-light p-5 mb-3">
        <p className="h4 mb-4">Contactez-nous</p>
        <input type="text" value={name} onChange={event => setName(event.target.value)} id="defaultContactFormName" className="form-control mb-4" placeholder="Votre nom" />
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} id="defaultContactFormEmail" className="form-control mb-4" placeholder="Votre E-mail" />
        <div className="form-group">
          <textarea className="form-control mb-6" type="message" value={message} onChange={event => setMessage(event.target.value)} id="exampleFormControlTextarea2" rows="3" placeholder="Votre message" />
        </div>
        <div className="custom-control custom-checkbox mb-4">
          <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy" />
        </div>
        <button className="btn btn-info btn-block" type="submit" onClick={submitForm}>Envoyer</button>
      </form>
    )
  }
  export default Contact;
  
