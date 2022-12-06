import { collection, getDocs } from "firebase/firestore";
import { db } from "firebase-conf";
import React from "react";
import { useLocation, useParams } from "react-router-dom";

export const SelectedArtwork = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = React.useState({
    status: "idle" as "idle" | "loading" | "succeeded" | "failed",
    data: {
      id: "",
      title: "",
      img: "",
      description: ""
    } as {
      id: string;
      title?: string;
      img?: string;
      description?: string;
    }
  });

  const getSelectedArtwork = async () => {
    setArtwork({ status: "loading", data: { id: "", title: "", img: "", description: "" } });
    try {
      const fetchArtwork = await await getDocs(collection(db, "artworks"));
      const artworks = fetchArtwork.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const selectedArtwork: any = artworks.find((artwork) => artwork.id === id);
      setArtwork({
        status: "succeeded",
        data: selectedArtwork as {
          id: string;
          title: string;
          img: string;
          description: string;
        }
      });
      const root = document.documentElement;
      root.style.setProperty("background-image", "url(" + selectedArtwork?.img + ")");
      root.style.setProperty("background-size", "cover");
      root.style.setProperty("background-repeat", "no-repeat");
      root.style.setProperty("background-position", "center");
      root.style.setProperty("background-attachment", "fixed");
      root.style.setProperty("background-color", "black");
      const darkDiv = document.createElement("div");
      darkDiv.classList.add("dark-div");
      darkDiv.style.setProperty("background-color", "rgba(0,0,0,0.60)");
      darkDiv.style.setProperty("position", "fixed");
      darkDiv.style.setProperty("top", "0");
      darkDiv.style.setProperty("left", "0");
      darkDiv.style.setProperty("width", "100%");
      darkDiv.style.setProperty("height", "100%");
      darkDiv.style.setProperty("z-index", "-1");
      document.body.appendChild(darkDiv);
    } catch (error) {
      setArtwork({
        status: "failed",
        data: { id: "", title: "", img: "", description: "" }
      });
    }
  };

  React.useEffect(() => {
    getSelectedArtwork();
  }, []);

  if (artwork.status === "succeeded") {
    return (
      <div className="mt-10 md:mt-28 md:mx-auto xl:w-max flex gap-10 flex-wrap justify-center mx-10 mb-20">
        <div className="flex mx-auto gap-10 md:gap-20">
          <img
            src={artwork.data.img}
            alt=""
            className="w-[360px] md:w-[560px] h-auto shadow-lg shadow-gray-800 rounded-lg"
          />
        </div>
        <div className="flex flex-col text-white max-w-lg">
          <h1 className=" text-3xl md:text-5xl  mt-0 md:mt-0 text-[#B8FE00] font-bold leading-10">
            {artwork.data.title}
          </h1>
          <p className="text-xl md:text-2xl tracking-wider mt-2 md:mt-2 text-justify ">{artwork.data.description}</p>
        </div>
      </div>
    );
  }

  return <div>loading</div>;
};
