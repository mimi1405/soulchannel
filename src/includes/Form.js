import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function form() {
  return (
    <div>
      <form action="/success" method="PULL" data-netlify="true" onSubmit="submit" data-netlify-honeypot="bot-field">
        <div className="row pt-3">
          <div className="col-lg-6">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Mustermann" type="text"></Form.Control>
            </Form.Group>
          </div>
          <div className="col-lg-6">
            <Form.Group>
              <Form.Label>Vorname</Form.Label>
              <Form.Control placeholder="Max" type="text"></Form.Control>
            </Form.Group>
          </div>
        </div>

        <div className="col-lg-12 pt-3">
          <Form.Group>
            <Form.Label>Telefon</Form.Label>
            <Form.Control
              placeholder="+ (XX) (XX)(XXX)(XXX)"
              type="tel"
            ></Form.Control>
          </Form.Group>
        </div>
        <div className="col-lg-12 pt-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email-Adresse</Form.Label>
            <Form.Control type="email" placeholder="example@example.com" />
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
            <Button id="submit-btn" type="submit">
              Senden
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
