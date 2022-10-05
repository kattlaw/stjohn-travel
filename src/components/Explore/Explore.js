
import { useState, useRef, useEffect } from 'react';
import FsLightbox from 'fslightbox-react';
import lookout from '../../assets/lookout2.jpeg';
import beach from '../../assets/cinnbeach.jpeg';
import hiking from '../../assets/cinnbaytrail.jpeg';
import cruzbay from '../../assets/cruzbay2.jpeg';
import turtle from '../../assets/seaturtle.jpeg';
import solomon from '../../assets/solomon.jpeg';
import seaturtle from '../../assets/turtle.png';
import water from '../../assets/wavepng.jpg';
import './explore.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Explore = () => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
        });
        
    function openLightboxOnSlide(number) {
        setLightboxController({
        toggler: !lightboxController.toggler,
        slide: number
    });
}
 


    const titleRef = useRef();
    const elem3 = useRef();
    const elem4 = useRef();
    const turtleRef = useRef();
 
 

    useEffect(() => {
        
          let ctx = gsap.context(() => {

             gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: "#explore",
                    start: "top bottom",
                    end: "+=500",
                    scrub: 1,
                    //markers: true,
                    invalidateOnRefresh: true
                },
                x:"-100%",
                duration: 1,
            });
           
             gsap.from([elem3.current, elem4.current], {
                scrollTrigger: {
                    trigger:"#explore",
                    start: "top bottom",
                    end:"+=500",
                    scrub: 2,
                    //markers: true,
                    invalidateOnRefresh: true
                },
                x:"100%",
                duration: 2,
             });
        
            /* gsap.from(turtleRef.current, {
                scrollTrigger: {
                    trigger:".explore-bottom-container",
                    start: "top bottom",
                    end:"+=500",
                    scrub: 3,
                    markers: true,
                    invalidateOnRefresh: true
                },
                y: 50,
             ease: "power1.inOut"
             });*/
            

        document.addEventListener('mousemove', function(e) {
        gsap.to(turtleRef.current, 2, {x: -e.clientX * 0.05, y: -e.clientY * 0.05});
        });
   

             ScrollTrigger.refresh(); 
           
          });

          return () => ctx.revert(); //cleanup!
    }, []);



    return (
        <section id="explore">
                <div className="section-explore-header">
               
                <h3 ref={titleRef}>Explore...</h3>
                <h5 ref={elem3}>the beauty and awe of St. John, </h5>
                <h5 className="bottom-line" ref={elem4}>where a tropical mecca awaits</h5>
           
                </div>
                <section className="gallery_explore">
               
                <div className="row d-flex g-0 no-gutter">
                    <div className="col-sm-6 col-md-4" onClick={() => openLightboxOnSlide(1)} >
                    <figure className="hover-image">
                        
                       <img src={beach} alt="Cinnamon Bay Beach" />
                       <figcaption><h4>Cinnamon Bay</h4>
                       <FontAwesomeIcon icon={faPlusSquare} />
                       </figcaption>
                    </figure>
                    </div>
                   
                    <div className="col-sm-6 col-md-4" onClick={() => openLightboxOnSlide(2)} >
                        <figure className="hover-image">
                            <img src={lookout} alt="Neptune's Lookout" />
                            <figcaption>
                                <h4>Neptune's Lookout</h4>
                                <FontAwesomeIcon icon={faPlusSquare} />
                            </figcaption>
                        </figure>
                    </div>
               
                    <div className="col-sm-6 col-md-4" onClick={() => openLightboxOnSlide(3)} >
                        <figure className="hover-image">
                            <img src={turtle} alt="Sea Turtle" />
                            <figcaption>
                                <h4>Snorkeling</h4>
                                <FontAwesomeIcon icon={faPlusSquare} />
                            </figcaption>
                        </figure>
                    
                    </div>

                    <div className="col-sm-6 col-md-4"  onClick={() => openLightboxOnSlide(4)} >
                        <figure className="hover-image">
                            <img src={hiking} alt="Cinnamon Bay Overlook" />
                            <figcaption>
                                <h4>Cinnamon Bay Overlook</h4>
                                <FontAwesomeIcon icon={faPlusSquare} />
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-sm-6 col-md-4" onClick={() => openLightboxOnSlide(5)} >
                        <figure className="hover-image">
                            <img src={solomon} alt="Solomon Beach" />
                            <figcaption>
                                <h4>Solomon Beach</h4>
                                <FontAwesomeIcon icon={faPlusSquare} />
                            </figcaption>
                     
                    
                        </figure>
                    </div>

                    <div className="col-sm-6 col-md-4" onClick={() => openLightboxOnSlide(6)} >
                        <figure className="hover-image" >
                        <img src={cruzbay} alt="Cruz Bay" style={{maxWidth: "130%", maxHeight:"130%", objectFit:"cover"}} />
                        <figcaption >
                            <h4>Cruz Bay</h4>
                            <FontAwesomeIcon icon={faPlusSquare} />
                        </figcaption>
                        
                        </figure>
                
                    </div>

                </div>
      
                    </section>

                    <FsLightbox
                        toggler={lightboxController.toggler}
                        sources=
                        {[
                            beach,
                            lookout,
                            turtle,
                            hiking,
                            solomon,
                            cruzbay
                        ]}
                        slide={lightboxController.slide}
                        />

           <div className="explore-bottom-container" id="explore-bottom">
            <img src={seaturtle} className="sea-turtle" ref={turtleRef}></img>
            <img src={water} className="water"></img>
           </div>
        </section>


    )
   
}

export default Explore;