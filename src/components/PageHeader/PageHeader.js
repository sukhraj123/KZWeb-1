
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">•KEEZ•</h1>
          <p className=" d-sm-block">
          I’m a Vancouver-based model specializing in luxury, high-end looks. Growing up surrounded by the city’s incredible art and culture sparked my ambition to pursue a life in modelling.
          </p>
          <br/>
          <p>Whether you're a business owner looking to get started on a app or web development project with a freelance web developer, a developer looking to collaborate on something cool, or just wanting to say hi, shoot me a message and let's work together.</p>
        </div>
      </Container>
    </div>
  );
}
