import img2 from "../Icons/2.png";
import Navbar from "./Navbar";
import { FaFolderOpen } from "react-icons/fa6";
import { RiSchoolFill } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="relative h-5/6  w-full">
        <div className="relative max-sm:mt-[80px]">
          <img
            className="w-full h-[30rem] object-cover max-sm:w-full max-sm:h-[8rem] max-sm:object-cover"
            src={img2}
          />
          <div className="absolute inset-y-0 left-4 flex flex-col justify-center text-left p-4  max-sm:inset-0 max-sm:left-2 max-sm:right-2">
            <div className="md:hidden text-[7px] font-bold w-[30%]">
              <h1 className="text-[#891993]">Navigate Your</h1>
              <h1 className="text-[#5A156B]">Academic Journey</h1>
              <h1 className="text-[#E52FDE]">with Confidence</h1>
            </div>
            <h1 className="md:hidden text-[7px] mt-2 w-[80%]">
              Providing high-quality and comprehensive assistance with
              assignments and thesis writing for students at all academic
              levels.
            </h1>
          </div>
        </div>
        <div className="bg-white py-8 px-4 text-center relative">
          <h2 className="text-l md:text-5xl font-semibold mb-2">
            700+ students saved, and counting
          </h2>
          <p className="text-gray-600 text-xs md:text-base mb-6">
            50K new study notes added every day, from the world’s most active
            student communities
          </p>
          <div className="py-4 md:py-6 px-2 md:px-10 mx-auto max-w-4xl flex justify-between items-center space-x-2 md:space-x-8">
            <div className="text-center">
              <p className="text-xl md:text-6xl font-bold">350+</p>
              <div className="flex">
                <FaFolderOpen />
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  Study resources
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-6xl font-bold">115+</p>
              <div className="flex">
                <RiSchoolFill />
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  Institution
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-6xl font-bold">700+</p>
              <div className="flex">
                <PiUsersThreeFill />
                <p className="text-gray-600 text-xs md:text-sm mt-1">Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
