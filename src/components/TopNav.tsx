import { Link } from "react-router";
import { Upload } from "./ui/Upload";
export function TopNav() {
  return (
    <div className="flex justify-between p-4">
      <h1 className="text-2xl">Nook</h1>
      <ul className="flex gap-4 justify-center items-center">
        <li><Upload/></li>
        <li><Link to="/auth">Avi</Link></li>
      </ul>
    </div>
  )
}