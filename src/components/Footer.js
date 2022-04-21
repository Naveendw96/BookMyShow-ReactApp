import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
    return (
      <div style={{background:"#504b4b", color:"white", height: "25rem"}}>
          <Container fluid>
            <Row style={{background:"#444343", padding:"2% 4%"}}>
                <Col xs={2}>
                    List your show
                </Col>
                <Col xs={8}>
                    Got a show, event, activity or a great experience? Partner with us and get listed on BookMyShow
                </Col>
                <Col xs={2}>
                    <Button style={{background:"rgb(236, 94, 113)", border:"0", display:"flex", flexDirection:"row-reverse", width:"130px"}}>Contact today</Button>
                </Col>
            </Row>
            <Row style={{textAlign:"center", paddingTop:"3%"}}>
                <Col>
                    <a  href="#"><img style={{marginBottom:"1rem", height:"60px"}} src="./customer_care.png" alt=""/></a>
                    <p>24/7 CUSTOMER CARE</p>

                </Col>
                <Col>
                    <a  href="#"><img style={{marginBottom:"1rem", height:"60px"}} src="./booking_confirmation.png" alt=""/></a>
                    <p>RESEND BOOKING CONFIRMATION</p>
                </Col>
                <Col>
                    <a  href="#"><img style={{marginBottom:"1rem", height:"60px"}} src="./newsletter.png" alt=""/></a>
                    <p>SUBSCRIBE TO THE NEWSLETTER</p>
                </Col> 
            </Row>
          </Container>
      </div>
    );
  }
  
  export default Footer;