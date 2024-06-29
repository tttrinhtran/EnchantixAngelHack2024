"use client";
import React from "react";

export default function TransferSuccessCon() {
    return (
        <div className="flex items-center justify-center w-[400pt] h-[200pt] bg-black rounded-3xl">
            <div className="text-white flex flex-col mx-9">
                <p className="font-Poppins_sb mt-3 text-2xl">Change ownership</p>
                <p className="text-red-800 font-Poppins_re mt-1">Are you sure you want to change the ownership?</p>
                <p className="text-dark-grey font-Poppins_re mt-1">
                After this action is done, you’re no longer own this file and it will be deleted from your storage</p>
                <div className="flex flex-row w-full mt-5">
                    <button className="bg-purple p-1 font-Poppins_re rounded-xl  py-3 px-8">Cancle</button>
                    <button className="bg-purple p-1 font-Poppins_re rounded-xl ml-3 py-3 px-8">Proceed</button>
                </div>
            </div>
        </div>
    );
}
