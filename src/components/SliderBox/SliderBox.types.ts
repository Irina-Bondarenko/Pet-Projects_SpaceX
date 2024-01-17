import { SLIDER_BOX_PRESET } from "./SliderBox.data";

interface IDataProps {
  id: string;
  name: string;
  description: string;
  image?: string;
  active?: boolean;
}

interface IIconBoxProps {
  data: IDataProps[];
  preset?:
    | typeof SLIDER_BOX_PRESET.INFO_CARD
    | typeof SLIDER_BOX_PRESET.PHOTO_CARD;
}

export type { IIconBoxProps };
