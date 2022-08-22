import { Row, Col, Container, Card, CardTitle, CardFooter, CardText, Button, CardBody, CardSubtitle } from "reactstrap";
import './booking.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Maho from '../../assets/oldmaho.jpeg';
import Francis from '../../assets/francisbay.jpeg';
import Honeymoon from '../../assets/honeymoon.jpeg';
import Waterlemon from '../../assets/waterlemonbay.jpeg';
import MahoTrail from '../../assets/mahotrail.jpeg';
import MahoPalms from '../../assets/mahopalms.jpeg';


const Booking = () => {
    return (
        <section id="booking">
            <Container className="booking_stj">
              
                <h3>Exclusive Offers</h3>
            
                <Row className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
                    <Col xs="12">
                        <Card
                            className="booking_card"
                        >
                            <img
                                alt="Sample"
                                src={Maho}
                            />
                        <CardBody>
                                
                        <ul className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                </ul> 
                                
                            <CardTitle tag="h5" className="booking_title">
                                Serenity Package
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                            Beaches <FontAwesomeIcon icon={faCircle} className="circle" />
                            Spa
                            </CardSubtitle>
                            <CardText className="card_text">
                            Save 40% when you book all-inclusive!
                            </CardText>
                        
                        
                            <Button className="btn mx-auto d-grid">
                                Book Now
                            </Button>
                        </CardBody>
                        <CardFooter className="booking_footer">
                            6 Nights starting from $1099*
                        </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12">
                        <Card
                            className="booking_card"
                        >
                            <img
                                alt="Sample"
                                src={Francis}
                            />
                        <CardBody>
                        <ul className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalfStroke} />
                            </ul>
                            <CardTitle tag="h5" className="booking_title">
                                Family Fun Package
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                                >
                                Beaches <FontAwesomeIcon icon={faCircle} className="circle" />
                                Snorkeling
                            </CardSubtitle>
                            <CardText className="card_text">
                            Save 43% when you book as a family of 4 or more!
                            </CardText>
                            
                           
                            
                            
                            <Button className="btn mx-auto d-grid">
                                Book Now
                            </Button>
                        </CardBody>
                        <CardFooter className="booking_footer">
                            5 Nights starting from $699*
                        </CardFooter>
                        </Card>
                    </Col>
        
                    <Col xs="12">
                        <Card
                            className="booking_card"
                        >
                            <img
                                alt="Sample"
                                src={Honeymoon}
                            />
                        <CardBody>
                        <ul className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalfStroke} />
                            </ul>

                            <CardTitle tag="h5" className="booking_title">
                                Adventure Package
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                                >
                                Beaches <FontAwesomeIcon icon={faCircle} className="circle" />
                                Water Sports
                            </CardSubtitle>
                            <CardText className="card_text">   Upgrade to all-inclusive and save 100% on rental fees! </CardText>
                        
                            
                        
                          
                            <Button className="btn mx-auto d-grid">
                                Book Now
                            </Button>
                        </CardBody>
                   
                        <CardFooter className="booking_footer">
                            4 Nights starting from $579*
                        </CardFooter>
                        </Card>

              
                    </Col>
                    <Col xs="12">
                        <Card
                            className="booking_card"
                        >
                            <img
                                alt="Sample"
                                src={Waterlemon}
                            />
                        <CardBody>
                        <ul className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </ul>
                            <CardTitle tag="h5" className="booking_title">
                                Hidden Gems Package
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                                >
                                Local Favorites <FontAwesomeIcon icon={faCircle} className="circle" />
                                Non-Touristy
                            </CardSubtitle>
                            <CardText className="card_text">
                            Save 60% when you book all-inclusive! 
                            </CardText>
            
                        
                            <Button className="btn mx-auto d-grid">
                                Book Now
                            </Button>
                        </CardBody>
                        <CardFooter className="booking_footer">
                            5 Nights starting from $679*
                        </CardFooter>
                        </Card>
                    </Col>
                  
                    <Col xs="12">
                        <Card
                            className="booking_card"
                        >
                            <img
                                alt="Sample"
                                src={MahoTrail}
                            />
                        <CardBody>
                        <ul className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} /> 
                            </ul>
                         
                            <CardTitle tag="h5" className="booking_title">
                                Exploration Package
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                                >
                                Hiking <FontAwesomeIcon icon={faCircle} className="circle" />
                                Snorkeling
                            </CardSubtitle>
                            <CardText className="card_text">
                            Save 56% when you book as a group!
                            </CardText>
                    
                            <Button className="btn mx-auto d-grid">
                                Book Now
                            </Button>
                        </CardBody>
                        <CardFooter className="booking_footer">
                            4 Nights starting from $449*
                        </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12">
                        <Card
                            className="booking_card"
                        >
                            <img
                                alt="Sample"
                                src={MahoPalms}
                            />
                        <CardBody>
                             
                        <ul className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </ul>
                            <CardTitle tag="h5" className="booking_title">
                                Palms Package
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                                >
                                Royal Treament <FontAwesomeIcon icon={faCircle} className="circle" />
                                Relaxation
                            </CardSubtitle>
                            <CardText className="card_text">
                            Save 50% when you book as a pair!
                            </CardText>
                           
                            <Button className="btn mx-auto d-grid">
                                Book Now
                            </Button>
                        </CardBody>
                        <CardFooter className="booking_footer">
                            7 Nights starting from $2999*
                        </CardFooter>
                        </Card>
                    </Col>
                    </Row>
                
            </Container>
        </section>
    )
}

export default Booking;