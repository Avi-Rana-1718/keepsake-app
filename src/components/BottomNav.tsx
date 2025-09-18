import { Link } from "react-router";
import { FaImages } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export function BottomNav() {
    return (
        <div className="fixed bottom-0 w-full flex justify-around p-4 bg-[#303030] rounded-t-2xl">
            <Link to="/" className="flex flex-col items-center">
                <FaImages className="text-xl" />
                <span>Photos</span>
            </Link>
            <Link to="/collections" className="flex flex-col items-center">
                <FaFolder className="text-xl" />
                <span>Collections</span>
            </Link>
            <Link to="/Search" className="flex flex-col items-center">
                <FaSearch className="text-xl" />
                <span>Search</span>
            </Link>
        </div>
    )
}