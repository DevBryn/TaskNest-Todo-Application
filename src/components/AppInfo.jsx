"use client";
import { ABOUT_TASKNEST } from "@/lib/constants/constant";
import { FaEarlybirds } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

export default function AppInfo({ isVisible, onClose }) {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-55 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="w-[350px] rounded-xl shadow-lg">
        <div className="rounded-t-xl py-4 px-3 bg-gradient-to-r from-cyan-600 to-blue-500 flex flex-col">
          <IoIosClose
            onClick={() => onClose()}
            className="place-self-end absolute cursor-pointer text-slate-200 hover:text-slate-50"
          />
          <h1 className="flex items-center gap-2">
            About TaskNest {<FaEarlybirds />}
          </h1>
        </div>
        <div className="bg-slate-50 py-4 px-3 rounded-b-xl flex flex-col gap-2">
          <h5 className="text-slate-700 font-medium text-sm text-center">
            About the App.
          </h5>
          <p className="text-slate-700 text-xs text-center">{ABOUT_TASKNEST}</p>
          <div>
            <h5 className="text-slate-700 font-medium text-sm text-center mt-2">
              Winston Bryan Salonga
            </h5>
            <p className="text-center text-sm text-slate-400">Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
