"use client"

import _fileupload from '../component/fileupload'
import _change_owner_confirm from '../component/change_owner/change_owner_confirm'
import _change_owner_pop from '../component/change_owner/change_owner_pop'



export default function test() {

    return (
        <>
            <div className="w-screen h-screen ">
              {_change_owner_pop()}
            </div>
        </>)
}