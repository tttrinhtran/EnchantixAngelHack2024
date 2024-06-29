
import React, { useState } from "react";


export default function community() {
    const items = [];

    for (let i = 1; i <= 12; i++) {
        items.push({ id: i, src: `/Images/${i}.png`, alt: `Image ${i}`, text: `This is image ${i}`});
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-gray-200 rounded shadow-md"
                    >
                        <img src={item.src} alt={item.alt} className= "w-full h-full" />
                        {/* <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0">
                        </div> */}
                    </div>
                ))}
            </div>
        </>
    );
}