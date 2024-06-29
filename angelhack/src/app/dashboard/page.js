"use client"
import React from "react";
import _dashboard from './dashboard'
import _navbar from '../component/navbar'
import _profilebar from '../component/profilebar'


export default function dashboardpage() {

    return (
        <>
            <div className="w-screen h-screen flex flex-row bg-black overflow-x-hidden">
                <div className="w-4/12 h-full align-top">
                {
                    _navbar()

                }</div>
                <div className="h-full w-full mx-5">
                     <_dashboard />
                </div>
                <div className="w-4/12 h-full self-end">
                {_profilebar()}</div> 

            </div>
        </>)
}