import Carousel from 'react-bootstrap/Carousel';

function SliderImages() {
    return (
      <div style={{background:"white",padding:"0.6rem"}}>
        <Carousel fade variant="dark" >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./carousel 1-1.avif"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./carousel 1-2.avif"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./carousel 1-3.avif"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./carousel 1-4.avif"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide labe4</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  
  export default SliderImages;
  