import { useState } from "react";
import contact from "../assets/contact.png";
import mail from "../assets/logo/mail.svg";
import phone from "../assets/logo/phone.svg";
import gps from "../assets/logo/gps.svg";
import { Link } from "react-router-dom";


export default function Contact() {
  const [sentMsg, setSentMsg] = useState(false);
  return (
    <div className="w-[100%] h-auto p-[75px] bg-gradient-to-br from-blue-100 to-amber-50 flex-col justify-center items-center gap-2.5 inline-flex mt-[100px]">
      <div className="justify-center items-center gap-[30px] flex md:flex-col flex-col lg:flex-row ">
        <div
          className="p-[30px] w-[500px] h-[820px] bg-white  rounded-3xl shadow flex flex-col justify-center items-center "
          style={{ maxWidth: "90%" }}
        >
          {!sentMsg && (<>
            <div className="w-[100%] h-[100%] pt-4  rounded-3xl shadow justify-start items-start inline-flex">
              <div className="p-5 justify-center items-center gap-2.5 flex">
                <div className="flex-col  justify-center items-center gap-[35px] inline-flex">
                  <div className="flex-col justify-center items-center gap-[30px] flex">
                    <div className="flex-col justify-start items-start gap-3 flex">
                      <div className="flex-col justify-start items-start flex">
                        <div className="text-pink-600 text-lg font-extrabold ">
                          Get in Touch
                        </div>
                        <div className="text-center">
                          <span className="text-gray-900 text-5xl font-bold ">
                            Reach Out{" "}
                          </span>
                          <span className="text-blue-900 text-5xl font-bold ">
                            to
                          </span>
                          <span className="text-gray-900 text-5xl font-extrabold ">
                            {" "}
                          </span>
                          <span className="text-blue-900 text-5xl font-bold ">
                            Us
                          </span>
                        </div>
                      </div>
                      <h3 className="w-[100%] h-12 whitespace-normal word-wrap text-slate-500 text-md ">
                        Address any issue effortlessly with a simple question.
                        Problem-solving simplified.
                      </h3>
                    </div>
                  </div>
                  <div className="flex-col w-[100%] justify-start items-start gap-[30px] flex">
                    <div className=" w-[100%] flex-col justify-start items-start gap-1.5 flex">
                      <div className="flex-col justify-start items-start gap-1.5 flex">
                        <div className="text-slate-700  text-sm font-bold ">
                          Name
                        </div>
                      </div>
                      <div className="w-[100%]  h-11   bg-white rounded-md border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                        <input className="w-[100%] h-[100%] pl-5 text-gray-400 text-[12px] font-semibold " placeholder="Name">

                        </input>
                      </div>
                    </div>
                    <div className=" w-[100%] flex-col justify-start items-start gap-1.5 flex">
                      <div className="text-slate-600 text-sm font-bold ">
                        Contact{" "}
                      </div>
                      <div className="w-[100%]  h-11   bg-white rounded-md border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                        <input className="w-[100%] h-[100%] pl-5 text-gray-400 text-[12px] font-semibold " placeholder="phone number/email address">

                        </input>
                      </div>
                    </div>
                    <div className=" w-[100%]  flex-col justify-start items-start gap-1.5 flex">
                      <div className="text-slate-600 text-sm font-bold ">
                        Your Message
                      </div>
                      <div className="w-[100%] h-56   bg-white rounded-lg border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                        <div className="w-[100%] h-56  justify-start items-start gap-2.5 flex">
                          <textarea placeholder="Leave Us Your Message..." className="text-gray-400 p-5 w-[100%] h-[100%] text-[13px] font-semibold  rounded-lg border-none">

                          </textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-11 py-2.5 bg-blue-900 rounded-md justify-center items-center gap-2.5 inline-flex">
                    <div className="text-slate-200 text-sm font-bold ">
                      Send Message
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>)}

          {sentMsg && (
            <>
              <div className="w-[241px] text-center">
                <span className="text-gray-900 text-3xl font-semibold ">
                  Message
                </span>
                <span className="text-black text-3xl font-semibold "> </span>
                <span className="text-blue-900 text-3xl font-semi bold ">
                  Sent.
                </span>
              </div>
              <div onClick={() => setSentMsg(!sentMsg)} className="w-[431px] text-center text-gray-900 text-xl font-normal mt-2 ">
                We will connect with you shortly
              </div>
            </>
          )}
        </div>
        <div className="flex-col  gap-[30px] inline-flex justify-center items-center">
          <div className="rounded-3xl shadow flex-col justify-center items-center gap-25 flex">
            <img
              className=" md:w-[100%] w-[80%]  h-[80%] rounded-3xl"
              src={contact}
            />
          </div>
          <div className=" md:w-[100%] w-[100%] h-[340px] px-10 pt-9 pb-[30px] bg-white rounded-3xl shadow justify-start items-start inline-flex">
            <div className="flex-col justify-start items-start w-[100%] gap-5 inline-flex">
              <div className="h-[78px] px-6 py-5 bg-neutral-100 rounded-xl flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-center gap-[23px] inline-flex">
                  <div className="w-8 h-8 relative">
                    <img
                      className=" md:w-[100%] w-[80%]  h-[80%] rounded-3xl"
                      src={mail}
                    />
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-slate-700 text-lg font-bold ">
                      Email
                    </div>
                    <Link to={"mailto:contact@adirayglobal.com"} className="w-[252px] text-slate-600 text-xs font-semibold ">
                      contact@adirayglobal.com
                    </Link>
                  </div>
                </div>
              </div>
              <div className="h-[78px] px-6 py-5 bg-neutral-100 rounded-xl flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-center gap-[23px] inline-flex">
                  <div className="w-8 h-8 relative">
                    <img
                      className=" md:w-[100%] w-[80%]  h-[80%] rounded-3xl"
                      src={phone}
                    />
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-slate-700 text-lg font-bold ">
                      Phone
                    </div>
                    <div className="w-[252px] text-slate-600 text-xs font-semibold ">
                      <Link to={"tel:9620199884"}>
                        9620199884
                      </Link>
                      |
                      <Link to={"tel:9525500039"}>
                        9525500039
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[78px] px-6 py-5 bg-neutral-100 rounded-xl flex-col justify-start items-start gap-2.5 flex">
                <div className="w-[100%] justify-start items-center gap-[23px] inline-flex">
                  <div className="w-8 h-8 relative">
                    <img
                      className=" md:w-[100%] w-[80%]  h-[80%] rounded-3xl"
                      src={gps}
                    />
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-slate-700 text-lg font-bold ">
                      Address
                    </div>
                    <div className="w-[100%] text-slate-600 text-xs font-semibold ">
                      D 1807, Shriram Greenfield, Bommenahalli, Bangalore, 560049
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
