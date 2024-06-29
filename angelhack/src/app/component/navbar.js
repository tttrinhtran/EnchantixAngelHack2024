"use client";
import React from "react";

export default function Navbar() {
    return (
        <>
            <div className="flex  ">
                <div className="w-64 h-screen bg-indigo-800 bg-opacity-20 text-white">
                    <div className="p-4">
                        <h1 className="text-xl Poppins_black ">User</h1>
                    </div>
                    <nav className="mt-4 mx-8">
                        <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple hover:text-white font-Poppins_md">
                            <a href="#">Dashboard</a>
                        </div>
                        <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple hover:text-white font-Poppins_md">
                            <a href="#">Files Shared</a>
                        </div>
                        <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple hover:text-white font-Poppins_md">
                            <a href="#">Accessed Files</a>
                        </div>
                        <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple hover:text-white font-Poppins_md">
                            <a href="#">Statictics</a>
                        </div>
                        
                    </nav>
                </div>
                
            </div>
        </>
    );
}
