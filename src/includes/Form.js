import React from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const submitHandler = (e) =>{
    e.preventDefault();
    let myForm = document.getElementById("contact-form");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate('/functionnality/success'))
      .catch((error) => alert(error));
  }
  return (
    <div>
      <form netlify name="contact" data-netlify="true" method="post" action={submitHandler}>
        <input type="hidden" name="form-name" value="contact" />
        <div className="row">
          <div className="col-6">
            <label for="name" className="form-label">
              Name:
            </label>
            <input className="form-control" name="name" type="text" />
          </div>
          <div className="col-6">
            <label for="vorname" className="form-label">
              Vorname:
            </label>
            <input className="form-control" name="vorname" type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label for="telefon" className="form-label">
              Tel:
            </label>
            <input className="form-control" name="telefon" type="tel" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label for="email" className="form-label">
              E-Mail:
            </label>
            <input required className="form-control" type="email" nameName="email" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label for="nachricht" className="form-label">
              Nachricht:
            </label>
            <textarea
              className="form-control"
              id="nachricht"
              rows="3"
              required
              name="nachricht"
            ></textarea>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Senden
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}