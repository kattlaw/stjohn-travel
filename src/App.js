import Navigation from './components/Navigation/Navigation';
import background from './assets/trunkbay.jpeg';
import Explore from './components/Explore/Explore';
import Visit from './components/Visit/Visit';
import Booking from './components/Booking/Booking';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const mainStyle={
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return (
    <div className="App">
      <div style={mainStyle}>
        <h2> Welcome to Paradise</h2>
      </div>
      <Navigation />
      <Explore />
      <Visit />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
