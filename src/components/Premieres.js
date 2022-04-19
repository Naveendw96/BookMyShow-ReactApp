import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup  from 'react-bootstrap/CardGroup';
import './CardSlider.css';

function Premieres() {
    return (
        <div style={{marginBottom:"5%",background:"rgb(43, 49, 72)",padding:"5%"}}>
            <h2 style={{color:"white"}}>Premiere</h2>
            <Carousel indicators={false} variant="dark" style={{marginTop:"0.5rem"}}>
                <Carousel.Item>
                    <CardGroup >
                        <Card style={{padding:"1%",background:"rgb(43, 49, 72)",color:"white", borderRadius:"30px"}}>
                            <Card.Img style={{borderRadius:"10px"}} variant="top" src="./carousel 3-1.avif" />
                            <Card.Body>
                            <Card.Title>The Batman</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{padding:"1%",background:"rgb(43, 49, 72)",color:"white", borderRadius:"30px"}}>
                            <Card.Img style={{borderRadius:"10px"}}  variant="top" src="./carousel 3-2.avif"/>
                            <Card.Body>
                            <Card.Title>King Richard</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{padding:"1%",background:"rgb(43, 49, 72)",color:"white", borderRadius:"30px"}}>
                            <Card.Img style={{borderRadius:"10px"}}  variant="top" src="./carousel 3-3.avif"/>
                            <Card.Body>
                            <Card.Title>Spider Man: No Way Home</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{padding:"1%",background:"rgb(43, 49, 72)",color:"white", borderRadius:"30px"}}>
                            <Card.Img style={{borderRadius:"10px"}}  variant="top" src="./carousel 3-5.avif"/>
                            <Card.Body>
                            <Card.Title>The 355</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{padding:"1%",background:"rgb(43, 49, 72)",color:"white", borderRadius:"30px"}}>
                            <Card.Img style={{borderRadius:"10px"}}  variant="top" src="./carousel 3-6.avif"/>
                            <Card.Body>
                            <Card.Title>Dark Woods</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                    <CardGroup style={{background:"rgb(43, 49, 72)"}}>
                        <Card style={{padding:"1%",background:"rgb(43, 49, 72)",color:"white", borderRadius:"30px"}}>
                            <Card.Img style={{borderRadius:"10px"}}  variant="top" src="./carousel 3-4.avif"/>
                            <Card.Body>
                            <Card.Title>The Matrix</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{padding:"1%",background:"rgb(43, 49, 72)",color:"white", borderRadius:"30px"}}>
                            <Card.Img style={{borderRadius:"10px"}}  variant="top" src="./carousel 3-5.avif"/>
                            <Card.Body>
                            <Card.Title>The 355</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{padding:"1%",background:"rgb(43, 49, 72)",color:"white", borderRadius:"30px"}}>
                            <Card.Img style={{borderRadius:"10px"}}  variant="top" src="./carousel 3-6.avif"/>
                            <Card.Body>
                            <Card.Title>Dark Woods</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{padding:"1%",background:"rgb(43, 49, 72)",color:"white", borderRadius:"30px"}}>
                            <Card.Img style={{borderRadius:"10px"}}  variant="top" src="./carousel 3-1.avif"/>
                            <Card.Body>
                            <Card.Title>The Batman</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{padding:"1%",background:"rgb(43, 49, 72)",color:"white", borderRadius:"30px"}}>
                            <Card.Img variant="top" src="./carousel 3-2.avif"/>
                            <Card.Body>
                            <Card.Title>King Richard</Card.Title>
                            <Card.Text>English</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
      </div>
    );
  }
  
  export default Premieres;