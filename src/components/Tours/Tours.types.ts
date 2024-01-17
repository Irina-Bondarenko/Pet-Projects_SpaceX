import React from "react";

interface IRocketProps {
  id: string;
  description: string;
  name: string;
}

interface IToursProps {
  scrollToSectionRef?: React.RefObject<HTMLDivElement>;
}

interface IDataProps {
  id: string;
  name: string;
  description: string;
  image?: string;
  active?: boolean;
}

export type { IToursProps, IRocketProps, IDataProps };
