import React from 'react'
import { motion } from "framer-motion"
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function cards({data,referance}) {

    

  return (
    <motion.div  drag  dragConstraints={referance} whileDrag={{scale:"1.1"}} dragElastic={0.2}
   className='w-[11vw] h-[30vh] bg-black/50 border-white/30 border-[1px] text-zinc-200 rounded-[30px] px-5 py-8 relative overflow-hidden flex-shrink-0'>
        <FaRegFileAlt />
        <p className='mt-3 text-xs font-semibold leading-tight'>{data.desc}</p>
        <div className='footer w-full absolute bottom-0 left-0 '> 
            <div className=' flex items-center justify-between px-4 mb-2'>
                <h3 className=' text-xs font-medium'>{data.filesize}</h3>
                <span className=' bg-pink-200/80 w-5 h-5 rounded-full flex items-center justify-center p-1 text-slate-700 text-[52px]'>
                {data.close ? <IoMdClose /> : <FaDownload />}                
                </span>
            </div>
            {data.tag.isOpen && (
            <div className={`tag w-full py-2 px-2 ${data.tag.tagColor === "blue" ? "bg-blue-400" : "bg-purple-400"} text-white  flex items-center justify-center`}>
                <h4 className='text-xs font-semibold'>{data.tag.tagTitle}</h4>
            </div>
            )}
        </div>
    </motion.div>
  )
}

export default cards