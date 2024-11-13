import "./App.css";
import Home from "../Components/home";
import Home1 from "../Components/Home1";
import Features from "../Components/Features.";
import Advantages from "../Components/Advantages";
import Faq from "../Components/Faq";
import Services from "../Components/Services";
import Footer from "../Components/Footer";

function App() {
  return (
    <>
      <Home></Home>
      <div
        className="delay-[1ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
        data-taos-offset="300"
      >
        <Home1></Home1>
      </div>
      <div
        className="delay-[1ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
        data-taos-offset="300"
      >
        <Features></Features>
      </div>
      <div
        className="delay-[1ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
        data-taos-offset="300"
      >
        <Services></Services>
      </div>
      <div
        className="delay-[1ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
        data-taos-offset="300"
      >
        <Advantages></Advantages>
      </div>
      <div
        className="delay-[1ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
        data-taos-offset="300"
      >
        <Faq></Faq>
      </div>
      <div
        className="delay-[1ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
        data-taos-offset="300"
      >
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
