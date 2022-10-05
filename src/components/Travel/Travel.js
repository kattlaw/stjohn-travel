import { Card, CardTitle, CardFooter, CardText, Button, CardBody, CardSubtitle, Col } from 'reactstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from 'swiper';
import './travel.css';
import 'swiper/css/bundle';
import maho from '../../assets/maho2.jpeg'
import francis from '../../assets/francisbay.jpeg'
import honeymoon from '../../assets/honeymoon.jpeg';
import Waterlemon from '../../assets/waterlemonbay.jpeg';
import MahoTrail from '../../assets/mahotrail.jpeg';
import Cinnbay from '../../assets/cinnbayruins.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


  const Travel = () => {

    const title = useRef();
    const elem1 = useRef();
    const elem2 = useRef();
 

    useEffect(() => {
        
          // create a context for all the GSAP animations and ScrollTriggers so we can revert() them in one fell swoop.
    // A context also lets us scope all the selector text to the component (like feeding selector text through component.querySelectorAll(...)) 
          let ctx = gsap.context(() => {
             // create as many GSAP animations and/or ScrollTriggers here as you want...
            
             gsap.from(title.current, {
             
                scrollTrigger: {
                trigger: "#travel",
                start: "top bottom",
                end: "+=500",
                //markers: true,
                scrub: 1,
               
               
               
              },
                x: "-100%",
                duration: 1,
             });
             gsap.from([elem1.current, elem2.current], {
                scrollTrigger: {
                    trigger:"#travel",
                    start: "top bottom",
                    end: "+=600",
                    scrub: 1,
                    //markers: true,
                   
                },
                x:"100%",
                duration: 2,
               
            
             });
             ScrollTrigger.refresh();
           
          }); // <- scopes all selector text inside the context to this component (optional, default is document)

          return () => ctx.revert(); //cleanup!
    }, []); 

    /*const cards = document.querySelector(".image-grid-container");
    const images = document.querySelectorAll(".image-stack-bottom");

    const range = 40;
    
    // const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
    const calcValue = (a, b) => (a/b*range-range/2).toFixed(1) // thanks @alice-mx
    
    let timeout;
    document.addEventListener('mousemove', ({x, y}) => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }
        
      timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);
    
        cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
        [].forEach.call(images, (image) => {
            image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
          });
      
        
      })
    }, false);*/
   
    return (
        <section id="travel">
            <h3 ref={title}> <span className="first">Travel</span> in <span className="second">Style</span> </h3>
            <h5 ref={elem1}> Visit St. John with the best tour packages</h5> <h5 ref={elem2}> available exclusively for your style </h5>
    
            
            
        
              <div className="swiper-container">

            <div className="slider-wrapper">
        <Swiper
             
            
                grabCursor={true}
                loop={true}
                slidesPerView={3}
                spaceBetween={32}
                resizeObserver={true}
                modules={[Navigation]}
               simulateTouch={true}
               resistanceRatio={0}
               breakpoints= {{
           
                300: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                   
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 28,
                    
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                    
                }
            }}
           
              navigation= {{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              }}
             
   

               
               
             
                
               
        
               
            
    
       >
        <SwiperSlide className="swiper-slide">
            <Col lg="12">
            <Card className="travel-card">
                <img src={maho} alt="maho bay" />
                <CardBody>
                <ul className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                </ul> 
                    <CardTitle tag="h5" className="travel-title">
                        Serenity Package
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6">
                     Beaches <FontAwesomeIcon icon={faCircle} className="circle" />
                            Spa

                    </CardSubtitle>
                    <CardText className="travel-text">
                    Save 40% when you book all-inclusive!
                    </CardText>
                    <Button className="btn mx-auto d-grid">
                        Discover More
                    </Button>
                </CardBody>
                <CardFooter className="travel-footer">
                6 Nights starting from $1099*
                </CardFooter>
            </Card>
            </Col>
        </SwiperSlide>
      

<SwiperSlide className="swiper-slide">
    <Col lg="12" xs="12">
<Card className="travel-card">
    <img src={francis} alt="maho bay" />
    <CardBody>
        <ul className="rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfStroke} />
        </ul>
        <CardTitle tag="h5" className="travel-title">
            Family Fun Package
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6">
                Beaches <FontAwesomeIcon icon={faCircle} className="circle" />
                Snorkeling
        </CardSubtitle>
        <CardText className="travel-text">
            Save 43% when you book as a family!
        </CardText>
        <Button className="btn mx-auto d-grid">
            Discover More
        </Button>
    </CardBody>
    <CardFooter className="travel-footer">
        5 Nights starting from $699*
    </CardFooter>
</Card>
</Col>
</SwiperSlide>

<SwiperSlide className="swiper-slide">
    <Col lg="12" xs="12">
<Card className="travel-card">
    <img src={Waterlemon} alt="maho bay" />
    <CardBody>
        <ul className="rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfStroke} />
        </ul>
        <CardTitle tag="h5" className="travel-title">
            Adventure Package
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6">
                 Beaches <FontAwesomeIcon icon={faCircle} className="circle" />
                Water Sports
        </CardSubtitle>
        <CardText className="travel-text">
        Book all-inclusive, pay no rental fees!
        </CardText>
        <Button className="btn mx-auto d-grid">
            Discover More
        </Button>
    </CardBody>
    <CardFooter className="travel-footer">
        4 nights starting from $579*
    </CardFooter>
</Card>
</Col>
</SwiperSlide>

<SwiperSlide className="swiper-slide">
    <Col lg="12" xs="12">
    <Card className="travel-card">
    <img src={honeymoon} alt="maho bay" />
    <CardBody>
        <ul className="rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfStroke} />
        </ul>
        <CardTitle tag="h5" className="travel-title">
            Hidden Gems Package
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6">
                Local Favs <FontAwesomeIcon icon={faCircle} className="circle" />
                Non-Touristy
        </CardSubtitle>
        <CardText className="travel-text">
            Save 60% when you book all-inclusive!
        </CardText>
        <Button className="btn mx-auto d-grid">
            Discover More
        </Button>
    </CardBody>
    <CardFooter className="travel-footer">
        5 Nights starting from $679
    </CardFooter>
</Card>
</Col>
</SwiperSlide>

<SwiperSlide className="swiper-slide">
    <Col lg="12" xs="12">
    <Card className="travel-card">
        <img src={MahoTrail} alt="maho bay" />
        <CardBody>
            <ul className="rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
            </ul>
            <CardTitle tag="h5" className="travel-title">
                Exploration Package
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6">
                    Hiking <FontAwesomeIcon icon={faCircle} className="circle" />
                    Snorkeling
            </CardSubtitle>
            <CardText className="travel-text">
                Save 56% when you book as a group!
            </CardText>
                    <Button className="btn mx-auto d-grid">
                        Discover More
                    </Button>
                </CardBody>
                <CardFooter className="travel-footer">
                    4 Nights starting from $449
                </CardFooter>
            </Card>
            </Col>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
            <Col lg="12" xs="12">
            <Card className="travel-card">
                <img src={Cinnbay} alt="maho bay" />
                <CardBody>
                <ul className="rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfStroke} />
            </ul>
                    <CardTitle tag="h5" className="travel-title">
                        Palms Package
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6">
                            Royal Treatment
                    </CardSubtitle>
                    <CardText className="travel-text">
                       Luxurious treatment for every need
                    </CardText>
                    <Button className="btn mx-auto d-grid">
                        Discover More
                    </Button>
                </CardBody>
                <CardFooter className="travel-footer">
                    7 Nights starting from $2999
                </CardFooter>
            </Card>
            </Col>
        
        </SwiperSlide>
     
</Swiper>

</div>
<div className="swiper-button-next"></div>
</div>

</section>

    )
  }

  export default Travel;

   /*const component = useRef(null);// we only need a ref for the root-level element of this component so we can use selector text for everything else.

    /*const elem1 = useRef();
    const elem2 = useRef();
    const elem3 = useRef();
    const elem4 = useRef();
    const elem5 = useRef();*/

    /*useEffect(() => {
        
          // create a context for all the GSAP animations and ScrollTriggers so we can revert() them in one fell swoop.
    // A context also lets us scope all the selector text to the component (like feeding selector text through component.querySelectorAll(...)) 
          let ctx = gsap.context(() => {
             // create as many GSAP animations and/or ScrollTriggers here as you want...
            
            gsap.from(".slide-image", {// <- selector text, scoped to this component!
                y: 40,
                ease: "power3",
                duration: 1
            });

            gsap.to(".slide-content", {
                y: -10,
                x: -50,
                duration: 0.8
            });
          }, component); // <- scopes all selector text inside the context to this component (optional, default is document)

          return () => ctx.revert(); //cleanup!
    }, []);*/
