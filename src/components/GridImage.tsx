import { Link } from "react-router";

export function GridImage({ src, alt }: { src?: string; alt?: string }) {    
    return (
        <Link to={`/media/${alt}`}>
        <img src={src} alt={alt} className="w-full h-auto rounded-md shadow-md" />
        </Link>
    )
}