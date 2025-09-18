import MediaViewer from "@/components/MediaViewer";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Media() {
    const {mediaId} = useParams();
    const [media, setMedia] = useState<any>(null);

    console.log(mediaId);
    

    useEffect(() => {
        fetchMedia();
    }, []);

    const fetchMedia = async () => {
        try {
            const response = await fetch(`https://nook-yvgg.onrender.com/media/${mediaId}`, { credentials: "include" });
            const data = await response.json();
            console.log(data.message);
            
            setMedia(data.message);
        } catch (error) {
            console.error('Error fetching media:', error);
        }
    };
    
    return (
        <div>
            {media ? <MediaViewer id={media.id} added_at={media.added_at} url={media.url} /> : <p>Loading...</p>}
        </div>
    );
}