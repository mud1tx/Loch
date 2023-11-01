import React, { useState } from "react";
import Image from "../assets/usedimage.png";
import MobileLoginPage from "./MobileLoginPage";

const Home = () => {
  const [showMyModel, setShowMyModel] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    window.location.href = "https://app.loch.one/welcome";
  };

  const handleOnClose = () => setShowMyModel(false);
  return (
    <>
      {/* <div className="flex"> */}
      <div className="flex flex-col  lg:flex-row ">
        <div className="bg-background bg-cover bg-black lg:w-2/3 w-full bg-no-repeat ">
          <button
            onClick={() => {
              setShowMyModel(true);
            }}
            className="block lg:hidden bg-white font-inter px-4 absolute right-4 top-4 rounded-md py-2 "
          >
            Get started
          </button>
          <div className="p-4 pt-10  lg:pl-24 flex flex-col justify-between">
            {/* Top Divs  */}
            <div className="flex flex-col lg:flex-row justify-between ">
              <div className="md:w-80 mb-4 w-[313px] lg:w-80 flex  flex-col items-start gap-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="animate-spin"
                >
                  <path
                    opacity="0.2"
                    d="M25.9998 24H5.99984C5.82482 23.9989 5.65314 23.952 5.50195 23.8638C5.35077 23.7756 5.22539 23.6492 5.13833 23.4974C5.05127 23.3456 5.00559 23.1735 5.00586 22.9985C5.00613 22.8235 5.05233 22.6516 5.13984 22.5C5.96359 21.075 6.99984 17.4762 6.99984 13C6.99984 10.6131 7.94806 8.32387 9.63588 6.63604C11.3237 4.94821 13.6129 4 15.9998 4C18.3868 4 20.676 4.94821 22.3638 6.63604C24.0516 8.32387 24.9998 10.6131 24.9998 13C24.9998 17.4775 26.0373 21.075 26.8623 22.5C26.95 22.6518 26.9962 22.8239 26.9963 22.9991C26.9965 23.1744 26.9506 23.3466 26.8632 23.4985C26.7759 23.6504 26.6501 23.7767 26.4986 23.8647C26.3471 23.9527 26.1751 23.9994 25.9998 24Z"
                    fill="white"
                  />
                  <path
                    d="M27.7245 21.9925C27.0308 20.7975 25.9995 17.4163 25.9995 13C25.9995 10.3478 24.946 7.8043 23.0706 5.92893C21.1952 4.05357 18.6517 3 15.9995 3C13.3474 3 10.8038 4.05357 8.92846 5.92893C7.0531 7.8043 5.99953 10.3478 5.99953 13C5.99953 17.4175 4.96703 20.7975 4.27328 21.9925C4.09612 22.2963 4.0022 22.6415 4.00099 22.9931C3.99978 23.3448 4.09133 23.6906 4.2664 23.9956C4.44147 24.3006 4.69388 24.5541 4.99816 24.7304C5.30244 24.9068 5.64784 24.9997 5.99953 25H11.1008C11.3315 26.1289 11.9451 27.1436 12.8377 27.8722C13.7303 28.6009 14.8472 28.9989 15.9995 28.9989C17.1518 28.9989 18.2687 28.6009 19.1614 27.8722C20.054 27.1436 20.6676 26.1289 20.8983 25H25.9995C26.3511 24.9995 26.6964 24.9064 27.0005 24.73C27.3046 24.5535 27.5568 24.3 27.7317 23.9951C27.9066 23.6901 27.9981 23.3444 27.9968 22.9928C27.9956 22.6412 27.9016 22.2962 27.7245 21.9925ZM15.9995 27C15.3793 26.9998 14.7744 26.8074 14.268 26.4492C13.7617 26.0911 13.3788 25.5848 13.172 25H18.827C18.6203 25.5848 18.2374 26.0911 17.731 26.4492C17.2247 26.8074 16.6198 26.9998 15.9995 27ZM5.99953 23C6.96203 21.345 7.99953 17.51 7.99953 13C7.99953 10.8783 8.84238 8.84344 10.3427 7.34315C11.843 5.84285 13.8778 5 15.9995 5C18.1213 5 20.1561 5.84285 21.6564 7.34315C23.1567 8.84344 23.9995 10.8783 23.9995 13C23.9995 17.5063 25.0345 21.3412 25.9995 23H5.99953Z"
                    fill="white"
                  />
                </svg>
                <h1 className="text-[#F2F2F2] font-inter leading-9  text-[31px]">
                  Get notified when a highly correlated whale makes a move
                </h1>
                <p className="font-[16px] line leading-5 text-[#F2F2F2]">
                  Find out when a certain whale moves more than any preset
                  amount on-chain or when a dormant whale you care about becomes
                  active.
                </p>
              </div>
              <div className="flex lg:w-80 w-full lg:gap-4 gap-2 overflow-x-auto no-scrollbar">
                {/* First Card */}
                <div className="w-[189.7px] h-[171.5px] flex-col flex   gap-y-2 flex-shrink-0 p-[8.4px] rounded-lg bg-[#fff]  ">
                  <div className="flex   justify-between ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                    >
                      <path
                        d="M19 8.33301C19 6.47649 18.2625 4.69601 16.9497 3.38326C15.637 2.07051 13.8565 1.33301 12 1.33301C10.1435 1.33301 8.36301 2.07051 7.05025 3.38326C5.7375 4.69601 5 6.47649 5 8.33301C5 16.4997 1.5 18.833 1.5 18.833H22.5C22.5 18.833 19 16.4997 19 8.33301Z"
                        fill="#165DFF"
                        fillOpacity="0.1"
                        stroke="black"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="font-inter">save</p>
                  </div>

                  <p className=" w-[129px]  text-[#19191A] font-inter  font-[14px]">
                    We’ll be sending notifications to you here
                  </p>

                  <input
                    placeholder="hello@gmail.com"
                    className="rounded-lg border border-1 w-full px-[10px] py-2 border-[#E5E5E6] bg-[#FFF]"
                  />
                </div>
                {/* Second Card Will Goes here */}

                <div className="w-[189.7px] h-[171.5px] flex-col flex  gap-y-2 flex-shrink-0 p-[8.4px] rounded-lg bg-[#fff]  ">
                  <div className="flex   justify-between ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="28"
                      viewBox="0 0 29 28"
                      fill="none"
                    >
                      <path
                        d="M23.0996 25.9004V11.9004"
                        stroke="black"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.7002 25.9V3.5"
                        stroke="black"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.2998 25.9V17.5"
                        stroke="black"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                      >
                        <path
                          d="M3.66451 7.32773C3.9696 7.32773 4.20025 7.21058 4.35646 6.97627L7.73564 1.8837C7.79178 1.80071 7.83327 1.71895 7.86012 1.6384C7.88697 1.55542 7.90039 1.47609 7.90039 1.40043C7.90039 1.19053 7.82717 1.01724 7.68073 0.880557C7.53672 0.741436 7.35855 0.671875 7.14621 0.671875C6.99976 0.671875 6.87529 0.701164 6.77278 0.759741C6.67271 0.815878 6.57752 0.913507 6.48721 1.05263L3.64987 5.50817L2.22937 3.80577C2.0756 3.62759 1.88278 3.53851 1.65091 3.53851C1.43369 3.53851 1.2543 3.60807 1.11273 3.74719C0.971172 3.88631 0.900391 4.06082 0.900391 4.27072C0.900391 4.36591 0.915035 4.45622 0.944324 4.54165C0.976053 4.62463 1.03341 4.71128 1.11639 4.80158L3.00185 7.02386C3.17515 7.22644 3.39603 7.32773 3.66451 7.32773Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <p className=" w-[129px]  text-[#19191A] font-inter  font-[14px]">
                    Notify me when any wallets move more than
                  </p>
                  <div className=" ">
                    <button className="border bg-[#c5c5c7be] flex  px-1 py-1 rounded-sm  items-center">
                      $1,000.00
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M3.79965 4.59953L6.17719 6.97704C6.24553 7.04538 6.35633 7.04538 6.42467 6.97704L8.80215 4.59953C8.9124 4.48928 8.83435 4.30078 8.67839 4.30078H3.9234C3.76749 4.30078 3.68941 4.48928 3.79965 4.59953Z"
                          fill="#96979A"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Third Card Will goes here */}
                <div className="w-[189.7px] h-[171.5px] flex-col flex   gap-y-2 flex-shrink-0 p-[8.4px] rounded-lg bg-[#fff]  ">
                  <div className="flex   justify-between ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="28"
                      viewBox="0 0 29 28"
                      fill="none"
                    >
                      <path
                        d="M14.4001 25.6663C20.8434 25.6663 26.0667 20.443 26.0667 13.9997C26.0667 7.55635 20.8434 2.33301 14.4001 2.33301C7.95674 2.33301 2.7334 7.55635 2.7334 13.9997C2.7334 20.443 7.95674 25.6663 14.4001 25.6663Z"
                        stroke="black"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.4004 7V14L19.0671 16.3333"
                        stroke="black"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <path
                        d="M3.36471 7.32773C3.6698 7.32773 3.90045 7.21058 4.05665 6.97627L7.43584 1.8837C7.49197 1.80071 7.53347 1.71895 7.56031 1.6384C7.58716 1.55542 7.60059 1.47609 7.60059 1.40043C7.60059 1.19053 7.52736 1.01724 7.38092 0.880557C7.23692 0.741436 7.05874 0.671875 6.8464 0.671875C6.69996 0.671875 6.57548 0.701164 6.47297 0.759741C6.3729 0.815878 6.27771 0.913507 6.18741 1.05263L3.35006 5.50817L1.92956 3.80577C1.7758 3.62759 1.58298 3.53851 1.35111 3.53851C1.13388 3.53851 0.954491 3.60807 0.812929 3.74719C0.671367 3.88631 0.600586 4.06082 0.600586 4.27072C0.600586 4.36591 0.61523 4.45622 0.644519 4.54165C0.676248 4.62463 0.733605 4.71128 0.81659 4.80158L2.70205 7.02386C2.87534 7.22644 3.09623 7.32773 3.36471 7.32773Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <p className=" w-[129px]  text-[#19191A] font-inter  font-[14px]">
                    We’ll be sending notifications to you here
                  </p>

                  <input
                    placeholder="hello@gmail.com"
                    className="rounded-lg border border-1 w-full px-[10px] py-2 border-[#E5E5E6] bg-[#FFF]"
                  />
                </div>
              </div>
            </div>
            {/* Mid Divs */}
            <div className="flex flex-col-reverse sm:items-start md:items-center    gap-y-4 sm:flex-row  mt-4 font-inter justify-between">
              <div className="md:max-w-xs w-72">
                <img className="rounded-lg  " src={Image} alt="Round_Image" />
              </div>
              <div className=" w-[305px] flex flex-col md:items-end items-start   ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    opacity="0.2"
                    d="M16 7C6 7 2 16 2 16C2 16 6 25 16 25C26 25 30 16 30 16C30 16 26 7 16 7ZM16 21C15.0111 21 14.0444 20.7068 13.2221 20.1573C12.3999 19.6079 11.759 18.827 11.3806 17.9134C11.0022 16.9998 10.9031 15.9945 11.0961 15.0245C11.289 14.0546 11.7652 13.1637 12.4645 12.4645C13.1637 11.7652 14.0546 11.289 15.0245 11.0961C15.9945 10.9031 16.9998 11.0022 17.9134 11.3806C18.827 11.759 19.6079 12.3999 20.1573 13.2221C20.7068 14.0444 21 15.0111 21 16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21Z"
                    fill="white"
                  />
                  <path
                    d="M30.9137 15.595C30.87 15.4963 29.8112 13.1475 27.4575 10.7937C24.3212 7.6575 20.36 6 16 6C11.64 6 7.67874 7.6575 4.54249 10.7937C2.18874 13.1475 1.12499 15.5 1.08624 15.595C1.02938 15.7229 1 15.8613 1 16.0012C1 16.1412 1.02938 16.2796 1.08624 16.4075C1.12999 16.5062 2.18874 18.8538 4.54249 21.2075C7.67874 24.3425 11.64 26 16 26C20.36 26 24.3212 24.3425 27.4575 21.2075C29.8112 18.8538 30.87 16.5062 30.9137 16.4075C30.9706 16.2796 31 16.1412 31 16.0012C31 15.8613 30.9706 15.7229 30.9137 15.595ZM16 24C12.1525 24 8.79124 22.6012 6.00874 19.8438C4.86704 18.7084 3.89572 17.4137 3.12499 16C3.89551 14.5862 4.86686 13.2915 6.00874 12.1562C8.79124 9.39875 12.1525 8 16 8C19.8475 8 23.2087 9.39875 25.9912 12.1562C27.1352 13.2912 28.1086 14.5859 28.8812 16C27.98 17.6825 24.0537 24 16 24ZM16 10C14.8133 10 13.6533 10.3519 12.6666 11.0112C11.6799 11.6705 10.9108 12.6075 10.4567 13.7039C10.0026 14.8003 9.88377 16.0067 10.1153 17.1705C10.3468 18.3344 10.9182 19.4035 11.7573 20.2426C12.5965 21.0818 13.6656 21.6532 14.8294 21.8847C15.9933 22.1162 17.1997 21.9974 18.2961 21.5433C19.3924 21.0892 20.3295 20.3201 20.9888 19.3334C21.6481 18.3467 22 17.1867 22 16C21.9983 14.4092 21.3657 12.884 20.2408 11.7592C19.1159 10.6343 17.5908 10.0017 16 10ZM16 20C15.2089 20 14.4355 19.7654 13.7777 19.3259C13.1199 18.8864 12.6072 18.2616 12.3045 17.5307C12.0017 16.7998 11.9225 15.9956 12.0768 15.2196C12.2312 14.4437 12.6122 13.731 13.1716 13.1716C13.731 12.6122 14.4437 12.2312 15.2196 12.0769C15.9956 11.9225 16.7998 12.0017 17.5307 12.3045C18.2616 12.6072 18.8863 13.1199 19.3259 13.7777C19.7654 14.4355 20 15.2089 20 16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20Z"
                    fill="white"
                  />
                </svg>
                <h1 className="text-[#F2F2F2]  leading-8 md:text-right text-left text-[31px]">
                  Watch what the whales are doing
                </h1>
                <p className="md:text-right text-left text-[16px] text-[#F2F2F2]">
                  All whales are not equal. Know exactly what the whales
                  impacting YOUR portfolio are doing.
                </p>
              </div>
            </div>
            {/* Last Div */}
            <h1 className="md:text-right text-left mt-4 text-[25px] font-inter mr-10 text-[#F2F2F2]">
              Testimonials
            </h1>
            <div className="border border-1 border-[#E5E5E680] mr-10 mt-4 mb-10 "></div>

            <div className="flex mt-[-15px] md:mt-[0px]  items-end  gap-x-10 ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M60 29.9444L52.7455 22.6898L52.7505 22.6848L30.067 0L22.8432 7.22386L22.8333 7.21393L0 30.0486L9.35245 39.4022L9.35742 39.3973L29.9608 60L39.3142 50.6464L39.3063 50.6385L60 29.9444ZM25.3947 36.7276L36.7409 25.3813L41.2991 29.9395L29.9529 41.2859L25.3947 36.7276ZM23.266 34.5989L18.7109 30.0437L30.0581 18.6973L34.6132 23.2525L23.266 34.5989ZM37.251 48.4363L32.156 43.3412L50.6475 24.8493L55.7426 29.9444L37.251 48.4363ZM30.067 4.25849L48.493 22.6838L43.398 27.779L24.972 9.3536L30.067 4.25849ZM22.8333 11.4724L27.9283 16.5675L16.5821 27.9149L16.5643 27.8971L9.33459 35.1269L4.25743 30.0486L22.8333 11.4724ZM29.9608 55.7425L11.4871 37.2675L16.5821 32.1724L35.0558 50.6464L29.9608 55.7425Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <div className="overflow-x-auto mb-10 md:gap-x-10 gap-x-5 overflow-y-hidden no-scrollbar flex">
              <div className="  flex-col items-start h-40 gap-[20px] flex p-[20px] rounded-xl  min-w-[300px]   sm:min-w-[353px] bg-white mt-4">
                <h1 className="text-[16px] font-inter ">
                  Yash P{" "}
                  <span className="text-[13px] text-[#96979A]">
                    Research, 3poch Crypto Hedge Fund
                  </span>
                </h1>
                <p>
                  “I use Loch everyday now. I don't think I could analyze crypto
                  whale trends markets without it. I'm addicted!”
                </p>
              </div>

              <div className="p-[20px] rounded-xl h-40   min-w-[353px] bg-white mt-4">
                <h1 className="text-[16px] font-inter ">
                  Jack F{" "}
                  <span className="text-[13px] text-[#96979A]">
                    Ex Blackrock PM
                  </span>
                </h1>
                <p>
                  “Love how Loch integrates portfolio analytics and whale
                  watching into one unified app.”
                </p>
              </div>
              <div className="p-[20px] rounded-xl h-full min-w-[400px] bg-white mt-4">
                <h1 className="text-[16px] font-inter ">
                  Shiv S{" "}
                  <span className="text-[13px] text-[#96979A]">
                    Co-Founder Magik Labs
                  </span>
                </h1>
                <p>
                  “Managing my own portfolio is helpful and well designed.
                  What’s really interesting is watching the whales though. No
                  one else has made whale tracking so simple.”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex hidden sticky top-0 font-inter flex-col gap-y-3 lg:w-1/3 w-full justify-center h-screen items-center p-4 ">
          <div className=" gap-y-4 flex  flex-col items-start  justify-center">
            <div>
              <h1 className="text-[#B0B1B3] leading-tight  md:leading-none text-[32px] md:text-[39px]">
                Sign Up for
              </h1>
              <h1 className="text-[#B0B1B3] leading-tight md:leading-none text-[32px] md:text-[39px]">
                exclusive access, 
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your emial address"
                className="rounded-lg border border-1 w-full px-[20px] py-2 border-[#E5E5E6] bg-[#FFF] mb-6"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button
                type="submit"
                className="bg-[#19191A] text-[#fff] px-[20px] py-2 w-full rounded-lg "
              >
                Get started
              </button>
            </form>
          </div>
          <p className="text-[#19191A] text-center ">
            You’ll receive an email with an invite link to join
          </p>
        </div>
      </div>
      <MobileLoginPage onClose={handleOnClose} visible={showMyModel} />
    </>
  );
};

export default Home;
