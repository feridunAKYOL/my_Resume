import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const ContactPart = () => {
  return (
    <Container fluid className="contact-part">
      <Row className="contact_sections">
        <Col className="contact_sec">
          <Row>
            <Col xs={1}>
              <i className="fas fa-home contacts-i"></i>
            </Col>
            <Col xs={4}>
              <p className="contacts">Mailing Address</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Feridun Akyol
                <br />
                Borgloon, Limburg
                <br />
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={1}>
              <i className="fas fa-envelope contacts-i"></i>
            </Col>
            <Col xs={4}>
              <p className="contacts">Email</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <a href="/">feridunakyol34@gmail.com</a>
              </p>
            </Col>
          </Row>
        </Col>
        <Col className="contact_sec">
          <Row>
            <Col xs={1}>
              <i className="fas fa-phone contacts-i"></i>
            </Col>
            <Col xs={1}>
              <p className="contacts">Phone</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>(0486) 05-45-27</p>
            </Col>
          </Row>
        </Col>
        <Col className="contact_sec">
          <Row>
            <Col xs={1}>
              <i className="fas fa-comment contacts-i"></i>
            </Col>
            <Col xs={4}>
              <p className="contacts">Social</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <a href="https://www.linkedin.com/in/feridun-akyol-0261261b2">
                  <i
                    className="fab fa-linkedin contacts-i"
                    style={{ fontSize: "36px" }}
                  ></i>
                </a>
                <a href="https://github.com/feridunAKYOL">
                  <i
                    class="fab fa-github-square contacts-i"
                    style={{ fontSize: "36px" }}
                  ></i>
                </a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPart;
