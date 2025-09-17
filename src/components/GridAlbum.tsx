import { Link } from "react-router";

export function GridAlbum({ id, name, mediaCount }: { id: string; name?: string; mediaCount?: number }) {
    return (
        <Link to={`/collections/${id}`} className="block shadow-md">
            <div className="p-4 rounded-lg">
                <h3 className="text-lg">{name}</h3>
                <p className="text-sm text-gray-500">{mediaCount} items</p>
            </div>
        </Link>
    )
}