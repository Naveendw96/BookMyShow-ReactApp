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

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./carousel 1-2.avif"
                alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./carousel 1-3.avif"
                alt="Third slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./carousel 1-4.avif"
                alt="First slide"
                />

            </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  
  export default SliderImages;
  