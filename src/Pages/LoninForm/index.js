import React from "react";
import { useNavigate } from "react-router-dom";

import emoji2 from "../../images/emoji2.PNG";
export default function LoginForm() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="py-[40px] flex px-2">
          <img src={emoji2} alt="" />
          <p className="ml-4 text-xl text-center font-bold leading-6">
            Tolong isikan butiran anda dibawah:
          </p>
        </div>

        <div className="flex justify-center items-center h-[70vh] ">
          <form
            onSubmit={() => navigate("/ChooseCategory")}
            className="w-full max-w-sm  p-8  rounded-lg"
          >
            <div className="mb-4 flex items-center justify-center">
              <label
                htmlFor="name"
                className="block text-gray-700 mr-2  text-sm font-bold mb-2"
              >
                Nama:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Masukkan Nama"
                className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4 flex items-center justify-center">
              <label
                htmlFor="hp"
                className="block text-gray-700 mr-[30px] text-sm font-bold mb-2"
              >
                HP:
              </label>
              <input
                type="text"
                id="hp"
                placeholder="Masukkan HP"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4 flex items-center justify-center">
              <label
                htmlFor="email"
                className="block text-gray-700 mr-[15px] text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4 flex items-center justify-center">
              <label
                htmlFor="gender"
                className="block text-gray-700 mr-1 text-sm font-bold mb-2"
              >
                Jantina:
              </label>
              <input
                type="text"
                id="gender"
                placeholder="Masukkan Jantina"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-6 flex items-center justify-center">
              <label
                htmlFor="age"
                className="block text-gray-700 mr-3 text-sm font-bold mb-2"
              >
                Umur:
              </label>
              <input
                type="number"
                id="age"
                placeholder="Masukkan Umur"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center flex-col font-bold justify-center">
              <button
                className="bg-slate-300 hover:bg-slate-500  font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Seturusnya
              </button>
              <span className="mt-3">Atau</span>
              <p className="underline">Ingin teruskan sebagai tetamu</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
