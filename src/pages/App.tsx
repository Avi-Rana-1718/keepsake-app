import { useEffect, useState } from "react";
import { BottomNav } from "../components/BottomNav"
import { TopNav } from "../components/TopNav"
import { ImageMapper } from "@/components/ImageMapper";
import { redirect } from "react-router";

function App() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    console.log("Fetching photos...", photos.length);
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('https://nook-yvgg.onrender.com/media/album/default', {credentials: 'include'});
      if(response.status === 401) {
        redirect('/auth');
      }
      if(!response.ok) {
        throw new Error("Failed to fetch photos");
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
