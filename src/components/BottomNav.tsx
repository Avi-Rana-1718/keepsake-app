import { Link } from "react-router";
import { BiImages } from "react-icons/bi";
import { BiFolder } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";

export function BottomNav() {
    return (
        <div className="fixed bottom-0 w-full flex justify-around p-4 bg-[#303030] rounded-t-2xl">
            <Link to="/" className="flex flex-col items-center">
                <BiImages className="text-xl" />
                <span>Photos</span>
            </Link>
            <Link to="/collections" className="flex flex-col items-center">
                <BiFolder className="text-xl" />
                <span>Collections</span>
            </Link>
            <Link to="/search" className="flex flex-col items-center">
                <BiSearch className="text-xl" />
                <span>Search</span>
            </Link>
        </div>
    )
}