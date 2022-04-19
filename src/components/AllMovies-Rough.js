import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

function AllMoviesRough() {
    return (
        <div >
            <Container fluid style={{padding:"8%", background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{ background:"pink", border:"none"}}>
                            <Card.Img style={{borderRadius:"10px"}} variant="top" src="./carousel 3-1.avif" />
                            <Card.Body>
                            <Card.Title>The Batman</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{ background:"pink", border:"none"}}>
                            <Card.Img style={{borderRadius:"10px"}}  variant="top" src="./carousel 3-2.avif"/>
                            <Card.Body>
                            <Card.Title>King Richard</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{ background:"pink", border:"none"}}>
                            <Card.Img style={{borderRadius:"10px"}}  variant="top" src="./carousel 3-3.avif"/>
                            <Card.Body>
                            <Card.Title>Spider Man: No Way Home</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{ background:"pink", border:"none"}}>
                            <Card.Img style={{borderRadius:"10px"}}  variant="top" src="./carousel 3-4.avif"/>
                            <Card.Body>
                            <Card.Title>The Matrix</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{ background:"pink", border:"none"}}>
                            <Card.Img style={{borderRadius:"10px"}}  variant="top" src="./carousel 3-5.avif"/>
                            <Card.Body>
                            <Card.Title>The 355</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{ background:"pink", border:"none"}}>
                            <Card.Img style={{borderRadius:"10px"}}  variant="top" src="./carousel 3-6.avif"/>
                            <Card.Body>
                            <Card.Title>Dark Woods</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{ background:"pink", border:"none"}}>
                            <Card.Img style={{borderRadius:"10px"}} variant="top" src="./carousel 3-1.avif" />
                            <Card.Body>
                            <Card.Title>The Batman</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{ background:"pink", border:"none"}}>
                            <Card.Img style={{borderRadius:"10px"}}  variant="top" src="./carousel 3-2.avif"/>
                            <Card.Body>
                            <Card.Title>King Richard</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>

    );
  }
  
  export default AllMoviesRough;