import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function form() {
  return (
    <div>
      <form name="contact v2" action="/success" method="post" data-netlify="true" onSubmit="submit" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact v2"></input>
        <div className="row pt-3">
          <div className="col-lg-6">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control value="contact v2" name="name" placeholder="Mustermann" type="text"></Form.Control>
            </Form.Group>
          </div>
          <div className="col-lg-6">
            <Form.Group>
              <Form.Label>Vorname</Form.Label>
              <Form.Control value="contact v2" name="vorname" placeholder="Max" type="text"></Form.Control>
            </Form.Group>
          </div>
        </div>

        <div className="col-lg-12 pt-3">
          <Form.Group>
            <Form.Label>Telefon</Form.Label>
            <Form.Control
              value="contact v2" name="telefon"
              placeholder="+ (XX) (XX)(XXX)(XXX)"
              type="tel"
            ></Form.Control>
          </Form.Group>
        </div>
        <div className="col-lg-12 pt-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email-Adresse</Form.Label>
            <Form.Control value="contact v2" name="email" type="email" placeholder="example@example.com" />
          </Form.Group>
        </div>
        <div className="col-lg-12">
          <Form.Group className="mb-3" controlId="formBasictxtArea">
            <label htmlFor="message" >Nachricht</label>
            <textarea
              value="contact v2"
              className="form-control"
              name="message"
              id="message"
            ></textarea>
          </Form.Group>
        </div>
        <div className="row">
          <div className="col-lg-12 text-end">
            <Button value="contact v2" id="submit-btn" type="submit">
              Senden
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
