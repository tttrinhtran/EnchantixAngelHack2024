// components/FileUpload.js

import { useState } from 'react';
import path from 'path';
import fileHandler from './uploadFunc';



const FileUpload = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const files = [...e.dataTransfer.files];
    // save a file into folder upload
    saveFile()
    console.log(files); 

    const options = {};
    options.uploadDir = path.join(process.cwd(), '/Files');
    fileHandler('POST',options);
    console.log("Uploaded");

  };

  return (
    <div
      className={`flex flex-col items-center bg-purple  bg-opacity-35 border-2 border-white border-opacity-55 border-dashed rounded-lg p-8 text-center mx-8 ${
        dragging ? 'border-purple' : ''
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    ><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 47.2432C31.0756 47.2432 30.3118 46.9189 29.7088 46.2703C29.1029 45.6216 28.8 44.8649 28.8 44V10.9189L20.5867 19.2432C19.9467 19.8198 19.2 20.1268 18.3467 20.1643C17.4933 20.1989 16.7111 19.8559 16 19.1351C15.36 18.4865 15.0585 17.711 15.0955 16.8086C15.1296 15.9092 15.4311 15.1712 16 14.5946L29.3333 1.08108C29.6889 0.720721 30.0985 0.449731 30.5621 0.268109C31.0229 0.0893706 31.5022 0 32 0C32.4978 0 32.9785 0.0893706 33.4421 0.268109C33.9029 0.449731 34.3111 0.720721 34.6667 1.08108L48 14.5946C48.64 15.2432 48.9429 16 48.9088 16.8649C48.8718 17.7297 48.5689 18.4865 48 19.1351C47.2889 19.7838 46.5067 20.1268 45.6533 20.1643C44.8 20.1989 44.0533 19.8919 43.4133 19.2432L35.2 10.9189V44C35.2 44.8649 34.8985 45.6216 34.2955 46.2703C33.6896 46.9189 32.9244 47.2432 32 47.2432ZM7.68 64C5.54667 64 3.73333 63.2432 2.24 61.7297C0.746667 60.2162 0 58.3784 0 56.2162V47.7838C0 46.8468 0.302933 46.0714 0.908799 45.4573C1.51182 44.8461 2.27556 44.5405 3.2 44.5405C4.12444 44.5405 4.88818 44.8461 5.4912 45.4573C6.09707 46.0714 6.4 46.8468 6.4 47.7838V56.2162C6.4 56.5045 6.54222 56.7928 6.82667 57.0811C7.11111 57.3694 7.39556 57.5135 7.68 57.5135H56.32C56.6045 57.5135 56.8889 57.3694 57.1733 57.0811C57.4578 56.7928 57.6 56.5045 57.6 56.2162V47.7838C57.6 46.8468 57.9015 46.0714 58.5045 45.4573C59.1104 44.8461 59.8756 44.5405 60.8 44.5405C61.7244 44.5405 62.4896 44.8461 63.0955 45.4573C63.6985 46.0714 64 46.8468 64 47.7838V56.2162C64 58.3784 63.2533 60.2162 61.76 61.7297C60.2667 63.2432 58.4533 64 56.32 64H7.68Z" fill="white"/>
    </svg>
    <p className="text-2xl  font-Poppins_sb text-white my-4">Upload files </p>
    
      <p className="text-lg font-medium font-Poppins_md text-white">
        Drag & Drop your files here or click to browse
      </p>
    </div>
  );
};

export default FileUpload;
