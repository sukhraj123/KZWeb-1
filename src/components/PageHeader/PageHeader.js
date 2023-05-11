
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
          
          <p>I’m a Vancouver-based model specializing in luxury, high-end looks. Growing up surrounded by the city’s incredible art and culture sparked my ambition to pursue a life in modelling.</p>
        </div>
      </Container>
    </div>
  );
}
