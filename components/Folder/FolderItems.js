import React from "react";
import Image from "next/image";

function FolderItems({ folder }) {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[130px] border-[1px] m-2 bg-white rounded-lg p-5 hover:shadow-md cursor-pointer">
      <Image src="/folder.png" alt="folder" width={40} height={40} />
      <h className="line-clamp-2 text-[12px] text-center">{folder.name}</h>
    </div>
  );
}

export default FolderItems;
