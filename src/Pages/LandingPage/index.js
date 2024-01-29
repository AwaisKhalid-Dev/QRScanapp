import React, { useState } from "react";
import moji from "../../images/feedback.png";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const [selectLang, setSelectLang] = useState("English");

  return (
    <>
      <div className="flex justify-center items-center flex-col h-[65vh]">
        <h1 className="text-[#f8d490] text-2xl font-bold">Hello! Apa Khabar</h1>
        <img src={moji} className="w-[100px] my-[50px]" alt="" />
        <h3 className="text-[#f8d490] text-2xl font-bold ">
          Sila pilih / Please choose
        </h3>
      </div>
      <div className="flex justify-center  my-[30px]">
        <button
          className={`border p-2 mr-4 ${
            selectLang === "English" ? "bg-slate-200" : ""
          }`}
          onClick={() => setSelectLang("English")}
        >
          English
        </button>
        <button
          className={`border p-2 ${
            selectLang === "Bahasa Malaysia" ? "bg-slate-200" : ""
          }`}
          onClick={() => setSelectLang("Bahasa Malaysia")}
        >
          Bahasa Malaysia
        </button>
      </div>
      <div
        onClick={() => navigate("/CustomerServey")}
        className="bg-slate-200 cursor-pointer border p-2 m-auto max-w-[400px]"
      >
        <p className="text-center  text-[#f8d490] text-2xl font-bold">
          Jom Bermula / Lets Start
        </p>
      </div>
    </>
  );
}
