import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavebarDesign from './AllComponent/CommanUiDesign/NavebarDesign';
import Banner from './AllComponent/Component/LandingPage/Banner';
import Aboutus from './AllComponent/Component/LandingPage/Aboutus';
import Service from './AllComponent/Component/LandingPage/Service';
import Skills from './AllComponent/Component/LandingPage/Skills';
import Project from './AllComponent/Component/LandingPage/Project';
import Reviews from './AllComponent/Component/LandingPage/Reviews';
import Inspiringslider from './AllComponent/Component/LandingPage/Inspiringslider';
import Contactform from './AllComponent/Component/AuthWork/Contactform';
import Footer from './AllComponent/Component/LandingPage/Footer';


function App() {
  return (
    <>
      <NavebarDesign />
      <div className=''>
        <Banner />
        <Aboutus />
        <Service/>
        <Skills/>
        <Project/>
        <Reviews/>
        <Inspiringslider/>
        <Contactform/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
