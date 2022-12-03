import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Services from "./Services";
import { useNavigate } from "react-router-dom";

export default function Service(props) {
  let navigate = useNavigate();

  const coaching = () => {
    let path = `/coaching`;
    navigate(path);
  };

  const fitnessCoaching = () => {
    let path = `/fitness-coaching`;
    navigate(path);
  };
  const youtubeCoaching = () => {
    let path = `/youtube-coaching`;
    navigate(path);
  };

  const routeService = () => {
    if (props.serviceTitle === "Persönliches Gespräch") {
      coaching();
    } else if (props.serviceTitle === "Fitness-Coaching") {
      fitnessCoaching();
    } else if (props.serviceTitle === "Youtube-Coaching") {
      youtubeCoaching();
    }
  };

  return (
    <Card
      style={{
        backgroundColor: "white",
        border: "solid",
        borderColor: "white",
        borderWidth: "0.1px",
      }}
      className="card text-center"
    >
      <a style={{ pointer: "cursor" }} onClick={routeService}>
        <div className="wrapper">
          <Card.Img className="card-img" variant="top" src={props.image} />
        </div>
      </a>

      <Card.Body>
        <Card.Title className="text-center">{props.serviceTitle}</Card.Title>
        <br />
        <Card.Text style={{ color: "black" }} className="text-center">
          {props.text}
          <br />
          <br />
          {props.time}
          <br />
          <br />
          {props.price}
        </Card.Text>
        <br />
        <button onClick={routeService} type="button" className="service-btn">
          Mehr Informationen
        </button>
      </Card.Body>
    </Card>
  );
}
