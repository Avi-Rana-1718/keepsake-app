import MediaViewer from "@/components/MediaViewer";
import { useParams } from "react-router";

export default function Media() {
    const mediaId = useParams();
    console.log(mediaId);
    
    return (
        <div>
            <MediaViewer/>
        </div>
    );
}