"use client";
import React from "react";

export default function uploading() {
    return (
        <div className="flex items-center justify-center w-[400pt] h-[200pt] bg-black rounded-3xl">
            <div className="text-white flex flex-col mx-9">
                <p className="font-Poppins_sb mt-3 text-2xl">Who do you want to transfer the ownership to?</p>
                <input
                    type="text"
                    placeholder="Enter recipient"
                    className="my-3 px-2 py-3 rounded-lg bg-indigo-950 text-white text-opacity-55 font-Poppins_re w-full"
                />
                <div className="flex flex-row w-full mt-5">
                    <button className="bg-purple p-1 font-Poppins_re rounded-xl ml-auto py-3 px-8">Done</button>
                </div>
            </div>
        </div>
    );
}
