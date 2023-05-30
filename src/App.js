import "./App.css";
import CoreFeatures from "./sections/CoreFeatures";
import Cta from "./sections/Cta";
import Feature1 from "./sections/Feature1";
import Feature2 from "./sections/Feature2";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Join from "./sections/Join";
import Navbar from "./sections/Navbar";
import NewFeatures from "./sections/NewFeatures";
import Testimonial from "./sections/Testimonial";

function App() {
  return (
    <main className="overflow-x-hidden">
    <Navbar/>
    <Hero/>
    <Feature1/>
    <Feature2/>
    <NewFeatures/>
    <CoreFeatures/>
    <Join/>
    <Testimonial/>
    <Cta/>
    <Footer/>
    </main>
  );
}

export default App;
