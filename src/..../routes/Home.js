
import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import AboutImg from "../assets/2.jpg"
import AboutImg from "../assets1/bg5.png"
import Trip from "../components/Trip";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
     <Navbar/>
      
      <Hero 
      cName="hero"
      heroImg={AboutImg}
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination"
      url="/"
      buttonText="Travel Plan"
      btnClass="show"
      /> 
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;
