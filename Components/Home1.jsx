import img9 from "../Icons/9.png";
import img10 from "../icons2/layer.svg";
import img11 from "../icons2/vector.png";

function Home1() {
  return (
    <div>
      <div className="bggg w-full h-[30rem] max-sm:w-full max-sm:h-[8rem]">
        <div className="flex justify-between">
          <div>
            <div className="relative inset-y-0 left-4 flex flex-col justify-center text-left p-4">
              <div className="text-[40px] max-sm:text-[7px] font-bold w-[100%]">
                <h1 className="text-[#9F0D76]">IELTS Preparation</h1>
                <h1 className="text-[#4C0C5C]">Online Best Learning</h1>
                <h1 className="text-[#A259FF]">opportunities in The World</h1>
              </div>
              <h1 className="text-[20px] max-sm:text-[7px] mt-2 w-[80%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                molestiae eveniet velit nobis modi, consectetur quis deserunt
              </h1>
              <a
                href="#"
                className="bg-[#583781] text-white mt-10 ml-32 max-sm:ml-5 max-sm:mt-3 max-sm:w-10 max-sm:h-5 w-52 h-16 flex items-center justify-center rounded-md text-xl max-sm:text-[7px]"
              >
                Enroll Now
              </a>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="absolute object-right-top">
              <img className="max-sm:w-[200px]" src={img10} />
            </div>
            <div className="mt-40 mr-52 max-sm:mt-16 max-sm:mr-16">
              <img className="h-80 w-80 max-sm:h-16 max-sm:w-16" src={img11} />
            </div>
            <div className="absolute mt-52 mr-60 max-sm:mt-16 max-sm:mr-16">
              <img className="h-64 w-64 max-sm:h-16 max-sm:w-16" src={img9} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
