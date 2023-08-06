import './App.css';
import Home from './Components/Home/Home';
import FocusArea from './Components/FocusArea/FocusArea';
import About from './Components/About/About';
import SucessStories from './Components/SucessStories/SucessStories';
import CTC from './Components/CTC/CTC';
import OurLeader from './Components/OurLeader/OurLeader';
import RecentNews from './Components/RecentNews/RecentNews';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <FocusArea />
      <About />
      <SucessStories />
      <CTC />
      <OurLeader />
      <RecentNews />
      <Footer />
    </div>
  );
}

export default App;
