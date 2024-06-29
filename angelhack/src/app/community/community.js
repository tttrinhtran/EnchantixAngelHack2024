
import React, { useState } from "react";


export default function community() {
    

    return (
        <>
        <div className="grid grid-cols-3 gap-4">
            {items.map((item, index) => (
                <div
                key={index}
                className="bg-gray-200 p-4 rounded shadow-md"
                >
                {item}
                </div>
            ))}
            </div>
           
        </>
    )
}
