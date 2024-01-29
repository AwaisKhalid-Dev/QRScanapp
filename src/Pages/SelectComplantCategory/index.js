import React from "react";
import { useNavigate } from "react-router-dom";

import emoji2 from "../../images/emoji2.PNG";
export default function SelectCategory() {
  const navigate = useNavigate();
  const categories = [
    "Kebersihan",
    "Kakitangan",
    "Masa Menungu",
    "Kemudahan",
    "Peralatan",
    "Tempat Makan",
    "Lain-laim",
    "Seturusnya",
  ];

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="py-[40px] flex px-2">
          <img src={emoji2} alt="" />
          <p className="ml-4 mt-2 text-xl text-center font-bold leading-6">
            Anda ingin membuat aduan tentang:
          </p>
        </div>

        {categories.map((item, index) => (
          <button
            onClick={() => navigate("/LeaveFeedback")}
            className="transition duration-300 ease-in-out hover:bg-gray-500 hover:shadow-md h-[45px] w-[180px] bg-slate-300 rounded mt-5 font-bold"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
