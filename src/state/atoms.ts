import { atom } from "recoil";

interface IDataProps {
  id: string;
  name: string;
  description: string;
  image?: string;
  active?: boolean;
}

export const favoriteToursState = atom<IDataProps[]>({
  key: "favoriteToursState",
  default: [],
});

export const toursState = atom<IDataProps[]>({
  key: "toursState",
  default: [],
});
