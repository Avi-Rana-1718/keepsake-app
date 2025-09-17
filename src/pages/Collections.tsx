import { useState, useEffect } from "react";
import { BottomNav } from "../components/BottomNav";
import { TopNav } from "../components/TopNav";
import { GridAlbum } from "@/components/GridAlbum";

export function Collections() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetchAlbums();
    }, []);

    const fetchAlbums = async () => {
        try {
            const response = await fetch("https://nook-yvgg.onrender.com/albums", { credentials: "include" });
            const data = await response.json();
            setAlbums(data.message);
        } catch (error) {
            console.error('Error fetching albums:', error);
        }
    };

  return (
    <>
      <TopNav />
      <div className="h-full p-4">
        <h2 className="text-2xl">Your Collections</h2>
        <div className="mt-4">
          {albums.length === 0 ? (
            <p>No collections available.</p>
          ) : (
            albums.map((album:any) => (
               <GridAlbum key={album.id} id={album.id} name={album.name}mediaCount={album.mediaCount} />
            ))
          )}
        </div>
      </div>
      <BottomNav />
    </>
  );
}
