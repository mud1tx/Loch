import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MobileLoginPage = ({ visible, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    window.location.href = "https://app.loch.one/welcome";
  };
  if (!visible) return null;
  return (
    <>
      <div className=" fixed   inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm ">
        <div className="bg-white max-w-xs md:max-w-sm flex relative flex-col items-start gap-y-4 rounded-md p-10">
          <button onClick={onClose} className="">
            <AiOutlineCloseCircle className="absolute right-4 top-4" />
          </button>
          <div>
            <h1 className="text-[#B0B1B3] leading-tight font-inter  md:leading-none text-[32px] md:text-[39px]">
              Sign Up for
            </h1>
            <h1 className="text-[#B0B1B3] leading-tight font-inter md:leading-none text-[32px] md:text-[39px]">
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
              className="bg-[#19191A] font-inter text-[#fff] px-[20px] py-2 w-full rounded-lg "
            >
              Get started
            </button>
          </form>
          <p className="text-[#19191A] text-center font-inter ">
            You’ll receive an email with an invite link to join
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileLoginPage;
