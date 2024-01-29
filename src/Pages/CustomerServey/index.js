import React, { useState } from "react";
import emoji2 from "../../images/emoji2.PNG";
import { useNavigate } from "react-router-dom";

export default function CustomerServey() {
  const navigate = useNavigate();

  const buttons = [
    {
      heading: "Aduan",
      tooltip:
        "  Click the question mark logo to get a brief exp on the button function. The exp will appear on the side of the animation on top.",
    },
    {
      heading: "Pernilaian",
      tooltip:
        "  Click the question mark logo to get a brief exp on the button function. The exp will appear on the side of the animation on top.",
    },
    {
      heading: "Survey",
      tooltip:
        "  Click the question mark logo to get a brief exp on the button function. The exp will appear on the side of the animation on top.",
    },
  ];

  return (
    <>
      <div className="py-[40px] flex justify-center px-2 ">
        <img src={emoji2} alt="" />
      </div>
      <div ClassName="space-y-5  justify-center flex-col flex">
        {buttons.map((item, index) => (
          <div
            onClick={() => navigate("/LoginWith")}
            ClassName="flex justify-center items-center space-x-2 my-[10px]"
          >
            <button ClassName=" transition duration-300 ease-in-out hover:bg-gray-500 hover:shadow-md        w-[220px] h-[70px] shadow-md bg-gray-300 rounded text-2xl font-bold">
              {item.heading}
            </button>
            <div ClassName="relative group">
              <div ClassName="w-6 h-6 rounded-full transition duration-300 ease-in-out hover:bg-gray-500 bg-gray-300 flex items-center justify-center cursor-pointer text-sm font-bold">
                ?
              </div>
              <div ClassName="absolute hidden z-20 ml-[-60px] group-hover:block w-32 bg-black text-white text-sm p-2 rounded-md shadow-lg">
                {item.tooltip}
              </div>
            </div>
          </div>
        ))}

        <h1 className="text-[#f8d490] text-xl font-bold text-center">
          Tolong klik salah satu pilihan{" "}
        </h1>
      </div>
    </>
  );
}
