import { Container } from 'reactstrap';
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
           <div class="slide_1 slide_2"
               style={{
                backgroundImage: `url(${maho})`, 
                
            }}>

                    <div class="slide-info">
                        <p>Maho Bay</p>
                    </div>
                </div>
                <div class="slide_1 slide_3"
                style={{
                    backgroundImage: `url(${trunk})`
                }}>
                    <div class="slide-info">
                        <p>Trunk Bay</p>
                    </div>
                </div>
                <div class="slide_1 slide_4"
                style={{
                    backgroundImage: `url(${windmill})`
                }}>
                    <div class="slide-info">
                        <p>Neptune's Lookout</p>
                    </div>
                </div>
                <div class="slide_1 slide_5"
                style={{
                    backgroundImage: `url(${turtle})`
                }}>
                    <div class="slide-info">
                        <p>Maho Bay Turtles</p>
                    </div>
                </div>
                <div class="slide_1 slide_6"
                style={{
                    backgroundImage: `url(${cinnbay})`
                }}>
                    <div class="slide-info">
                        <p>Cinnamon Bay</p>
                    </div>
                </div>
                <div class="slide_1 slide_7"
                style={{
                    backgroundImage: `url(${petroglyphs})`
                }}>
                    <div class="slide-info">
                        <p>Petroglyphs</p>
                    </div>
                </div>
                <div class="slide_1 slide_8"
                style={{
                    backgroundImage: `url(${cruzbay})`
                }}>
                    <div class="slide-info">
                        <p>Cruz Bay</p>
                    </div>
                </div>
          </div>
            </Container>
        </section>
        
    )
}

export default Visit;