"use client"
import React from "react";
import _dashboard from './dashboard'
import _navbar from '../component/navbar'

export default function dashboardpage() {

    return (
        <>
            <div className="w-screen h-screen">
                <_navbar />
                <_dashboard />
            </div>
        </>)
}