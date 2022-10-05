import './blog.css';
import {Container, Row, Col} from 'reactstrap';
import food from '../../assets/dining.jpeg';
import turtle from '../../assets/turtleheadtwo.jpeg';
import cruz from '../../assets/cruzbayone.jpeg';
import sand from '../../assets/footprints.png';
import waves from '../../assets/wavespng.png';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

  const Blog = () => {

    //GSAP Timeline and ScrollTrigger

    const pageTitle= useRef();
    const elem5 = useRef();
    const elem6 = useRef();
    const elem7 = useRef();

    useEffect(() => {
        
          const ctx = gsap.context(() => {

            const tl = gsap.timeline();

            tl.from([pageTitle.current], {
                scrollTrigger: {
                    trigger: "#blog",
                    start: "top bottom",
                    end: "+=500",
                    scrub: 1,
                   
                    //markers: true,
                },
                y: "-800%",
                duration: 3
                
            });
            tl.from([elem5.current], {
                scrollTrigger: {
                    trigger: "#blog",
                    start: "top bottom",
                    end: "+=700",
                    scrub: 2,
                    //markers: true,
                },
                y: "1000%",
                duration: 3
                
            });
            tl.from(".blog-info-one", {
                scrollTrigger: {
                    trigger: ".blog-info-one",
                    start: "top bottom +=250px",
                    end: "+=500",
                    scrub: 3,
                    //markers: true, 
                },
                x: "300%",
                duration: 2
            });
            tl.from(".blog-info-two", {
                scrollTrigger: {
                    trigger: ".blog-image-two",
                    start: "top bottom",
                    end: "+=500",
                    scrub: 2
                },
                x: "-300%",
                duration: 2
            });
            tl.from(".blog-info-three", {
                scrollTrigger: {
                    trigger: ".blog-image-three",
                    start: "top bottom",
                    end: "+=500",
                    scrub: 2
                },
                x: "300%",
                duration: 2
            }); 

            gsap.to([".blog-image-one img", ".blog-image-two img", ".blog-image-three img"], {
                scrollTrigger: {
                    trigger: "#blog",
                    start: "top",
                    end: "+=1600",
                    //markers: true,
                    scrub: 1,
                },
                y: -20,
               duration: .2
            });
               
            gsap.to([".food-back", ".cruz-back",".turtle-back"], {
                scrollTrigger: {
                    trigger: "#blog",
                    start: "top",
                    end: "+=1200",
                   // markers: true,
                    scrub: 1
                },
                y: -10,
                duration: .3
            });     

            ScrollTrigger.refresh();
           
          });

          return () => ctx.revert();

    }, []);


    return (
        <section id="blog" >
            <div className="section-blog-header">
            <h3 className="title-page" ref={pageTitle}>Discover</h3>
            <h5 className="underneath" ref={elem5}>all you can experience...</h5>
            </div>
            <Container className="blog-grid-container">
                <Row sm={2}>
                <Col>
                <div className="blog-image-one"
                xs={{
                    size: 12,
                }}
                sm={{
                    size:6, 
                }}>
                    <img src={food} alt="plate of food" />
                    <div className="food-back"></div>
                </div>
                </Col>

                <Col className="blog-info-one"
                xs={{
                    size: 12
                }}
                sm={{
                    size: 6
                }}
                >
                    Eat like the locals and enjoy the best Painkiller on the island
                <h4>
                    <button>Read More</button>
                </h4>
            
                </Col>
                </Row>
                
                <div className="spacer-one"></div>
           
               <Row>
               <Col className="blog-image-two"
                xs={{
                    size: 12
                }}
                sm={{
                    size: 6,
                    order:'last',
                }}
                md={{
                    order: 'last',
                    size: 6,
                }}
                >
                    <img src={cruz} alt="cruz bay" />
                    <div className="cruz-back"></div>
                </Col>
               
                <Col className="blog-info-two"
                xs={{
                    size: 12
                }}
                sm={{
                    size: 6,
                    order: 'first'
                }}
                md={{
                    order:'first',
                    size:6,
                }}
                >
                    Relax and enjoy the music and entertainment of paradise
                    <h4>
                        <button className="image-two-button">Read More</button>
                    </h4>
                </Col>

                </Row>

                <div className="spacer-two"></div>
              <Row>
              <Col className="blog-image-three"
                xs={{
                    size: 12
                }}
                sm={{
                    size:6
                }}
                md={{
                    size: 6
                }}
                >
                    <img src={turtle} alt="sea turtle" />
                    <div className="turtle-back"></div>
                </Col>

                <Col className="blog-info-three"
                xs={{
                    size: 12
                }}
                sm={{
                    size: 6
                }}
                md={{
                    size: 6
                }}
                >
                    Finding beauty and awe in the reefs of the Carribbean
                    <h4>
                        <button>Read More</button>
                    </h4>
                </Col>
                </Row>
            </Container>
                <Row>
                    <div className="blog-bottom-container">
                        <img src={sand} className="sand" alt="sand" ref={elem6}></img>
                        <img src={waves} className="waves" alt="waves" ref={elem7}></img>
                    </div>
                </Row>
        </section>
    )
}

export default Blog;