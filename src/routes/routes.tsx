import React from "react";
import { Navigate, Route, Routes as ReactRoutes } from "react-router-dom";

import { About } from "../pages/about";
import { Artworks } from "../pages/artworks";
import { SelectedArtwork } from "../pages/artworks/artworks_id";
import { Asset } from "../pages/asset";
import { Contact } from "../pages/contact";
import { Home } from "../pages/home";
import { Nft } from "../pages/nft";
import { Roadmap } from "../pages/roadmap";
import { PATH } from "./path";

export const Routes = () => (
  <ReactRoutes>
    <Route path={PATH.HOME} element={<Home />} />
    <Route path={PATH.ABOUT} element={<About />} />
    <Route path={PATH.ARTWORK_ID} element={<SelectedArtwork />} />
    <Route path={PATH.ARTWORK} element={<Artworks />} />
    <Route path={PATH.CONTACT} element={<Contact />} />
    <Route path={PATH.NFT} element={<Nft />} />
    <Route path={PATH.ASSET} element={<Asset />} />
    <Route path={PATH.ROADMAP} element={<Roadmap />} />
    <Route path="*" element={<Navigate to={PATH.HOME} replace />} />
  </ReactRoutes>
);
