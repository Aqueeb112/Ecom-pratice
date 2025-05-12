import React from "react";
import { GrLanguage } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const ViewPageDetails = () => {
  return (
    <div className="px-5 md:px-12 py-8 bg-zinc-900 flex flex-col md:flex-row">
      <div className="bg-zinc-800 rounded p-4  md:w-3/6 md:h-[80vh] flex items-start gap-6 justify-center flex-col md:flex-row ">
        <img
          src=""
          alt=""
          className="w-full md:w-screen h-[40vh] md:h-[70vh]"
        />
        <div className="flex md:flex-col items-center justify-between md:justify-start w-full flex-row gap-2">
          <button className="bg-white rounded-full text-2xl p-2 text-blue-500">
            <FaShoppingCart />
          </button>
          <button className="bg-white rounded-full text-2xl p-2  text-red-500">
            <FaHeart />
          </button>
        </div>
        <div className="flex md:flex-col items-center justify-between md:justify-start w-full flex-row gap-2">
          <Link to="">
            <button className="bg-white rounded-full text-2xl p-2 text-blue-500">
              <FaRegEdit />
            </button>
          </Link>
          <button className="bg-white rounded-full text-2xl p-2  text-red-500">
            <MdDelete />
          </button>
        </div>
      </div>
      <div className="p-4 w-3/6">
        <h1 className="text-4xl text-zinc-300 font-semibold"></h1>
        <p className="text-zinc-400 mt-1">By sd</p>
        <p className="text-zinc-500 mt-4"> </p>
        <p className="text-zinc-400 mt-4 flex items-center justify-start">
          <GrLanguage className="me-3" />
        </p>
        <p className="mt-4 text-zinc-100 text-3xl font-semibold">Price : ₹sa</p>
      </div>
    </div>
  );
};

export default ViewPageDetails;
