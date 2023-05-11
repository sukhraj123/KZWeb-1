
import IndexNavbar from "components/Navbars/IndexNavbar";
import {
  Button,

  Container,
  Row,
  Col,
  UncontrolledTooltip,
  
} from "reactstrap";
import React from "react";

// react plugin used to create charts


export default function AboutPage() {
  React.useEffect(() => {
    document.body.classList.toggle("about-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("about-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
     
<br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Sukh (Keez) Grewal</h1>
                <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("assets/img/sukh.jpg")}
                    />
                <h5 className="text-on-back">KZ</h5>
                <p className="profile-description">
                KZ a full-service website solutions company, located in Vancouver prefected with a professional grade of workmanship. Providing the experiences of tomorrow through innovative web design and development, brand strategy, & human-centered user experience.
<br/><br/><br/>
We are a creative digital media agency based in Vancouver that loves helping the HOSPITALITY BUSINESS connect with their customers.
<br/><br/><br/>
THINGS WE LOVE TO DO. Our services are tailored to your business needs and we can develop marketing strategies that enable your business to engage with customers.
                </p>
                <div className="btn-wrapper profile pt-3">
                  
                  <Button
                    className="btn-icon btn-round"
                    color="facebook"
                    href="https://m.facebook.com/p/Sukh-Grewal-100077630387673/?_rdr"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="dribbble"
                    href="https://instagram.com/keezwebdev"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip951161185">
                    Follow us
                  </UncontrolledTooltip>
                </div>
              </Col>
              </Row>
          </Container>

      
    </>
  );
}
