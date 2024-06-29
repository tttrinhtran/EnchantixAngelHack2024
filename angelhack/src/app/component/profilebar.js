"use client";
import React from "react";

export default function ProfileBar() {
    return (
        <div className="flex w-full h-screen bg-indigo-900 bg-opacity-10">
            <div className=" text-white flex flex-col mx-9">
                <div className="p-4">
                    <h1 className="text-xl font-Poppins_sb">User</h1>
                </div>
                <button className="block py-2.5 rounded transition duration-200 bg-purple text-white font-Poppins_md">Add new +</button>
                <div className="w-full h-fit text-white">
                    <p className="font-Poppins_sb">Your Storage</p>
                    <p className="font-Poppins_md">75gb are used out of 100GB</p>
                    <div className="h-4 w-full bg-gray-200 rounded-full">
                        <div
                            className="h-full rounded-full bg-blue-500"
                            style={{ width: `${75}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
