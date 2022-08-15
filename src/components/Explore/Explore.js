import { Row, Col, Container, Card, CardImg, CardTitle, Button, CardImgOverlay } from "reactstrap";
import './explore.css';
import beach from '../../assets/cinnbeach.jpeg';
import hiking from '../../assets/cinnbaytrail.jpeg';
import snorkel from '../../assets/seaturtle.jpeg';


const Explore = () => {

    return (
        <section id="explore">
            <Container className="explore_stj">
                <p>Explore</p>
                <h5>Discover the Island of St. John</h5>
                <div>
                    <Row>
                        <Col md="4">
                            <Card 
                                inverse
                                className="my-2">
                                <CardImg
                                    alt="cinnamon bay beach"
                                    src= {beach}
                                    style={{
                                        height: 270
                                }}
                                    width="100%"
                                />
                                <CardImgOverlay>
                                    <CardTitle 
                                        className="card_title"
                                        tag="h5">
                                        Visit the Pristine Shores
                                    </CardTitle>
                                  
                                    <Button className="card_button"
                               
                                   >
                                    Learn More
                                    </Button>
                                </CardImgOverlay>
                            </Card>
                        </Col>
                        <Col md="4">
                        <Card 
                            inverse
                            className="my-2">
                                <CardImg
                              
                                    alt="sea trutle"
                                    src= {snorkel}
                                    style={{
                                        height: 270
                                }}
                                    width="100%"
                                />
                                <CardImgOverlay>
                                    <CardTitle 
                                        className="card_title"
                                        tag="h5">
                                        Swim with Turtles
                                    </CardTitle>
                                  
                                   
                                    <Button className="card_button"
                               
                                   >
                                    Learn More
                                    </Button>
                                </CardImgOverlay>
                            </Card>
                        </Col>
                        <Col md="4">
                        <Card 
                            inverse
                            className="my-2">
                                <CardImg
                                    alt="hiking view"
                                    src= {hiking}
                                    style={{
                                        height: 270
                                }}
                                    width="100%"
                                />
                                <CardImgOverlay>
                                    <CardTitle 
                                        className="card_title" tag="h5">
                                        Experience the Views
                                    </CardTitle>
                                 
                                    
                                    <Button className="card_button"
                                >
                                        Learn More
                                    </Button>
                                </CardImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Explore;