import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import './footer.css';



const Footer = () => {
    return (
        <footer className="footer_stj">
            <Container>
                
                <section id="footer_links">
                 <Row>
                <Col xs="4" md="5" lg="5" className="">
                  
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60596.08735102007!2d-64.76525903099973!3d18.33562645423775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c05129077807895%3A0xb54f25da25d3699a!2sSt%20John!5e0!3m2!1sen!2sus!4v1660760305948!5m2!1sen!2sus" 
                    width="300"
                    height="400"
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="google_map"
                    >
                </iframe>
           
                </Col>
           
                  <Col className="links_list">
                           
                            <h6> St. John Travel </h6>
                            <span>
                            <ul className="footer_link">
                                <li><a href="#footer">Who We Are</a></li>
                                <li><a href="#footer">Contact Us</a></li>
                                <li><a href="#contact">Mailing List</a></li>
                                <li><a href="#footer">FAQ</a></li>
                            </ul>
                            </span>
                           
                        </Col>
                      
                      
                        <Col className="links_list2">
                            <h6> Quick Links </h6>
                            <span>
                            <ul className="footer_link2">
                                <li><a href="#footer">Weather</a></li>
                                <li><a href="#footer">Accomodations</a></li>
                                <li><a href="#footer">Tours</a></li>
                                <li><a href="#footer">Beaches</a></li>
                                <li><a href="#footer">Dining</a></li>
                            </ul>
                           </span> 
                        </Col>
                  </Row>
                   
                </section>
             </Container>
               <hr className="page_break"></hr>
                  <Col className="text-center">
                        <a href="http://github.com/kattlaw">
                            <FontAwesomeIcon icon={faGithub} className="social_icons" />
                        </a>
                        <a href="http://www.linkedin.com/in/katlawdev">
                            <FontAwesomeIcon icon={faLinkedin} className="social_icons" />
                        </a>
                        <a href="mailto: katherine.law2@gmail.com">
                            <FontAwesomeIcon icon={faAt} className="social_icons" />
                        </a>
                        <a href="http://www.facebook.com">
                            <FontAwesomeIcon icon={faFacebook} className="social_icons" />
                        </a>
                        <a href="http://www.twitter.com">
                            <FontAwesomeIcon icon={faTwitter} className="social_icons" />
                        </a>
                        <a href="http://www.instagram.com">
                            <FontAwesomeIcon icon={faInstagram} className="social_icons" />
                        </a>
                </Col>
                   
               
                <Row>
                    
                  
                        <p className="copyright_text">Designed by Katherine Law</p>
                        <p className="copyright_text"> Copyright &copy; 2022 </p>
                   
                </Row>
            
        </footer>
    )
}

export default Footer;