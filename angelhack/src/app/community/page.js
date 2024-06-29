"use client"
import React from "react";
import _community from './community'
import _navbar from '../component/navbar'

export default function CommunityPage() {

    return (
        <>
            <div className="w-screen h-screen flex flex-row bg-black overflow-x-hidden">
                <div className="w-4/12 h-full align-top sticky top-0 ">
                {
                    _navbar()

                }</div>

                <div className="h-full w-full mx-20 mt-20 mb-10">
                     <_community />
                </div>  
            </div>
        </>)
}