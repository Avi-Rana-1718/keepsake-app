import { DateToReadableString, GetTime } from "@/util/DateToString";
import { FaArrowLeft, FaPlus, FaShare, FaTrash } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router";

export default function MediaViewer({id, added_at, url}: any) {

    const navigate = useNavigate()

    return (
        <div className="w-full h-screen text-white flex flex-col justify-between items-center">
            <div className="w-full flex justify-between items-center p-4">
                <FaArrowLeft onClick={()=>{navigate(-1)}}/>
               <div className="text-center">
                    <p className="text-sm">{DateToReadableString(added_at)}</p>
                    <small>{GetTime(added_at)}</small>
               </div>
               <BsThreeDotsVertical />
            </div>
            <img src={url} alt={id} className="max-h-[70vh]" />
            <div className="w-full p-4 flex justify-around items-center">
                <button className="flex flex-col gap-y-1 items-center">
                    <FaShare className="text-xl" />
                    <span>Share</span>
                </button>
                <button className="flex flex-col gap-y-1 items-center">
                    <FaPlus className="text-xl" />
                    <span>Add</span>
                </button>
                <button className="flex flex-col gap-y-1 items-center">
                    <FaTrash className="text-xl" />
                    <span>Delete</span>
                </button>
            </div>
        </div>
    )
}