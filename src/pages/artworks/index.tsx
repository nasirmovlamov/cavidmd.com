import { ArtElement } from "components/shared/ArtElement";
import { collection, getDocs } from "firebase/firestore";
import { db } from "firebase-conf";
import React from "react";
import { useState } from "react";
import { Bars } from "react-loader-spinner";

export const Artworks = () => {
  const [artworks, setArtworks] = useState<{
    status: "idle" | "loading" | "succeeded" | "failed";
    data: {
      id: string;
      title: string;
      img: string;
      description: string;
    }[];
  }>({
    status: "idle",
    data: []
  });

  const getArworks = async () => {
    setArtworks({ status: "loading", data: [] });
    try {
      const fetchArworks = await await getDocs(collection(db, "artworks"));
      const artworks = fetchArworks.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setArtworks({
        status: "succeeded",
        data: artworks as {
          id: string;
          title: string;
          img: string;
          description: string;
        }[]
      });
    } catch (error) {
      setArtworks({ status: "failed", data: [] });
    }
  };

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("background-image", "url()");
    document.querySelector(".dark-div")?.remove();
    getArworks();
  }, []);

  return (
    <div className="flex flex-wrap gap-8 mt-14 mx-5  sm:mx-auto justify-center   2xl:max-w-[1500px]">
      {artworks.status === "succeeded" &&
        artworks.data.map((artwork) => (
          <ArtElement
            id={artwork.id}
            key={artwork.id}
            title={artwork.title}
            imgSrc={artwork.img}
            description={artwork.description}
          />
        ))}
      {artworks.status === "loading" && (
        <div className="text-center text-3xl flex justify-center ">
          <Bars
            height="80"
            width="80"
            color="white"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
};
