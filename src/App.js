import Navigation from './components/Navigation/Navigation';
import background from './assets/trunkbay.jpeg';
import Explore from './components/Explore/Explore';
import Travel from './components/Travel/Travel';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";




gsap.registerPlugin(ScrollTrigger);


function App() {
  const mainStyle={
    backgroundColor: '#f1eded',
    backgroundImage: `url(${background})`,
    height: '110vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    perspective: '1000px',
    /*transform: 'scale(1.01)',*/
    transformStyle: 'preserve-3d'

  };



  const imageRef = useRef();
  const welcomeRef = useRef();

  useEffect(() => {
  let ctx = gsap.context(() => {
  

  document.addEventListener('mousemove', function(e) {
    gsap.to(imageRef.current, 2, {x: -e.clientX * 0.001, y: -e.clientY * 0.01});
    gsap.to(welcomeRef.current, 2, {x: -e.clientX * 0.03, y: -e.clientY * 0.03});
})

  });
  
  return () => ctx.revert();

  }, []);


  return (
    <div className="App">
      <div id="welcome-container">
        <div style={mainStyle} id="backgroundimage" ref={imageRef}>
        <h2 className="welcome" ref={welcomeRef}> Welcome to Paradise</h2>
      </div>
      </div>
      <Navigation />
      <Explore />
      <Travel />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
