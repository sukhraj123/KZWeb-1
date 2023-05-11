/* eslint-disable jsx-a11y/anchor-is-valid */
import IndexNavbar from "components/Navbars/IndexNavbar";
import {
  
  Card,
  CardHeader,
  CardBody,
  


  Container,
  Row,
  Col,
  
  
} from "reactstrap";
import React from "react";

// react plugin used to create charts


export default function ContactPage() {
  React.useEffect(() => {
    document.body.classList.toggle("contact-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("contact-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
     
<br/><br/><br/><br/><br/><br/><br/><br/><br/>
<section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Contact</h1>
                    <h5 className="text-on-back">KZ</h5>
                  </CardHeader>
                  <CardBody>
                   
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                  <h4 className="info-title">Located</h4>
                  <p>Vancouver, B.C.</p>
                  </div>
                </div>
                <div className="info info-horizontal">
               
                  <div className="icon icon-primary">
                  
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give us a ring</h4>
                    <p>
                      Sukh (Keez) Grewal <br />
                      <a href="tel:6044454042">+1 604 445 4042 </a>
                      

                      <br />
                      <a href="mailto:nolimit.grewal@gmail.com">nolimit.grewal@gmail.com</a>
                      
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

      
    </>
  );
}
