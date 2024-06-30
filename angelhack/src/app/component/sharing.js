import React, { useState } from "react";

export default function sharing(){
    // const avts = {}; 
    // for (let i = 1; i <= 3; i++) {
    //     avts.push({ id: i, src: `/image/Avatar${i}.png`, alt: `Avatar ${i}`, text: `This is avatar ${i}` });
    // }

    return(
        <>
            <div className="flex flex-col w-50 h-50 bg-black rounded-lg">
                <div className="flex flex-row h-1/5 mt-10">
                    <div className="ml-5">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.332 13.9975C16.332 11.0905 13.6289 8.16699 10.332 8.16699C9.94151 8.16699 8.65424 8.167 8.33203 8.167C5.01833 8.167 2.33203 10.7774 2.33203 13.9975C2.33203 16.7723 4.32672 19.0945 6.9987 19.6836C7.42752 19.7782 7.87377 19.8281 8.33203 19.8281" stroke="#F1F1F5" stroke-width="1.87327" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.668 13.9975C11.668 16.9045 14.3711 19.8281 17.668 19.8281C18.0585 19.8281 19.3458 19.8281 19.6679 19.8281C22.9817 19.8281 25.668 17.2177 25.668 13.9975C25.668 11.2227 23.6733 8.90065 21.0013 8.31147C20.5724 8.21691 20.1262 8.16699 19.6679 8.16699" stroke="#F1F1F5" stroke-width="1.87327" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>     
                    </div>

                    <div className="font-Poppins_sb text-white text-base ml-10">
                        Sharing "Shiba.mp3"
                    </div>
                </div>

              
               <div className="mx-5 my-5 w-full h-1/3 items-center drop-shadow-xl">
                    <input
                        className="h-full w-4/5 text-lg text-white text-opacity-40 b py-3 pl-3 order-0 rounded-[12px] bg-slate-700  bg-inherit focus:border-0 shadow-none placeholder-grey/40 font-Poppins_sb focus:outline-none"
                        type="text"
                        id="search"
                        placeholder="add id the person you want to share, eg: #lnan2983"
                    />
                </div>

                <p className="font-Poppins_sb text-white text-base ml-5">
                    People you shared with
                </p>

                <div className="flex flex-col w-full h-1/2 mx-5 mt-3 items-center justify-center">
                    <div className="flex flex-row h-1/3 w-full">
                        <div className="w-fit h-fit">
                            <img src="/image/Avatar1.png" alt="Avatar 1" className="w-full h-full"/>
                        </div>
                        
                        <div className="ml-5 font-Poppins_sb text-sm text-white">           
                            Jane Cooper
                        </div>

                        <div className="items-end mr-3 w-fit h-fit">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.644 13.9999L20.6606 8.99489C20.8803 8.7752 21.0037 8.47724 21.0037 8.16656C21.0037 7.85587 20.8803 7.55791 20.6606 7.33822C20.4409 7.11854 20.143 6.99512 19.8323 6.99512C19.5216 6.99512 19.2236 7.11854 19.004 7.33822L13.999 12.3549L8.99395 7.33822C8.77426 7.11854 8.4763 6.99512 8.16562 6.99512C7.85493 6.99512 7.55697 7.11854 7.33729 7.33822C7.1176 7.55791 6.99418 7.85587 6.99418 8.16656C6.99418 8.47724 7.1176 8.7752 7.33729 8.99489L12.354 13.9999L7.33729 19.0049C7.22794 19.1133 7.14114 19.2424 7.08191 19.3846C7.02268 19.5267 6.99219 19.6792 6.99219 19.8332C6.99219 19.9872 7.02268 20.1397 7.08191 20.2819C7.14114 20.4241 7.22794 20.5531 7.33729 20.6616C7.44574 20.7709 7.57478 20.8577 7.71695 20.9169C7.85912 20.9762 8.01161 21.0067 8.16562 21.0067C8.31963 21.0067 8.47212 20.9762 8.61429 20.9169C8.75646 20.8577 8.8855 20.7709 8.99395 20.6616L13.999 15.6449L19.004 20.6616C19.1124 20.7709 19.2414 20.8577 19.3836 20.9169C19.5258 20.9762 19.6783 21.0067 19.8323 21.0067C19.9863 21.0067 20.1388 20.9762 20.281 20.9169C20.4231 20.8577 20.5522 20.7709 20.6606 20.6616C20.77 20.5531 20.8568 20.4241 20.916 20.2819C20.9752 20.1397 21.0057 19.9872 21.0057 19.8332C21.0057 19.6792 20.9752 19.5267 20.916 19.3846C20.8568 19.2424 20.77 19.1133 20.6606 19.0049L15.644 13.9999Z" fill="white"/>
                            </svg>
                        </div>
                    </div>

                </div>
            
                


            </div>
        </>
    );
}
