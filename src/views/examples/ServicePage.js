
import Footer from "components/Footer/Footer";
import IndexNavbar from "components/Navbars/IndexNavbar";
import {
  Button,

  Container,
  Row,
  Col,
  UncontrolledTooltip,
  
} from "reactstrap";
import React from "react";
import Navbars from "views/IndexSections/Navbars";

// react plugin used to create charts


export default function ServicePage() {
  React.useEffect(() => {
    document.body.classList.toggle("service-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("service-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
     
<Navbars/>

      <Footer />
    </>
  );
}
