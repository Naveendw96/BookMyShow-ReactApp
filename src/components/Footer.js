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
                <img style={{height:"30px", paddingRight:"10px"}} src="./list.png" alt=""/>
                <p style={{display:"inline", fontWeight:"600"}}>List your show</p>    
                </Col>
                <Col xs={8}>
                    Got a show, event, activity or a great experience? Partner with us and get listed on BookMyShow
                </Col>
                <Col xs={2} style={{alignContent:"right"}}>
                    <Button style={{background:"rgb(236, 94, 113)", border:"0", display:"flex", flexDirection:"row-reverse", width:"130px"}}>Contact today</Button>
                </Col>
            </Row>
            <Row style={{textAlign:"center", padding:"1% 0"}}>
                <Col>
                    <a  href="#"><img style={{marginBottom:"1rem", height:"60px"}} src="./customer_care.png" alt=""/></a>
                    <p style={{fontSize:"12px"}}>24/7 CUSTOMER CARE</p>

                </Col>
                <Col>
                    <a  href="#"><img style={{marginBottom:"1rem", height:"60px"}} src="./booking_confirmation.png" alt=""/></a>
                    <p style={{fontSize:"12px"}}>RESEND BOOKING CONFIRMATION</p>
                </Col>
                <Col>
                    <a  href="#"><img style={{marginBottom:"1rem", height:"60px"}} src="./newsletter.png" alt=""/></a>
                    <p style={{fontSize:"12px"}}>SUBSCRIBE TO THE NEWSLETTER</p>
                </Col> 
            </Row>
            <Row style={{background:"#444343", padding:"2%"}}>
                <Col xs={2}>
  
                </Col>
                <Col xs={8}>
                    
                </Col>
                <Col xs={2}>
                    
                </Col>
            </Row>
          </Container>
      </div>
    );
  }
  
  export default Footer;