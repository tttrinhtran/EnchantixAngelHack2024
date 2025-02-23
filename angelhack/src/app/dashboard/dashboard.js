

import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import _seachbar from '../component/search'

import FileUpload from "../component/fileupload.js"
import getUserFiles from "../component/getAllFileFunc.js";


export default function dashboard() {
    const [files, setFiles] = useState([]);

    const [videoCount, setVideoCount] = useState(0);
    const [audioCount, setAudioCount] = useState(0);
    const [documentCount, setDocumentCount] = useState(0);
    const [imageCount, setImageCount] = useState(0);
    const userId = '7cd5aa51-18d3-4130-83c2-37aafc1385f0';
  
    const fetchFiles = async () => {
      try {
        const filesData = await getUserFiles(userId);
        setVideoCount(0);
        setAudioCount(0);
        setDocumentCount(0);
        setImageCount(0);
        setFiles(filesData || []);
        if (filesData) {
          filesData.forEach((file) => {
            const type=file.fileName.split('.').pop();
            if (type === 'mp4' || type === 'mkv' || type === 'avi') {
              setVideoCount((prev) => prev + 1);
            } else if (type === 'mp3' || type === 'wav' || type === 'flac') {
              setAudioCount((prev) => prev + 1);
            } else if (type === 'pdf' || type === 'docx' || type === 'txt') {
              setDocumentCount((prev) => prev + 1);
            } else if (type === 'png' || type === 'jpg' || type === 'jpeg'|| type == 'JPG'|| type == 'JPEG' || type == 'PNG') {
              setImageCount((prev) => prev + 1);
            }
          });
        }

      } catch (error) {
        console.error('Error fetching user files:', error);
      }
    };
  
    // Call fetchFiles directly when component mounts
    fetchFiles();

    return (
        <>
        <div className="h-fit w-full mt-8 flex flex-col py-5">
            <div className="w-full h-fit self-start ">
                {_seachbar()}
            </div>
            <div className="w-full h-fit py-2">
              {FileUpload()}
            </div>
            <div className="w-full h-[50pt]">


            </div>
            <div className="w-full h-fit flex flex-col">
                <div className="font-Poppins_sb text-white my-3 text-lg">Category</div>
                    <div className="grid grid-cols-4 gap-10">

                      <div className="w-full border-2 bg-none border-slate-400 rounded-lg flex flex-col p-5">
                      <div className="bg-slate-700 w-[40pt] h-[40pt] flex  rounded-lg justify-center items-center mb-8">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto mr-auto">
                        <path d="M27 4.5H9C7.80653 4.5 6.66193 4.97411 5.81802 5.81802C4.97411 6.66193 4.5 7.80653 4.5 9V27C4.5 28.1935 4.97411 29.3381 5.81802 30.182C6.66193 31.0259 7.80653 31.5 9 31.5H27C28.1935 31.5 29.3381 31.0259 30.182 30.182C31.0259 29.3381 31.5 28.1935 31.5 27V9C31.5 7.80653 31.0259 6.66193 30.182 5.81802C29.3381 4.97411 28.1935 4.5 27 4.5ZM12 10.5C12.445 10.5 12.88 10.632 13.25 10.8792C13.62 11.1264 13.9084 11.4778 14.0787 11.889C14.249 12.3001 14.2936 12.7525 14.2068 13.189C14.12 13.6254 13.9057 14.0263 13.591 14.341C13.2763 14.6557 12.8754 14.87 12.439 14.9568C12.0025 15.0436 11.5501 14.999 11.139 14.8287C10.7278 14.6584 10.3764 14.37 10.1292 14C9.88196 13.63 9.75 13.195 9.75 12.75C9.75 12.1533 9.98705 11.581 10.409 11.159C10.831 10.7371 11.4033 10.5 12 10.5V10.5ZM28.5 26.745C28.5331 27.1765 28.3939 27.6035 28.1127 27.9325C27.8315 28.2615 27.4314 28.4655 27 28.5H9L20.355 18.27C20.5457 18.0961 20.7944 17.9997 21.0525 17.9997C21.3106 17.9997 21.5593 18.0961 21.75 18.27L28.5 24.99V26.745Z" fill="#F95050"/>
                        </svg>

                      </div>
                      

                      <p className="font-Poppins_md text-white">Images</p>
                      <p className="font-Poppins_md text-white">{imageCount} file</p>    

                      </div>
                      <div className="border-2 bg-none border-slate-400 rounded-lg flex flex-col p-5">
                      <div className="bg-slate-700 w-[40pt] h-[40pt] flex  rounded-lg justify-center items-center mb-8">
                      <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.11 10.9948L23.45 3.49478C23.3098 3.33939 23.1385 3.21508 22.9474 3.12982C22.7562 3.04457 22.5493 3.00028 22.34 2.99978H10.34C9.84162 2.99384 9.34696 3.08612 8.88425 3.27137C8.42154 3.45661 7.99986 3.73119 7.64327 4.07941C7.28669 4.42764 7.00219 4.8427 6.80603 5.30088C6.60986 5.75907 6.50587 6.2514 6.5 6.74978V29.2498C6.50587 29.7482 6.60986 30.2405 6.80603 30.6987C7.00219 31.1569 7.28669 31.5719 7.64327 31.9202C7.99986 32.2684 8.42154 32.543 8.88425 32.7282C9.34696 32.9134 9.84162 33.0057 10.34 32.9998H26.66C27.1584 33.0057 27.653 32.9134 28.1157 32.7282C28.5785 32.543 29.0001 32.2684 29.3567 31.9202C29.7133 31.5719 29.9978 31.1569 30.194 30.6987C30.3901 30.2405 30.4941 29.7482 30.5 29.2498V11.9998C30.499 11.628 30.36 11.2699 30.11 10.9948V10.9948ZM21.5 5.99978L27.11 11.9998H22.61C22.4529 11.9903 22.2993 11.9496 22.1581 11.8801C22.0169 11.8106 21.891 11.7137 21.7877 11.595C21.6843 11.4763 21.6057 11.3383 21.5563 11.1888C21.5069 11.0394 21.4878 10.8817 21.5 10.7248V5.99978Z" fill="#1D92F1"/>
                    </svg>
                    </div>

                      <p className="font-Poppins_md text-white">Documents</p>
                      <p className="font-Poppins_md text-white">{documentCount} file</p>    

                      </div>
                      <div className="border-2 bg-none border-slate-400 rounded-lg flex flex-col p-5">
                      <div className="bg-slate-700 w-[40pt] h-[40pt] flex  rounded-lg justify-center items-center mb-8">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.5011 22.4999V5.99989C28.5001 5.77458 28.4483 5.5524 28.3496 5.34985C28.2509 5.1473 28.1079 4.96958 27.9311 4.82989C27.7569 4.68892 27.5532 4.5888 27.3352 4.53688C27.1171 4.48497 26.8902 4.48258 26.6711 4.52989L13.1711 7.52989C12.8379 7.60505 12.5402 7.79172 12.3275 8.05903C12.1147 8.32633 11.9996 8.65826 12.0011 8.99989V21.5099C10.9771 21.0265 9.82398 20.8881 8.71468 21.1156C7.60539 21.343 6.59975 21.9241 5.84864 22.7715C5.09753 23.6189 4.64144 24.687 4.5488 25.8156C4.45616 26.9442 4.73196 28.0724 5.33483 29.0309C5.9377 29.9895 6.83512 30.7267 7.89248 31.132C8.94983 31.5374 10.1101 31.5889 11.1992 31.2789C12.2884 30.969 13.2476 30.3142 13.9331 29.4129C14.6186 28.5115 14.9933 27.4122 15.0011 26.2799C15.0166 26.0201 15.0166 25.7597 15.0011 25.4999V10.1999L25.5011 7.87489V18.5099C24.4766 18.0262 23.3227 17.8879 22.2128 18.1159C21.103 18.3439 20.0971 18.9258 19.3461 19.7742C18.5952 20.6226 18.1398 21.6918 18.0483 22.8211C17.9568 23.9504 18.2341 25.0789 18.8387 26.0372C19.4433 26.9954 20.3424 27.7317 21.4011 28.1353C22.4598 28.539 23.6208 28.5883 24.7099 28.2758C25.799 27.9633 26.7573 27.306 27.4409 26.4024C28.1245 25.4989 28.4966 24.3979 28.5011 23.2649C28.5154 23.0101 28.5154 22.7547 28.5011 22.4999V22.4999Z" fill="#FFD12C"/>
                      </svg>
                      </div>


                      <p className="font-Poppins_md text-white">Audio</p>
                      <p className="font-Poppins_md text-white">{audioCount} file</p>    

                      </div>
                      <div className="border-2 bg-none border-slate-400 rounded-lg flex flex-col p-5">
                      <div className="bg-slate-700 w-[40pt] h-[40pt] flex  rounded-lg justify-center items-center mb-8">
                      <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 10.725C31.5443 10.5198 31.0383 10.4531 30.5449 10.5331C30.0515 10.6131 29.5925 10.8363 29.225 11.175L26 14.175V12C26 10.8065 25.5259 9.66193 24.682 8.81802C23.8381 7.97411 22.6935 7.5 21.5 7.5H8C6.80653 7.5 5.66193 7.97411 4.81802 8.81802C3.97411 9.66193 3.5 10.8065 3.5 12V24C3.5 25.1935 3.97411 26.3381 4.81802 27.182C5.66193 28.0259 6.80653 28.5 8 28.5H21.5C22.6935 28.5 23.8381 28.0259 24.682 27.182C25.5259 26.3381 26 25.1935 26 24V21.825L29.24 24.825C29.717 25.2568 30.3366 25.4972 30.98 25.5C31.337 25.4992 31.6898 25.4225 32.015 25.275C32.4574 25.096 32.8364 24.7892 33.1036 24.3938C33.3708 23.9984 33.514 23.5322 33.515 23.055V12.945C33.5128 12.466 33.3674 11.9987 33.0974 11.603C32.8274 11.2074 32.4452 10.9016 32 10.725V10.725Z" fill="#3BC963"/>
                        </svg>
                        </div>

                      <p className="font-Poppins_md text-white">Videos</p>
                      <p className="font-Poppins_md text-white">{videoCount} file</p>    

                      </div>


                    </div>
                    
                </div>

                <div className="font-Poppins_sb text-white my-5 text-lg">
                  Recent
                </div>

                <div className="flex flex-col w-full h-full rounded-2xl  overflow-hidden border-b-1 border-blue border-solid border-opacity-60 mr-2 mt-5">
                  <div className="flex flex-row w-full h-[60pt] bg-red bg-opacity-50 items-center justify-center ">
                      <div className="w-1/6 text-left">
                          <p className="font-Poppins_md text-base text-purple">
                              Asset Name
                          </p>
                      </div>
                      <div className="w-1/6 text-left">
                          <p className="font-Poppins_md text-sm text-purple">
                              ID
                          </p>
                      </div>
                      <div className="w-1/6 text-left">
                          <p className="font-Poppins_md text-sm text-purple">
                              Created
                          </p>
                      </div>
                      <div className="w-1/6 text-left">
                          <p className="font-Poppins_md text-sm text-purple">
                              Size
                          </p>
                      </div>
                      <div className="w-1/6 text-left">
                          <p className="font-Poppins_md text-sm text-purple">
                              Status
                          </p>
                      </div>
                  </div>
                </div>
                {files.length>0 && files.map((file) => (
                  <div className="flex flex-col w-full h-full rounded-2xl  overflow-hidden border-b-1 border-blue border-solid border-opacity-60 mr-2 mt-5">
                  <div className="flex flex-row w-full h-full bg-red bg-opacity-50 items-center justify-center ">
                      <div className="w-1/6 h-fit text-left">
                          <p className="font-Poppins_md text-base text-white overflow-clip">
                              {file.fileName}
                          </p>
                      </div>
                      <div className="w-1/6 text-left">
                          <p className="font-Poppins_md text-sm text-white">
                              {file.id}
                          </p>
                      </div>
                      <div className="w-1/6 text-left">
                          <p className="font-Poppins_md text-sm text-white overflow-ellipsis ">
                              {file.createdAt}
                          </p>
                      </div>
                      <div className="w-1/6 text-left">
                          <p className="font-Poppins_md text-sm text-white overflow-ellipsis ">
                              {file.size}
                          </p>
                      </div>
                      <div className="w-1/6 text-left">
                          <p className="font-Poppins_md text-sm text-white overflow-ellipsis ">
                              {file.typeShare}
                          </p>
                      </div>
                </div>
                </div>
                ))}
              
              </div>

              


      
           
        </>
    )
}
