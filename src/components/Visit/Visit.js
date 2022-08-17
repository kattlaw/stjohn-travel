import { Container, Button } from 'reactstrap';
import './visit.css';
import maho from '../../assets/mahobay.jpeg';
import trunk from '../../assets/trunk.jpeg';
import windmill from '../../assets/windmill.jpeg';
import cinnbay from '../../assets/cinnbayruins.jpg';
import turtle from '../../assets/turtlehead.jpeg';
import petroglyphs from '../../assets/petros.jpeg';
import cruzbay from '../../assets/cruzbay.jpeg';


const Visit = () => {
   
    return (
        <section id="visit">
            <Container className="visit_stj">
            <p>Popular Destinations</p>
           <div className="gallery">
           <div className="slide_1 slide_2"
               style={{
                backgroundImage: `url(${maho})`, 
                
            }}>
                  
                
                    <div className="slide-info">
                        <p>Maho Bay</p>
                        <Button className="learn_more">More Info</Button>
                    </div>
                </div>
                <div className="slide_1 slide_3"
                style={{
                    backgroundImage: `url(${trunk})`
                }}>
                    <div className="slide-info">
                        <p>Trunk Bay</p>
                        <Button className="learn_more">More Info</Button>
                    </div>
                </div>
                <div className="slide_1 slide_4"
                style={{
                    backgroundImage: `url(${windmill})`
                }}>
                    <div className="slide-info">
                        <p>The Views</p>
                        <Button className="learn_more">More Info</Button>
                    </div>
                </div>
                <div className="slide_1 slide_5"
                style={{
                    backgroundImage: `url(${turtle})`
                }}>
                    <div className="slide-info">
                        <p>Sea Turtles</p>
                        <Button className="learn_more">More Info</Button>
                    </div>
                </div>
                <div className="slide_1 slide_6"
                style={{
                    backgroundImage: `url(${cinnbay})`
                }}>
                    <div className="slide-info">
                        <p>Cinnamon Bay</p>
                        <Button className="learn_more">More Info</Button>
                    </div>
                </div>
                <div className="slide_1 slide_7"
                style={{
                    backgroundImage: `url(${petroglyphs})`
                }}>
                    <div className="slide-info">
                        <p>Petroglyphs</p>
                        <Button className="learn_more">More Info</Button>
                    </div>
                </div>
                <div className="slide_1 slide_8"
                style={{
                    backgroundImage: `url(${cruzbay})`
                }}>
                    <div className="slide-info">
                        <p>Cruz Bay</p>
                        <Button className="learn_more">More Info</Button>
                    </div>
                </div>
          </div>
            </Container>
        </section>
        
    )
}

export default Visit;