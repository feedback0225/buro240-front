//disk
export const DISK_DEPTH = window.innerWidth > 850 ? 8 : 3;
export const DISK_WIDTH = window.innerWidth > 850 ? 7 : 2.5;
export const DISK_HEIGHT = window.innerWidth > 850 ? 0.5 : 0.2;
export const QUANTITY_DISKS = 10;
export const COLORS = [
  // "#503F65",
  // "#6C4644",
  // "#454C65",
  "#E3BEBC",
  "#8B00FF",
  "#E3BEBC",
  "#8B00FF",
  "#E3BEBC",
  "#8B00FF",
  "#E3BEBC",
  "#E3BEBC",
  "#E3BEBC",

  "#E3BEBC",
  "#EEEEEE",
  "#C1C6C9",
  "#C0C5AC",
  "#A2C2CE",
  "#F5CBB4",
  "#CAD2DC",
];

export const PHRASE = [
  "ROKLUMROKLUMROKLUMROKLUM",
  "ОТБИЛАСЬ_ОТ_РУК",
  "ROKLUMROKLUMROKLUMROKLUM",
  "ОТБИЛАСЬ_ОТ_РУК",
  "ROKLUMROKLUMROKLUMROKLUM",
  "ОТБИЛАСЬ_ОТ_РУК",
  "ROKLUMROKLUMROKLUMROKLUM",
  "ОТБИЛАСЬ_ОТ_РУК",
  "ROKLUMROKLUMROKLUMROKLUM",
  "ROKLUMROKLUMROKLUMROKLUM",
];

import topTexture1 from "@/assets/diskTopSide1.png";
import topTexture2 from "@/assets/diskTopSide2.png";
import topPhoto from "@/assets/topPhoto1.png";
import sideTextureCommon from "@/assets/sidePhoto.png";

export const TEXTURES = [
  { top: topTexture1, left: sideTextureCommon, photo: topPhoto },
  { top: topTexture2, left: sideTextureCommon, photo: topPhoto },
  { top: topTexture1, left: sideTextureCommon, photo: topPhoto },
  { top: topTexture2, left: sideTextureCommon, photo: topPhoto },
  { top: topTexture1, left: sideTextureCommon, photo: topPhoto },
  { top: topTexture2, left: sideTextureCommon, photo: topPhoto },
  { top: topTexture1, left: sideTextureCommon, photo: topPhoto },
  { top: topTexture2, left: sideTextureCommon, photo: topPhoto },
  { top: topTexture1, left: sideTextureCommon, photo: topPhoto },
  { top: topTexture2, left: sideTextureCommon, photo: topPhoto },
];

export const TIME_BACK_DISK_TO_FLOW = 2;
