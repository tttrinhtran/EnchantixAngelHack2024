"use client";
import React from "react";

export default function uploadsuccess() {
    return (
        <div className="flex w-[300pt] h-[300pt] bg-black">
            <div className=" text-white flex flex-col mx-9 ">
                <div className="flex flex-col w-full h-full items-center">
                <svg width="391" height="311" viewBox="0 0 391 311" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="182.469" cy="162.414" r="148.379" fill="#4ADE80"/>
                <rect x="134.344" y="114.292" width="96.2457" height="96.2457" rx="12" fill="#F8F8FF"/>
                <path d="M160.406 162.415L174.442 176.451L202.514 148.379" stroke="#3BC963" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="330.844" cy="14.0358" r="14.0358" fill="#4ADE80"/>
                <circle cx="6.01536" cy="42.1076" r="6.01536" fill="#4ADE80"/>
                <circle cx="384.984" cy="230.588" r="6.01536" fill="#4ADE80"/>
                <circle cx="60.1518" cy="298.763" r="12.0307" fill="#4ADE80"/>  
                </svg>
                <p className="text-white font-Poppins_sb mt-3">Your data is secured!</p>
                <p className="text-dark-grey font-Poppins_re mt-1">You can share it with other people</p>
                <div className="flex flex-row text-white w-full mt-5 "
                ><button className="bg-none border-2 border-purple font-Poppins_re rounded-xl py-2 px-4">Generate link</button>
                <button className="bg-purple  p-1 font-Poppins_re rounded-xl ml-auto  py-2 px-4">Done</button>
                </div>



                </div>

              
            </div>
        </div>
    );
}
