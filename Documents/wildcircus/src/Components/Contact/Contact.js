import React from 'react';

function Contact() {
    return (
        <form className="text-center border border-light p-5 mb-3">
        <p className="h4 mb-4">Contactez-nous</p>
        <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Votre nom" />
        <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="Votre E-mail" />
        <div className="form-group">
          <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Votre message" />
        </div>
        <div className="custom-control custom-checkbox mb-4">
          <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy" />
        </div>
        <button className="btn btn-info btn-block" type="submit" onClick="">Envoyer</button>
      </form>
    )
  }
  export default Contact;
  