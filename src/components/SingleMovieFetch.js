import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import axios from "axios";
import {useState, useEffect } from 'react';

function SingleMovieFetch() {
    const {movid} = useParams();
    const [singledata, setSingleData] = useState([]);

    useEffect(() => {
        async function fetchData(movid) {
            const response = await axios.get('https://bms-backend-shapeai.herokuapp.com/movie/'+movid);
            console.log(response);
            setSingleData([response.data]); 
            console.log(response.data);
        }
        fetchData(movid);
    }, [movid]); 

    return (
        <div >
            <Container fluid style={{padding:"8%", background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    {singledata.map((mov) => {
                        return(
                            <Col id={mov._id} key={mov._id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                                <Card style={{ background:"pink", border:"none"}}>
                                    <Card.Img style={{borderRadius:"10px"}} variant="top" src={mov.image} />
                                    <Card.Body>
                                    <Card.Title>{mov.title}</Card.Title>
                                    <Card.Text>{mov.actor}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}                          
                </Row>
            </Container>
        </div>
    );
  }
  
  export default SingleMovieFetch;