import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaPaperclip } from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai";
export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-100vw h-screen flex overflow-hidden overflow-y-hidden">
      <div className="w-[280px] h-screen  hidden  md:block bg-gradient-to-br from-blue-200 to-orange-100 justify-center items-center overflow-hidden">
        <div className="w-[243px] h-screen left-0 top-[1px] absolute">
          <div className="left-[26px] top-[93px] absolute flex-col justify-center items-start gap-6 inline-flex">
            <div className="pl-5 pr-[79px] py-2.5 bg-white rounded-xl justify-start items-center gap-2.5 inline-flex">
              <div className="text-blue-950 text-base font-semibold ">
                New Chat
              </div>
            </div>
            <div className="px-[21px] flex-col justify-start items-start gap-[30px] flex">
              <div className="text-slate-500 text-base font-semibold ">
                News
              </div>
              <div className="">
                <div className="text-slate-600 text-lg font-bold mb-3">
                  Library
                </div>
                <div className="flex ml-3">
                  <div className="w-1 h-6 bg-slate-400"></div>
                  <h4 className="text-slate-500 text-md pl-3 ">How to get...</h4>
                </div>
              </div>

            </div>
          </div>
          <div className="left-[61px] top-[80vh] absolute text-blue-950 text-lg font-semibold ">
            User Name
          </div>
          <div className="left-[46px] top-[43px] absolute text-blue-950 text-base font-extrabold ">
            Home
          </div>
        </div>
      </div>

      <div className="w-full   flex flex-col justify-center items-center ">

        {open &&
          (<div className="w-[280px] top-0 left-0 absolute z-50  bg-gradient-to-br from-blue-200 to-orange-100 justify-center items-center ">
            <div className="w-[243px] h-[831px] left-0 top-[1px] ">
              <div className="left-[26px] top-[93px] absolute flex-col justify-center items-start gap-6 inline-flex">
                <div className="pl-5 pr-[79px] py-2.5 bg-white rounded-xl justify-start items-center gap-2.5 inline-flex">
                  <div className="text-blue-950 text-base font-semibold ">
                    New Chat
                  </div>
                </div>
                <div className="px-[21px] flex-col justify-start items-start gap-[30px] flex">
                  <div className="text-slate-500 text-base font-semibold ">
                    News
                  </div>
                  <div className="text-slate-500 text-base font-semibold ">
                    Parameter 1
                  </div>
                  <div className="text-slate-500 text-base font-semibold ">
                    Parameter 2
                  </div>
                </div>
              </div>
              <div className="left-[61px] top-[80%] absolute text-blue-950 text-lg font-semibold ">
                User Name
              </div>
              <div className="left-[46px] top-[43px] absolute text-blue-950 text-base font-extrabold ">
                Home
              </div>
            </div>
          </div>)}

        <button className=" md:hidden flex items-center absolute top-0 left-0 m-4" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose className="absolute top-0 left-[200px] z-50" style={{ fontSize: "25px" }} /> : <FiMenu style={{ fontSize: "25px" }} />}
        </button>



        <div className="text-slate-600  text-3xl  font-medium mb-1">
          Welcome to ITrade
        </div>
        <div className="mb-9">
          <span className="text-gray-900 text-4xl md:text-5xl font-bold">
            Start Your{" "}
          </span>
          <span className="text-blue-900 text-4xl md:text-5xl font-bold ">
            Trade Journey
          </span>

          {/*chat box*/}
        </div>
        <div className="w-[80%] h-[22] bg-white border border-gray-400 flex flex-col justify-start rounded-xl">
          <textarea
            className="w-[100%] h-[150px] p-3 rounded-xl "
            placeholder="Ask Anything..."
          ></textarea>

          <div className="h-[50px] flex justify-between items-center p-3 ">
            <div className="flex gap-2 cursor-pointer">
              <div className="w-7 h-7 relative -z-1 bg-slate-200 rounded-md justify-center items-center gap-2.5 flex">
                <FaPaperclip className="absolute w-5 h-5 z-[10]" style={{ zIndex: "10" }} />
                < input className="w-7 h-7 bg-slate-200 relative opacity-0 cursor-pointer" type="file" ></input>
              </div>
              <div className="text-slate-500 text-base font-semibold ">
                Attach files
              </div>
            </div>
            <button className="w-[113px] h-8 px-3 py-2 bg-blue-900 rounded-xl justify-start items-center inline-flex text-white">Start Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
}
