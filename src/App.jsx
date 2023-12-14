// import About from "./components/about/About";
// import Contact from "./components/contact/Contact";
// import Footer from "./components/footer/Footer";
// import Navbars from "./components/navbar2/Navbars";
// import Second from "./components/second/Second";
// import Third from "./components/third/Third";
// import Carousels from "./components/carousel/Carousels";
// import Forms from "./components/form/Forms";
// import Dining from "./components/dining/Dining";
import "./App.css";

// import Navbar from "./components/navbar/Navbar";
// import First from "./components/first/First";
import HomeCarousel from "./pages/homeCarousel/HomeCarousel";
import Book from "./components/Book/Book";
import Passion from "./components/passion/Passion";
import Ambiance from "./components/Ambiance/Ambiance";
import OurCustomers from './components/ourCustomers/OurCustomers'
import OurGallery from "./components/ourGallery/OurGallery";
import BigFooter from "./components/BigFooter/BigFooter";
import ImageSlide from "./components/imageSlider/ImageSlide";
import { useState } from "react";

function App() {

  
  console.log("from  app" )
  return (
    <div className="relative bg-black">
      {/* <Navbars /> */}
      {/* <Navbar /> */}
      {/* <First /> */}
      <HomeCarousel />
      <Book />
      <ImageSlide/>
      {/* <Passion /> */}
      {/* <Ambiance /> */}
      <OurCustomers />
      {/* <OurGallery /> */}
      <BigFooter />

      {/* <Second /> 
      <Carousels />  events
      <Third /> 
      <Contact /> 
      <Dining/> 
      <About /> 
      <Forms /> 
      <Footer /> 
      <First />
      <Second />
      <Carousels />  
      <Third />
      <Contact />
      <About />
      <Forms />
      <Footer />
      */}
    </div>
  );
}

export default App;
