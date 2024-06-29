"use client";
import React from "react";

export default function search() {
  return (
    <div className="flex flex-col w-full h-auto items-center">
     
        <div className="flex flex-row w-full h-[60px] rounded-[12px] overflow-hidden bg-slate-700  items-center drop-shadow-xl">
          <div className="mx-4">
            <svg width="30" height="30" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group 1937">
                <path id="Stroke 455" d="M1.99965 35.854L11.0273 26.8263" stroke="#27219A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Stroke 456" fillRule="evenodd" clipRule="evenodd" d="M21.3447 2C13.331 2 6.83593 8.4951 6.83593 16.5088C6.83593 24.5225 13.331 31.0176 21.3447 31.0176C29.3584 31.0176 35.8535 24.5225 35.8535 16.5088C35.8535 8.4951 29.3584 2 21.3447 2V2Z" stroke="#27219A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>

          <input
            className="h-full w-4/5 text-lg text-white text-opacity-40 border-0  bg-slate-700  bg-inherit focus:border-0 shadow-none placeholder-grey/40 font-Poppins_md"
            type="text"
            id="search"
            placeholder="Search"
          />
        </div>
    
    </div>
  );
}
