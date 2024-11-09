import logo from "@/app/Assets/logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <>  
      <div className="w-[1550px] h-[91px] bg-[#25253d]">
        <div className="w-[1322px] h-[91px] bg-[#25253d] ml-24 flex justify-between items-center">
          <div className="w-[187px] h-[58px]">
            <Image src={logo} alt="logo" />
          </div>
          <div className="w-[815px] h-[58px] top-[16px] left-[364px] flex justify-between space-x-4">
            <ul className="flex justify-between items-center">
              <li className="text-white text-[24px] font-semibold ml-20">Home</li>
              <li className="text-white text-[24px] font-semibold ml-14">Product</li>
              <li className="text-white text-[24px] font-semibold ml-12">Pricing</li>
              <li className="text-white text-[24px] font-semibold ml-12">Contact</li>
            </ul>
          </div>
          <div className="w-[189px] h-[52px] flex justify-center items-center">
            <p className="text-white text-lg">Login</p>
            <button className="w-[110px] h-[52px] text-white font-bold font-mono text-lg bg-blue-400 rounded-l-2xl ml-10">
              Join us
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1550px] h-[900px] pt-80 pb-80 gap-80 bg-[#25253d] flex justify-center items-center">
        <div className="w-[701px] h-[496px] bg-[#25253d] flex flex-col justify-center items-center">
          <h5 className="w-[77px] h-[24px] text-blue-600 font-bold text-xl flex mb-4">Welcome</h5>
          <h1 className="w-[412px] h-[160px] font-bold text-5xl text-white flex justify-between items-center text-center mb-4">
            Selling on the internet like a pro
          </h1>
          <div className="w-[536px] h-[60px] text-white text-2xl flex justify-center items-center text-center mb-10">
            We know how large objects will act, but things on a small scale just do not act that way.
          </div>
          <div className="w-[365px] h-[52px] flex justify-center items-center text-center mb-6">
            <button className="w-[193px] h-[52px] text-lg font-bold text-white bg-blue-400 rounded-md">
              Get Quote Now
            </button>
            <button className="w-[162px] h-[52px] text-blue-400 ml-8 border-2 border-blue-400 text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1550px] h-[360px] bg-[#25253d] flex justify-between">
        <div className="w-[328px] h-[292px] bg-white justify-center items-center ml-48">
          <div className="w-[70px] h-[76px] bg-[#FFDCD1] mt-10 rounded-lg ml-8"></div>
          <div className="w-[150px] h-[24px] font-bold text-lg mt-4 ml-8">training Courses</div>
          <div className="w-[70px] h-[4px] bg-red-600 ml-8 mt-4"></div>
          <div className="w-[230px] h-[60px] font-normal text-lg flex justify-center items-center mt-7 mb-12 ml-8 text-[#737373]">
            The gradual accumulation of information about atomic and small-scale behaviour...
          </div>
        </div>

        <div className="w-[328px] h-[292px] bg-white justify-center items-center mr-10">
          <div className="w-[70px] h-[76px] bg-[#b9eaa8] mt-10 rounded-lg ml-8"></div>
          <div className="w-[180px] h-[24px] font-bold text-lg mt-4 ml-8">2,769 online courses</div>
          <div className="w-[70px] h-[4px] bg-red-600 ml-8 mt-4"></div>
          <div className="w-[230px] h-[60px] font-normal text-lg flex justify-center items-center mt-7 mb-12 ml-8 text-[#737373]">
            The gradual accumulation of information about atomic and small-scale behaviour...
          </div>
        </div>

        <div className="w-[328px] h-[292px] bg-blue-500 justify-center items-center mr-48">
          <div className="w-[70px] h-[76px] bg-[#ffffff] mt-10 rounded-lg ml-8"></div>
          <div className="w-[150px] h-[24px] font-bold text-lg mt-4 ml-8 text-white">training Courses</div>
          <div className="w-[70px] h-[4px] bg-white ml-8 mt-4"></div>
          <div className="w-[230px] h-[60px] font-normal text-lg flex justify-center items-center mt-7 mb-12 ml-8 text-white">
            The gradual accumulation of information about atomic and small-scale behaviour...
          </div>
        </div>
      </div>
    </>
  );
}
