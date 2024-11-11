import img2 from "../Icons/2.png";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="relative h-5/6  w-full ">
      <Navbar></Navbar>
      <img className="w-full h-5/6 top-32" src={img2} alt="" srcset="" />
    </div>
  );
}

export default Home;
