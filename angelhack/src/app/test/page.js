"use client"
import React from "react";
import _uploadsuccess from '../component/uploadsuccess'
import _fileupload from '../component/fileupload'


export default function test() {

    return (
        <>
            <div className="w-screen h-screen ">
              {_fileupload()}
            </div>
        </>)
}