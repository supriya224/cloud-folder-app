import React from 'react'
import Image from "next/image";

function FolderItems({folder}) {
  return (
    <div>
        <Image src='/folder.png' alt="folder" width={40} height={40}  />
        <h2>{folder.name}</h2>
    </div>
  )
}

export default FolderItems