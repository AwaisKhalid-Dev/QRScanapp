import React from "react";
import { useNavigate } from "react-router-dom";
import emoji2 from "../../images/emoji2.PNG";
export default function LoninWih() {
  const navigate = useNavigate();

  return (
    <>
      <div className="py-[40px] flex px-2  justify-center">
        <img src={emoji2} alt="" />
        <p className="ml-4 mt-2 text-xl text-center font-bold leading-6">
          {" "}
          Sebelum bermula, adakah anda ingin :
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <button
          onClick={() => navigate("/LoginForm")}
          className="h-[70px] w-[180px] bg-slate-300 rounded mt-5 font-bold transition duration-300 ease-in-out hover:bg-gray-500 "
        >
          Teruskan sebagai tetamu
        </button>
        <button
          onClick={() => navigate("/LoginForm")}
          className="h-[70px] w-[180px] transition duration-300 ease-in-out hover:bg-gray-500 bg-slate-300 rounded my-5 font-bold"
        >
          Mendaftar butir diri
        </button>
        <p className="mt-2 text-xl font-bold text-center">
          Tolong klik ini jika anda ingin maklum balas dari pihak kami
        </p>
      </div>
    </>
  );
}
