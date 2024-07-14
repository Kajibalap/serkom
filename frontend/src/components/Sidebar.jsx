import React from "react";
import SummarizeIcon from "@mui/icons-material/Summarize";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InfoIcon from "@mui/icons-material/Info";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Sidebar = () => {
  return (
    <div className="flex">
      <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <span className="grid size-10 place-content-center  ">
              <img src={logo} />
            </span>
          </div>

          <div className="border-t border-gray-100 ">
            <div className="px-2">
              <div className="py-4">
                <a
                  href="#"
                  className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </a>
              </div>

              <ul className="space-y-1 border-t border-gray-100 pt-4"></ul>
            </div>
          </div>
        </div>
      </div>
      

      <div className="flex h-screen flex-1 flex-col justify-between border-e bg-gray-50">
        <div className="px-4 py-6">
      
          <ul className="mt-14 space-y-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                    return isActive
                      ? "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 bg-gray-300 text-gray-700"
                      : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700";
                  }}
              >
                <SummarizeIcon className="mr-3" />
                Arsip
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/kategori"
                className={({ isActive }) => {
                    return isActive
                      ? "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 bg-gray-300 text-gray-700"
                      : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700";
                  }}
              >
                <MenuBookIcon className="mr-3" />
                Kategori
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive
                    ? "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 bg-gray-300 text-gray-700"
                    : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700";
                }}
              >
                <InfoIcon className="mr-3" />
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
