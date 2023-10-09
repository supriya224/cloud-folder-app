import React from 'react'
import FolderItems from './FolderItems'

function FolderList({folder}) {
    const folderList=[
            {
                id:1,
                name:'Folder 1 to Test Big Text'
            },
            {
                id:2,
                name:'Folder 2'
            },
            {
                id:3,
                name:'Folder 3'
            },
            {
                id:4,
                name:'Folder 4'
            },
            {
                id:5,
                name:'Folder 4'
            },
    ]
  return (
    <div className='p-5 mt-5 bg-white rounded-lg'>
        <h2 className='text-[17px] font-bold items-center'>
            Recent Folder
            <span className='float-right text-blue-500 text-[13px]'>View All</span>
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3'>{folderList.map((item)=>(
            <FolderItems folder={item}/>


        ))}</div>
        </div>
  )
}

export default FolderList