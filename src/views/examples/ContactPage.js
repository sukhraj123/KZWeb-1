
import Footer from "components/Footer/Footer";
import IndexNavbar from "components/Navbars/IndexNavbar";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  
  FormGroup,
  Form,
  Input,

  Container,
  Row,
  Col,
  UncontrolledTooltip,
  
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
                      +1 604 445 4042 

                      <br />
                      nolimit.grewal@gmail.com
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

      <Footer />
    </>
  );
}
