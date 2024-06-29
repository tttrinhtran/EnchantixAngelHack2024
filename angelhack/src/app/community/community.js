import React from "react";

export default function Community() {
    const items = [];

    for (let i = 1; i <= 12; i++) {
        items.push({ id: i, src: `/Images/${i}.png`, alt: `Image ${i}`, text: `This is image ${i}` });
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="group relative w-full h-full cursor-pointer overflow-hidden hover:shadow-white/30 transition-shadow"
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="object-cover w-full h-full transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent group-hover:to-slate-600  "></div>
                        <div className="absolute inset-0 flex flex-col mx-5 text-left translate-y-[20%] group-hover:translate-y-0 transition-all duration-500">
                            <div className="relative w-full h-full">
                                <div className="absolute w-full h-1/5  bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-row">
                                
                                    <h1 className="font-Poppins_sb text-xl text-white mt-3">Bao Uyen</h1>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
