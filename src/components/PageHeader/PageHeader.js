
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
          <h1 className="h1-seo">KZ•Web</h1>
          <h3 className="d-none d-sm-block">
          TRANSFORM BRANDS THROUGH INSPIRATION
          </h3>
          <p className="category">Whether you're a business owner looking to get started on a app or web development project with a freelance web developer, a developer looking to collaborate on something cool, or just wanting to say hi, shoot me a message and let's work together.</p>
        </div>
      </Container>
    </div>
  );
}
