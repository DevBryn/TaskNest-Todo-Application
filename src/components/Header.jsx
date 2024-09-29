"use client";
import { FaEarlybirds } from "react-icons/fa";
import AppInfo from "./AppInfo";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

export default function Header() {
  const [showAppInfo, setShowAppInfo] = useState(false);
  return (
    <header className="flex justify-between items-center h-[10vh] px-4 text-slate-100 min-w-[350px] bg-gradient-to-r from-cyan-600 to-blue-500">
      <div className="flex items-center gap-2 text-xl select-none">
        <h1 className="font-semibold">Tasknest</h1>
        <FaEarlybirds />
      </div>
      <div className="flex gap-2 items-center">
        <FaInfoCircle
          className="cursor-pointer text-slate-200 hover:text-slate-50"
          onClick={() => setShowAppInfo(true)}
        />
        <AppInfo
          isVisible={showAppInfo}
          onClose={() => setShowAppInfo(false)}
        />
      </div>
    </header>
  );
}
