import { ReactNode } from 'react';

export enum CardType {

}
export enum CardSize {
  SMALL = 'sm',
  MEDIUM = 'md',
}

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface CardsProps {
  children?: ReactNode;
  type?: CardType;
  header?: ReactNode;
  footer?: ReactNode;
  size?: CardSize;
  theme?: ThemeType
}
