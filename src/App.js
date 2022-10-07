import Navigation from './components/Navigation/Navigation';
import Explore from './components/Explore/Explore';
import Travel from './components/Travel/Travel';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="background-image">
          <h2 className="welcome"> Welcome to Paradise </h2>
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
