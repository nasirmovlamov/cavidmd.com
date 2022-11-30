const BASE_URL = "/";

const HOME = BASE_URL;

const ABOUT = "/about";
const ARTWORK = "/artwork";
const ARTWORK_ID = "/artwork/:id";
const CONTACT = "/contact";
const NFT = "/nft";
const ASSET = "/asset";
const ROADMAP = "/roadmap";

interface Path {
  HOME: typeof HOME;
  ABOUT: typeof ABOUT;
  ARTWORK: typeof ARTWORK;
  ARTWORK_ID: typeof ARTWORK_ID;
  CONTACT: typeof CONTACT;
  NFT: typeof NFT;
  ASSET: typeof ASSET;
  ROADMAP: typeof ROADMAP;
}

export type PathKey = keyof Path;
export type PathValue = Path[PathKey];

export type PathTitle = {
  [key in PathKey]: string;
};

// FOR ONLY SPESIFIC ROUTE GROUP
export const APP_PATH = [HOME];

// INCLUDES ALL OF THE PATHS
export const PATH: Path = {
  HOME,
  ABOUT,
  ARTWORK,
  ARTWORK_ID,
  CONTACT,
  NFT,
  ASSET,
  ROADMAP
};
