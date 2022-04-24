import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import {useState, useEffect } from 'react';



function AllMoviesFetch() {
    const [data, setData] = useState([]);

    // useEffect(async () => {
    //     try {
    //         const response = await axios.get('https://bms-backend-shapeai.herokuapp.com/movies');
    //         console.log(response);
    //         setData(response.data);          
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }, []);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://bms-backend-shapeai.herokuapp.com/movies');
            console.log(response);
            setData(response.data); 
        }
        fetchData();
    }, []); 

    return (
        <div >
            <Container fluid style={{padding:"8%", background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    {data.map((mov) =>
                        <Col id={mov._id} key={mov._id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                            <Card style={{ background:"pink", border:"none"}}>
                                <Card.Img onClick={() => window.location.href="/movie/"+mov._id} style={{borderRadius:"10px", cursor:"pointer"}} variant="top" src={mov.image} />
                                <Card.Body>
                                <Card.Title>{mov.title}</Card.Title>
                                <Card.Text>{mov.actor}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}
  
  export default AllMoviesFetch;