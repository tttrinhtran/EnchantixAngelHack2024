"use client";
import React from "react";
import Image from 'next/image';


export default function Navbar() {
    return (
        <>
            <div className="flex  ">
                <div className="w-64 h-screen bg-indigo-900 bg-opacity-10 text-white">
                    <div className="p-4">
                        <h1 className="text-xl font-Poppins_sb ">User</h1>
                    </div>
                    <nav className="mt-4 mx-8">
                        <div className="py-2.5 rounded transition duration-200 hover:bg-purple hover:text-white font-Poppins_md flex flex-row justify-center items-start">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 3.5H5.83333C5.21449 3.5 4.621 3.74583 4.18342 4.18342C3.74583 4.621 3.5 5.21449 3.5 5.83333V10.5C3.5 11.1188 3.74583 11.7123 4.18342 12.1499C4.621 12.5875 5.21449 12.8333 5.83333 12.8333H10.5C11.1188 12.8333 11.7123 12.5875 12.1499 12.1499C12.5875 11.7123 12.8333 11.1188 12.8333 10.5V5.83333C12.8333 5.21449 12.5875 4.621 12.1499 4.18342C11.7123 3.74583 11.1188 3.5 10.5 3.5ZM22.1667 3.5H17.5C16.8812 3.5 16.2877 3.74583 15.8501 4.18342C15.4125 4.621 15.1667 5.21449 15.1667 5.83333V10.5C15.1667 11.1188 15.4125 11.7123 15.8501 12.1499C16.2877 12.5875 16.8812 12.8333 17.5 12.8333H22.1667C22.7855 12.8333 23.379 12.5875 23.8166 12.1499C24.2542 11.7123 24.5 11.1188 24.5 10.5V5.83333C24.5 5.21449 24.2542 4.621 23.8166 4.18342C23.379 3.74583 22.7855 3.5 22.1667 3.5ZM10.5 15.1667H5.83333C5.21449 15.1667 4.621 15.4125 4.18342 15.8501C3.74583 16.2877 3.5 16.8812 3.5 17.5V22.1667C3.5 22.7855 3.74583 23.379 4.18342 23.8166C4.621 24.2542 5.21449 24.5 5.83333 24.5H10.5C11.1188 24.5 11.7123 24.2542 12.1499 23.8166C12.5875 23.379 12.8333 22.7855 12.8333 22.1667V17.5C12.8333 16.8812 12.5875 16.2877 12.1499 15.8501C11.7123 15.4125 11.1188 15.1667 10.5 15.1667ZM22.1667 15.1667H17.5C16.8812 15.1667 16.2877 15.4125 15.8501 15.8501C15.4125 16.2877 15.1667 16.8812 15.1667 17.5V22.1667C15.1667 22.7855 15.4125 23.379 15.8501 23.8166C16.2877 24.2542 16.8812 24.5 17.5 24.5H22.1667C22.7855 24.5 23.379 24.2542 23.8166 23.8166C24.2542 23.379 24.5 22.7855 24.5 22.1667V17.5C24.5 16.8812 24.2542 16.2877 23.8166 15.8501C23.379 15.4125 22.7855 15.1667 22.1667 15.1667Z" fill="white"/>
                            </svg>

                            <a href="#" className="ml-2">Dashboard</a>
                        </div>
                        <div className="block py-2.5  rounded transition duration-200 hover:bg-purple hover:text-white font-Poppins_md flex-row justify-center items-start">
                      

                       <a href="#" className="ml-2">Files Shared</a>
                        </div>
                        <div className="py-2.5 rounded transition duration-200 hover:bg-purple hover:text-white font-Poppins_md flex flex-row justify-center items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.7507 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V3.75C4.5 3.55109 4.57902 3.36032 4.71967 3.21967C4.86032 3.07902 5.05109 3 5.25 3H14.2507L19.5007 8.25V20.25C19.5007 20.3485 19.4813 20.446 19.4436 20.537C19.406 20.628 19.3507 20.7107 19.2811 20.7803C19.2114 20.85 19.1287 20.9052 19.0377 20.9429C18.9468 20.9806 18.8492 21 18.7507 21Z" stroke="#F1F1F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.25 3V8.25H19.5007" stroke="#F1F1F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.4805 15.731L14.9805 17.231" stroke="#F1F1F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.625 16.5C13.0747 16.5 14.25 15.3247 14.25 13.875C14.25 12.4253 13.0747 11.25 11.625 11.25C10.1753 11.25 9 12.4253 9 13.875C9 15.3247 10.1753 16.5 11.625 16.5Z" stroke="#F1F1F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                            <a href="#" className="ml-2">Accessed Files</a>
                        </div>
                        <div className="py-2.5 px-4 rounded transition duration-200 hover:bg-purple hover:text-white font-Poppins_md flex flex-row justify-center">
                        <Image 
                            src="/community.png" 
                            alt="Example Image" 
                            width={500} 
                            height={300} 
                        />
                            <a href="#" className="ml-2">Community</a>
                        </div>
                        <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple hover:text-white font-Poppins_md">
                            <a href="#" className="ml-2">Statictics</a>
                        </div>
                        
                    </nav>
                </div>
                
            </div>
        </>
    );
}
