import { atom } from "recoil";

const feedDataAtom = atom({
  key: "feedDataAtom",
  default: [],
});

export default feedDataAtom;
