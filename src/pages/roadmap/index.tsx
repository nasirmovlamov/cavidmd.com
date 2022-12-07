import { collection, getDocs } from "firebase/firestore";
import { db } from "firebase-conf";
import React, { useState } from "react";

export const Roadmap = () => {
  const [roadMaps, setRoadMaps] = useState<{
    status: "idle" | "loading" | "succeeded" | "failed";
    data: {
      name: string;
      pdf_link: string;
    }[];
  }>({
    status: "idle",
    data: []
  });

  const getRoadMaps = async () => {
    setRoadMaps({ status: "loading", data: [] });
    try {
      const fetchArworks = await await getDocs(collection(db, "roadmap"));
      const roadmap = fetchArworks.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setRoadMaps({
        status: "succeeded",
        data: roadmap as unknown as {
          name: string;
          pdf_link: string;
        }[]
      });
    } catch (error) {
      setRoadMaps({ status: "failed", data: [] });
    }
  };

  React.useEffect(() => {
    getRoadMaps();
  }, []);
  return (
    <div className="mt-10  md:mt-[200px]  mx-auto w-max gap-9 flex flex-wrap flex-col pb-20">
      {roadMaps.status === "succeeded" &&
        roadMaps.data.map((roadmap) => (
          <h1 key={roadmap.name} className="flex flex-col gap-4 text-3xl text-white hover:text-[#B8FE00]">
            <a href={roadmap.pdf_link} target="_blank" download rel="noreferrer">
              {roadmap.name}
            </a>
          </h1>
        ))}
      {roadMaps.status === "loading" && <div>Loading...</div>}
      {roadMaps.status === "failed" && <div>Something went wrong</div>}
    </div>
  );
};
