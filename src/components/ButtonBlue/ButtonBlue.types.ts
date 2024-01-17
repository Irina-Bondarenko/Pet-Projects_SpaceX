import React from "react";

interface IButtonBlueProps {
  onClick?: () => void;
  toLink?: string;
  title: string;
  children?: React.ReactNode;
  width?: string;
  mr?: string;
}

export type { IButtonBlueProps };
