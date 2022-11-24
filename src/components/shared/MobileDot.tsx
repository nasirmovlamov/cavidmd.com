import dotImg from "images/dot.png";
import React from "react";
import { useLocation } from "react-router-dom";

export const MobileDot: React.FC<{ path: string }> = ({ path }) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  return isActive ? <img src={dotImg} className="w-2 h-2" alt="" /> : null;
};
