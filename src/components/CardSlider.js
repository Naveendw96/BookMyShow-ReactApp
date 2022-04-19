import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup  from 'react-bootstrap/CardGroup';
import './CardSlider.css';

function CardSlider() {
    return (
      <div style={{padding:"5%"}}>
        <h4 style={{color:"black", fontWeight:"bold"}}>The Best of Entertainment</h4>
        <Carousel indicators={false} variant="dark" style={{marginTop:"0.5rem"}}>
            <Carousel.Item>
                <CardGroup>
                    <Card className="bg-dark text-white" style={{height:"200px", width:"300px",margin:"10px", borderRadius:"50px", border: 0}}  >
                    <Card.Img style={{borderRadius:"10px"}} src="./carousel 2-1.avif" alt="Card image" />
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"200px", width:"300px",margin:"10px", borderRadius:"50px", border: 0}} >
                    <Card.Img style={{borderRadius:"10px"}} src="./carousel 2-2.avif" alt="Card image" />
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"200px", width:"300px",margin:"10px", borderRadius:"50px", border: 0}} >
                    <Card.Img style={{borderRadius:"10px"}} src="./carousel 2-3.avif" alt="Card image" />
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"200px", width:"300px",margin:"10px", borderRadius:"50px", border: 0}} >
                    <Card.Img style={{borderRadius:"10px"}} src="./carousel 2-4.avif" alt="Card image" />
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"200px", width:"300px",margin:"10px", borderRadius:"50px", border: 0}} >
                    <Card.Img style={{borderRadius:"10px"}} src="./carousel 2-5.avif" alt="Card image" />
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup>
                 
                    <Card className="bg-dark text-white" style={{height:"200px", width:"300px",margin:"10px", borderRadius:"50px", border: 0}} >
                    <Card.Img style={{borderRadius:"10px"}} src="./carousel 2-6.avif" alt="Card image" />
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"200px", width:"300px",margin:"10px", borderRadius:"50px", border: 0}} >
                    <Card.Img style={{borderRadius:"10px"}} src="./carousel 2-7.avif" alt="Card image" />
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"200px", width:"300px",margin:"10px", borderRadius:"50px", border: 0}} >
                    <Card.Img style={{borderRadius:"10px"}} src="./carousel 2-8.avif" alt="Card image" />
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"200px", width:"300px",margin:"10px", borderRadius:"50px", border: 0}} >
                    <Card.Img style={{borderRadius:"10px"}} src="./carousel 2-9.avif" alt="Card image" />
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"200px", width:"300px",margin:"10px", borderRadius:"50px", border: 0}} >
                    <Card.Img style={{borderRadius:"10px"}} src="./carousel 2-10.avif" alt="Card image" />
                    </Card>
                </CardGroup>
            </Carousel.Item>        
              
        </Carousel>
      </div>
    );
  }
  
  export default CardSlider;