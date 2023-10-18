import Image from "next/image";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Menu from "../../data/menu";
import { useState } from "react";
import CreateFolderModel from "../Folder/CreateFolderModel";

function SideNavBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-[200px] bg-white h-screen sticky top-0 z-10 shadow-blue-300 shadow-md p-5">
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={60}
          className=" flex justify-center"
        />
      </div>
      <button className="flex pt-3 gap-2 items-center text-[13px] justify-center bg-blue-500 p-2 w-full text-white rounded-md px-3 hover:scale-105 transition-all mt-5">
        Add New File <AiOutlinePlusCircle className="w-6 h-6" />
      </button>

      <button className="flex pt-3 gap-2 items-center text-[13px] bg-sky-400 w-full p-2 justify-center text-white rounded-md px-3 hover:scale-105 transition-all mt-1"  onClick={() => document.getElementById("my_modal_3").showModal()}>
        Create Folder <AiOutlinePlusCircle className="w-6 h-6" />
      </button>

      <div className="mt-7">
        {Menu?.list?.map((item, index) => (
          <h2
            onClick={() => setActiveIndex(index)}
            className={`flex gap-2 items-center
            p-2 mt-3 text-gray-500 rounded-md cursor-pointer
            hover:bg-blue-500 hover:text-white ${
              activeIndex == index
                ? "hover:bg-blue-500 hover:text-white"
                : "null"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={item.logo}
              />
            </svg>

            {item.name}
          </h2>
        ))}
      </div>

      <dialog id="my_modal_3" className="modal">
        <CreateFolderModel />
      </dialog>
    </div>
  );
}

export default SideNavBar;
