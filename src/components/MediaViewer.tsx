import { DateToReadableString, GetTime } from "@/util/DateToString";
import { FaArrowLeft, FaPlus, FaShare, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BiShareAlt, BiListPlus, BiArrowBack, BiTrashAlt  } from "react-icons/bi";

export default function MediaViewer({id, added_at, url}: any) {

    const navigate = useNavigate()

    return (
        <div className="w-full h-screen text-white flex flex-col justify-between items-center">
            <div className="w-full flex justify-between items-center p-4">
                <BiArrowBack onClick={()=>{navigate(-1)}}/>
               <div className="text-center">
                    <p className="text-sm">{DateToReadableString(added_at)}</p>
                    <small>{GetTime(added_at)}</small>
               </div>
               <BiDotsVerticalRounded />
            </div>
            <img src={url} alt={id} className="max-h-[70vh]" />
            <div className="w-full p-4 flex justify-around items-center">
                <button className="flex flex-col gap-y-1 items-center">
                    <BiShareAlt className="text-xl" />
                    <span>Share</span>
                </button>
                <button className="flex flex-col gap-y-1 items-center">
                    <BiListPlus className="text-xl" />
                    <span>Add</span>
                </button>
                <button className="flex flex-col gap-y-1 items-center">
                    <BiTrashAlt className="text-xl" />
                    <span>Delete</span>
                </button>
            </div>
        </div>
    )
}