import { useEffect, useState } from "react";
import { BottomNav } from "../components/BottomNav"
import { TopNav } from "../components/TopNav"
import { GridImage } from "@/components/GridImage";
import { ImageMapper } from "@/components/ImageMapper";

function App() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    console.log("Fetching photos...", photos.length);
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('https://nook-yvgg.onrender.com/media/default', {credentials: 'include'});
      if(response.status !== 200) {
        console.error('Failed to fetch photos:', response.statusText);
        return;
      }
      const data = await response.json();
      console.log(data);
      
      setPhotos(data.message);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  }

  return (
    <>
      <TopNav />
      <div className="h-full p-4">
          <ImageMapper items={photos} />
      </div>
      <BottomNav />
    </>
  )
}

export default App
