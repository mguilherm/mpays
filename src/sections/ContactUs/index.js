import React from "react";
import "./index.css";
import Form from "../../components/Form";

function ContactUs() {
  return (
    <div className="contact-us">
      <span>
      <h3>Crie sua conta</h3>
      <p>Preencha o formulário ao lado para cadastrar-se no mpays.</p>
      </span>
      <Form />
    </div>
  );
}

export default ContactUs;
