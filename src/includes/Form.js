/* eslint-disable no-restricted-globals */

import React from "react";
import Form from "react-bootstrap/Form";
import { navigate } from "gatsby";


function encode(data) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}

const handleSubmit = (event) => {
  event.preventDefault();
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": event.target.getAttribute("name"),
      ...name,
    }),
  })
    .then(() => navigate("/success"))
    .catch((error) => alert(error));
};

export default function form() {
  return (
    <div>
      <form netlify name="contact v2" action="functionallity/success/" method="post" data-netlify="true" onSubmit={handleSubmit} data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact v2"></input>
        <div className="row pt-3">
          <div className="col-lg-6">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" placeholder="Mustermann" type="text"></Form.Control>
            </Form.Group>
          </div>
          <div className="col-lg-6">
            <Form.Group>
              <Form.Label>Vorname</Form.Label>
              <Form.Control name="vorname" placeholder="Max" type="text"></Form.Control>
            </Form.Group>
          </div>
        </div>

        <div className="col-lg-12 pt-3">
          <Form.Group>
            <Form.Label>Telefon</Form.Label>
            <Form.Control
             name="telefon"
              placeholder="+ (XX) (XX)(XXX)(XXX)"
              type="tel"
            ></Form.Control>
          </Form.Group>
        </div>
        <div className="col-lg-12 pt-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email-Adresse</Form.Label>
            <Form.Control name="email" type="email" placeholder="example@example.com" />
          </Form.Group>
        </div>
        <div className="col-lg-12">
          <Form.Group className="mb-3" controlId="formBasictxtArea">
            <label htmlFor="message" >Nachricht</label>
            <textarea
              className="form-control"
              name="message"
              id="message"
            ></textarea>
          </Form.Group>
        </div>
        <div className="row">
          <div className="col-lg-12 text-end">
            <button value="contact v2" id="submit-btn" type="submit">
              Senden
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
