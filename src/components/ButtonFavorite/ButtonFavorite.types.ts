import { ButtonPresets } from "./ButtonFavorite.data";
import React from "react";

interface IDataProps {
  id: string;
  name: string;
  description: string;
  image?: string;
  active?: boolean;
}

interface IButtonProps {
  addTourToFavoritesHandler?: (props: IDataProps) => void;
  toLink?: string;
  children?: React.ReactNode;
  preset?: typeof ButtonPresets.WHITE | typeof ButtonPresets.PURPLE;
  data?: IDataProps;
  isActive?: boolean;
}

export type { IButtonProps };
