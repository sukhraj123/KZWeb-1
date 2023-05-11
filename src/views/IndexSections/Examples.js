import { Link } from "react-router-dom";
import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function Examples() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
        <h1>My Work</h1>
        <Row>
          <Col sm="6">
            <a href="https://kzwebsolutions.github.io/joeindica/">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/work (1).png")}
              />
            </a>
            
          </Col>
          <Col sm="6">
            <a href="https://kzwebsolutions.github.io/PP/">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/work (9).png")}
              />
            </a>
            
          </Col>
         
         
        </Row>
        <br/>
        <Button color="primary"> <Link to="work-page">Portfolio</Link></Button>
      </Container>
      <br></br>
      <Container className="text-center">
        <h1>My Portfolio</h1>
        <Row>
          <Col sm="6">
            
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/d (1).jpg")}
              />
          
            
          </Col>
          <Col sm="6">
            
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/d (43).jpg")}
              />
            
            
          </Col>
         
         
        </Row>
        <br/>
        <Button color="primary"> <Link to="port-page">View Portfolio</Link></Button>
      </Container>
    </div>
    
  );
}
