import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
    return (
      <div style={{background:"black", color:"white", padding:"3%"}}>
          <Container>
            <Row>
                <Col xs={3}>
                    Col 1
                </Col>
                <Col xs={7}>
                    Col 2
                </Col>
                <Col xs={2}>
                    <Button style={{background:"rgb(236, 94, 113)", border:"0"}}>Contact today</Button>
                </Col>
            </Row>
            <Row style={{textAlign:"center", padding:"3%"}}>
                <Col>
                    Col 1
                </Col>
                <Col>
                    Col 2
                </Col>
                <Col>
                    Col 3
                </Col> 
            </Row>
          </Container>
      </div>
    );
  }
  
  export default Footer;