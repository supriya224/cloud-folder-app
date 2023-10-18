import React, { useState } from "react";
import Image from "next/image";
import {app} from '../../config/FirebaseConfig'
import {doc, setDoc, getFirestore} from 'firebase/firestore'
import { useSession } from "next-auth/react";

function CreateFolderModel() {
  const docId=Date.now().toString()
    const [folderName, setFolderName]=useState()
    const {data:session} =useSession();

    const db= getFirestore(app)
    const onCreate=async()=>{
        console.log(folderName)
        await setDoc(doc(db, "Folders", Date.now().toString()),{
          name:folderName,
          id:docId,
          createdBy:session.user.email
        })
    }



  return (
    <div>
      <form method="dialog" className="modal-box bg-white">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        {/* <div className="">
          <h3 className="font-bold text-lg ">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div> */}
        <div className="w-full items-center  bg-white  
        flex flex-col justify-center gap-3">
          <Image src="/folder.png" alt="folder" width={50} height={50} />
          <input
            type="text"
            placeholder="Folder Name"
            className="p-2 border-[1px] outline-none bg-white 
                rounded-md"
                onChange={(e)=>setFolderName(e.target.value)}
          />
          <button className="bg-blue-500
          text-white rounded-md p-2 px-3 w-full"
          onClick={()=>onCreate()}
          >Create</button>
        </div>
      </form>
    </div>
  );
}


export default CreateFolderModel;
